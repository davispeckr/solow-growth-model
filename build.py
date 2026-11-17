#!/usr/bin/env python3
"""
build.py — gera o dashboard do modelo de Solow em docs/index.html.

    python build.py

Le pwt.csv e pwt_hc.csv (Penn World Table 11.0), refaz a amostra do notebook,
estima o modelo de Solow e o modelo aumentado em todas as combinacoes de amostra
e de g + delta, e grava:

    docs/index.html     dashboard (arquivo unico, dados embutidos)
    docs/solow.csv      medias por pais, renda prevista e diferenca em cada especificacao

Falha ruidosamente se a especificacao base nao reproduzir os coeficientes do
artigo, o que protege contra mudanca silenciosa nos dados ou na amostra.
"""
import json
import pathlib

import numpy as np
import pandas as pd
import statsmodels.api as sm

RAIZ = pathlib.Path(__file__).parent
DOCS = RAIZ / "docs"
TEMPLATE = RAIZ / "template"

G = 0.015
DELTA = 0.05

OIL = ["SAU", "DZA", "AGO", "BHR", "BRN", "ARE", "GAB", "GNQ", "IRN", "IRQ",
       "KWT", "NGA", "OMN", "QAT", "TTO", "VEN"]
MICRO = ["MSR", "AIA", "TCA", "VGB", "CYM", "KNA", "BMU", "DMA", "ATG", "SYC",
         "ABW", "GRD", "VCT", "STP", "LCA", "MAC", "MDV"]

# coeficientes da especificacao base no artigo (Tabela 1, coluna Base)
ESPERADO_BASE = {"log_s": 1.390, "log_ngd": -1.736, "R2": 0.405, "N": 180}


def construir_base() -> pd.DataFrame:
    """Mesma construcao da secao empirica do notebook."""
    df = pd.read_csv(RAIZ / "pwt.csv", encoding="utf-8-sig")
    df = df.rename(columns={"cn": "capital", "csh_i": "investment_share",
                            "pop": "population", "rgdpe": "gdp"})
    df = df.sort_values(["Country", "year"])
    df["k"] = df["capital"] / df["population"]
    df["y"] = df["gdp"] / df["population"]
    df["n"] = df.groupby("Country")["population"].pct_change()
    df = df.dropna()
    df = df.groupby("Country").filter(lambda x: len(x) > 20)

    df_avg = df.groupby(["Country", "iso3"]).agg(
        y=("y", "mean"), s=("investment_share", "mean"), n=("n", "mean"),
        ano0=("year", "min"), ano1=("year", "max"), anos=("year", "count"),
    ).reset_index()

    hc = pd.read_csv(RAIZ / "pwt_hc.csv", encoding="utf-8-sig")[["Country", "year", "hc"]]
    df_hc = df.merge(hc, on=["Country", "year"], how="left").dropna()
    df_hc = df_hc.groupby("Country").filter(lambda x: len(x) > 20)
    hc_avg = df_hc.groupby("Country")["hc"].mean().reset_index()

    base = df_avg.merge(hc_avg, on="Country", how="left")
    base["log_y"] = np.log(base["y"])
    base["log_s"] = np.log(base["s"])
    base["log_h"] = np.log(base["hc"])
    base["log_ngd_065"] = np.log(base["n"] + G + DELTA)
    base["log_ngd_050"] = np.log(base["n"] + 0.05)
    return base


AMOSTRAS = {
    "completa": lambda b: b,
    "semOil": lambda b: b[~b.iso3.isin(OIL)],
    "semOilMicro": lambda b: b[~b.iso3.isin(OIL + MICRO)],
    "hc": lambda b: b[b.hc.notna()],
    "hcSemOil": lambda b: b[b.hc.notna() & ~b.iso3.isin(OIL)],
}


def estrelas(p: float) -> str:
    return "***" if p < 0.01 else "**" if p < 0.05 else "*" if p < 0.10 else ""


def estimar(base: pd.DataFrame, amostra: str, modelo: str, gd: str) -> dict:
    d = AMOSTRAS[amostra](base).copy()
    ngd = f"log_ngd_{gd}"
    regs = ["log_s", ngd] + (["log_h"] if modelo == "aumentado" else [])
    d = d.dropna(subset=regs + ["log_y"])

    X = sm.add_constant(d[regs])
    m = sm.OLS(d["log_y"], X).fit()
    p_restr = float(m.f_test(f"log_s + {ngd} = 0").pvalue)

    d["log_s_ngd"] = d["log_s"] - d[ngd]
    Xr = sm.add_constant(d[["log_s_ngd"] + (["log_h"] if modelo == "aumentado" else [])])
    r = sm.OLS(d["log_y"], Xr).fit()
    b = r.params["log_s_ngd"]
    alpha = b / (1 + b)
    beta = r.params["log_h"] * (1 - alpha) if modelo == "aumentado" else None

    nomes = {"const": "c", "log_s": "s", ngd: "ngd", "log_h": "h"}
    coefs = {nomes[k]: {"b": round(float(m.params[k]), 4), "se": round(float(m.bse[k]), 4),
                        "st": estrelas(float(m.pvalues[k]))} for k in m.params.index}
    medias = {nomes[k]: round(float(d[k].mean()), 5) for k in regs}
    return {
        "coefs": coefs,
        "medias": medias,
        "N": int(m.nobs),
        "R2": round(float(m.rsquared), 4),
        "p": round(p_restr, 4),
        "alpha": round(float(alpha), 4),
        "beta": None if beta is None else round(float(beta), 4),
        "sdres": round(float(m.resid.std()), 4),
        "membros": sorted(d.iso3.tolist()),
    }


def main() -> None:
    DOCS.mkdir(exist_ok=True)
    print("→ refazendo a amostra do notebook")
    base = construir_base()
    nomes = pd.read_csv(TEMPLATE / "paises.csv", dtype=str)
    base = base.merge(nomes[["iso3", "nome_pt", "nome_en", "iso_num"]], on="iso3", how="left")
    print(f"  {len(base)} países, {int(base.hc.notna().sum())} com hc")

    print("→ estimando as especificações")
    specs = {}
    for gd in ["065", "050"]:
        for amostra in AMOSTRAS:
            specs[f"solow|{amostra}|{gd}"] = estimar(base, amostra, "solow", gd)
        for amostra in ["hc", "hcSemOil"]:
            specs[f"aumentado|{amostra}|{gd}"] = estimar(base, amostra, "aumentado", gd)

    b0 = specs["solow|completa|065"]
    obtido = {"log_s": b0["coefs"]["s"]["b"], "log_ngd": b0["coefs"]["ngd"]["b"],
              "R2": b0["R2"], "N": b0["N"]}
    for k, v in ESPERADO_BASE.items():
        if abs(obtido[k] - v) > 0.0015:
            raise SystemExit(f"ABORTADO: {k} da base = {obtido[k]}, artigo = {v}. "
                             "Os dados ou a amostra mudaram.")
    print(f"  base confere com o artigo: s = {obtido['log_s']:.3f}, "
          f"n+g+δ = {obtido['log_ngd']:.3f}, R² = {obtido['R2']:.3f}")

    def r(v, k=5):
        return None if pd.isna(v) else round(float(v), k)

    paises = [{
        "iso": row.iso3, "num": row.iso_num, "pt": row.nome_pt, "en": row.nome_en,
        "y": r(row.y, 1), "s": r(row.s, 4), "n": r(row.n, 5), "hc": r(row.hc, 3),
        "ls": r(row.log_s), "lg065": r(row.log_ngd_065), "lg050": r(row.log_ngd_050),
        "lh": r(row.log_h), "ly": r(row.log_y),
        "a0": int(row.ano0), "a1": int(row.ano1), "na": int(row.anos),
        "oil": row.iso3 in OIL, "micro": row.iso3 in MICRO,
    } for row in base.itertuples()]

    pay = {"paises": paises, "specs": specs, "oil": OIL, "micro": MICRO}
    data_json = json.dumps(pay, separators=(",", ":"), ensure_ascii=False)
    geo_json = (TEMPLATE / "world-110m.json").read_text(encoding="utf-8")

    print("→ gravando docs/solow.csv")
    out = base[["iso3", "nome_pt", "Country", "ano0", "ano1", "anos", "y", "s", "n", "hc"]].copy()
    for key, sp in specs.items():
        c = sp["coefs"]
        gd = key.split("|")[2]
        pred = c["c"]["b"] + c["s"]["b"] * base.log_s + c["ngd"]["b"] * base[f"log_ngd_{gd}"]
        if "h" in c:
            pred = pred + c["h"]["b"] * base.log_h
        out[f"y_prev[{key}]"] = np.exp(pred).round(1)
        out[f"dif_pct[{key}]"] = ((np.exp(base.log_y - pred) - 1) * 100).round(2)
    out.to_csv(DOCS / "solow.csv", index=False)

    print("→ gerando docs/index.html")
    html = (
        (TEMPLATE / "head.html").read_text(encoding="utf-8")
        + (TEMPLATE / "body.html").read_text(encoding="utf-8")
        + "<script>const D=" + data_json + ";\nconst GEO=" + geo_json + ";\n"
        + (TEMPLATE / "script.js").read_text(encoding="utf-8")
        + "</script>\n</body>\n</html>\n"
    )
    (DOCS / "index.html").write_text(html, encoding="utf-8")
    print(f"\nOK · {len(specs)} especificações · {len(paises)} países · {len(html)/1024:.0f} KB")


if __name__ == "__main__":
    main()
