let LANG="pt";
const I18N={
 pt:{
  titulo:"Modelo de Solow: renda observada e prevista",
  standfirst:'Este painel aplica o teste de <a href="https://doi.org/10.2307/2118477" target="_blank" rel="noopener">Mankiw, Romer e Weil (1992)</a> aos dados da Penn World Table 11.0. Para cada país, compara a renda per capita média de 1950 a 2023 com a renda que o modelo de Solow, ou sua versão com capital humano, prevê a partir do investimento, do crescimento populacional e da escolaridade.',
  comoler:'<b>Como ler.</b> A renda prevista é a de um país com o investimento, o crescimento populacional e, no modelo aumentado, o capital humano daquele país, mas com o nível tecnológico médio da amostra. A diferença entre a renda observada e a prevista é o que o modelo não explica: em azul, países mais ricos do que o modelo prevê; em vermelho, mais pobres. Na teoria, essa diferença é a tecnologia de cada país.',
  "lbl-modelo":"Modelo","lbl-amostra":"Amostra de estimação","lbl-gd":"g + δ",
  modelo:["Solow","Solow aumentado"],
  amostra:["Completa","Sem petróleo","Sem petróleo e microestados","Com capital humano","Com capital humano, sem petróleo"],
  amostraCurta:{completa:"amostra completa",semOil:"sem petróleo",semOilMicro:"sem petróleo e microestados",hc:"com capital humano",hcSemOil:"com capital humano, sem petróleo"},
  modeloNome:{solow:"Modelo de Solow",aumentado:"Modelo de Solow aumentado"},
  busca:"Buscar país: Brasil, Japão, Nigéria…",
  obs:"Renda observada","obs-sub":"média anual por pessoa, em PPC",
  prev:"Renda prevista",prevSub:m=>m,
  dif:"Diferença",difPos:"acima do previsto",difNeg:"abaixo do previsto",
  abaixo:"Abaixo do previsto",acima:"Acima do previsto",
  "h-decomp":"Por que o modelo prevê essa renda",
  "sub-decomp":"Efeito de cada variável em relação ao país médio da amostra. Os efeitos se multiplicam.",
  "h-dados-pais":"Dados do país",
  "sub-dados-pais":"Médias do período disponível para o país, Penn World Table 11.0.",
  termos:{s:"Investimento",ngd:"Crescimento populacional",h:"Capital humano",prev:"Previsto pelo modelo",res:"Não explicado (A)",obs:"Observado"},
  linhas:{s:"Taxa de investimento, s",n:"Crescimento populacional, n",hc:"Capital humano, hc",anos:"Anos com dados",amostra:"Na amostra de estimação",pos:"Posição na amostra",grupo:"Grupo"},
  sim:"sim",nao:"não",semDado:"sem dado",aa:"ao ano",
  posTxt:(r,n)=>`${r}º de ${n} pela diferença`,
  oil:"exportador de petróleo",micro:"microestado",
  foraTag:"fora da amostra de estimação",semHcTag:"sem dado de capital humano",
  prevFora:"previsão fora da amostra",
  anosTxt:(a,b,n)=>`dados de ${a} a ${b} · ${n} anos`,
  "fig-mapa":"Diferença entre a renda observada e a prevista",
  "sub-mapa":"Clique em um país para selecioná-lo. Tons mais claros: países fora da amostra de estimação, com previsão fora da amostra.",
  legAbaixo:"abaixo do previsto",legAcima:"acima do previsto",legFora:"fora da amostra",legSem:"sem dado",
  "fig-disp":"Renda prevista contra renda observada",
  "sub-disp":"Países da amostra de estimação, em logaritmo. Sobre a linha tracejada, a renda observada é igual à prevista.",
  eixoX:"ln da renda prevista",eixoY:"ln da renda observada",
  "h-acima":"Mais ricos do que o modelo prevê","h-abaixo":"Mais pobres do que o modelo prevê",
  coefCap:(m,a,g)=>`${m} · ${a} · g + δ = ${g}`,
  coefRows:{s:"s",ngd:"n + g + δ",h:"h",c:"Constante",N:"N.º",R2:"R²",p:"p-valor (β₁ + β₂ = 0)",alpha:"α implícito",beta:"β implícito"},
  "nota-coef":"Variável dependente: renda per capita média. Todas as variáveis em logaritmo natural. ***, ** e * indicam significância a 1%, 5% e 10%. Erros-padrão entre parênteses. N.º: número de países. p-valor: teste F da restrição β₁ + β₂ = 0. α e β implícitos da regressão restrita.",
  "h-sobre":"Sobre o painel",
  "sobre-1":"O modelo de Solow explica o nível de renda de longo prazo de um país por três taxas: quanto ele investe, quanto sua população cresce e quanto o capital se deprecia. Países que investem mais acumulam mais capital por trabalhador; países cuja população cresce mais rápido dividem o investimento entre mais pessoas. Mankiw, Romer e Weil (1992) mostraram que essa previsão funciona nos dados, mas com um efeito do investimento grande demais, e propuseram incluir o capital humano.",
  "sobre-2":"O painel refaz esse teste com 180 países e médias de 1950 a 2023. Os coeficientes da especificação escolhida definem a renda prevista de cada país, e a diferença para a renda observada mostra o que investimento, população e escolaridade não explicam.",
  "h-interp":"Interpretação e limitações",
  "interp-1":"A diferença não é um erro de medida: no modelo, ela é o nível tecnológico de cada país, que inclui instituições, eficiência e tudo o mais que a regressão não observa. Por isso não deve ser lida como desempenho econômico. Exportadores de petróleo aparecem muito acima do previsto porque a renda deles vem de recursos naturais, e não de acumulação de capital. A regressão é em corte transversal e mede associações entre países, não efeitos causais: o nível tecnológico provavelmente é correlacionado com o investimento e com a escolaridade, o que infla os coeficientes. No modelo aumentado, o coeficiente do capital humano fica muito acima do previsto pela teoria, sinal de que o índice de escolaridade também capta produtividade.",
  "h-metod":"Metodologia",
  "metod-1":"Com função de produção Cobb-Douglas, população crescendo à taxa <i>n</i>, tecnologia à taxa <i>g</i>, depreciação <i>δ</i> e taxa de investimento <i>s</i>, a renda per capita de estado estacionário é:",
  "metod-2":"Em logaritmos, a relação é linear nos parâmetros. O nível tecnológico vai para a constante (a média) e para o erro (o desvio de cada país), e a equação estimada por mínimos quadrados é:",
  "metod-3":"No modelo aumentado, o estoque de capital humano por trabalhador, <i>h</i>, entra como terceiro fator:",
  "metod-4":"A renda prevista usa os coeficientes estimados e os dados do país. A diferença exibida é a razão entre a renda observada e a prevista, menos um:",
  "metod-5":"Países fora da amostra de estimação, como os exportadores de petróleo na amostra sem petróleo, recebem uma previsão fora da amostra com os mesmos coeficientes. A decomposição mostra o efeito de cada termo em relação ao país médio da amostra: o coeficiente vezes a distância do país à média, em logaritmo.",
  "h-params":"Parâmetros do painel",
  "par-modelo":"<b>Modelo.</b> Solow usa investimento e crescimento populacional; o aumentado inclui o índice de capital humano <i>hc</i> e só pode ser estimado nas amostras com esse dado.",
  "par-amostra":"<b>Amostra de estimação.</b> Países usados na regressão. A amostra completa tem 180 países. Sem petróleo exclui 16 exportadores; sem microestados exclui também 17 pequenas ilhas e territórios. As amostras com capital humano têm 144 e 130 países.",
  "par-gd":"<b>g + δ.</b> Soma do progresso técnico e da depreciação, igual para todos os países. O valor base é 0,065 (1,5% + 5%); 0,05 é o valor de MRW.",
  "h-dados":"Dados",
  "dados-1":"Penn World Table 11.0. Renda per capita: rgdpe dividido por pop. Taxa de investimento: csh_i. Crescimento populacional: variação anual de pop. Capital humano: índice hc, baseado em anos de escolaridade e retornos da educação. Ficam os países com mais de 20 anos de dados completos, e cada variável é a média do período disponível. Pequenos territórios não aparecem no mapa, mas podem ser buscados.",
  "h-refs":"Referências",
  "btn-csv":"Baixar dados da especificação (CSV)",
  "fonte":"Fonte dos dados: Penn World Table 11.0 (Feenstra, Inklaar e Timmer, 2015). Elaboração própria."
 },
 en:{
  titulo:"Solow model: observed and predicted income",
  standfirst:'This dashboard applies the <a href="https://doi.org/10.2307/2118477" target="_blank" rel="noopener">Mankiw, Romer and Weil (1992)</a> test to Penn World Table 11.0 data. For each country, it compares average income per capita from 1950 to 2023 with the income the Solow model, or its human capital version, predicts from investment, population growth and schooling.',
  comoler:'<b>How to read it.</b> Predicted income is that of a country with the investment, population growth and, in the augmented model, human capital of that country, but with the sample\'s average technology level. The gap between observed and predicted income is what the model does not explain: blue for countries richer than predicted, red for poorer. In theory, this gap is each country\'s technology.',
  "lbl-modelo":"Model","lbl-amostra":"Estimation sample","lbl-gd":"g + δ",
  modelo:["Solow","Augmented Solow"],
  amostra:["Full","Non-oil","Non-oil, no microstates","With human capital","With human capital, non-oil"],
  amostraCurta:{completa:"full sample",semOil:"non-oil",semOilMicro:"non-oil, no microstates",hc:"with human capital",hcSemOil:"with human capital, non-oil"},
  modeloNome:{solow:"Solow model",aumentado:"Augmented Solow model"},
  busca:"Search a country: Brazil, Japan, Nigeria…",
  obs:"Observed income","obs-sub":"annual average per person, PPP",
  prev:"Predicted income",prevSub:m=>m,
  dif:"Gap",difPos:"above prediction",difNeg:"below prediction",
  abaixo:"Below prediction",acima:"Above prediction",
  "h-decomp":"Why the model predicts this income",
  "sub-decomp":"Effect of each variable relative to the sample's average country. Effects multiply.",
  "h-dados-pais":"Country data",
  "sub-dados-pais":"Averages over the period available for the country, Penn World Table 11.0.",
  termos:{s:"Investment",ngd:"Population growth",h:"Human capital",prev:"Predicted by the model",res:"Unexplained (A)",obs:"Observed"},
  linhas:{s:"Investment rate, s",n:"Population growth, n",hc:"Human capital, hc",anos:"Years of data",amostra:"In estimation sample",pos:"Rank in sample",grupo:"Group"},
  sim:"yes",nao:"no",semDado:"no data",aa:"per year",
  posTxt:(r,n)=>`${r} of ${n} by gap`,
  oil:"oil exporter",micro:"microstate",
  foraTag:"outside estimation sample",semHcTag:"no human capital data",
  prevFora:"out-of-sample prediction",
  anosTxt:(a,b,n)=>`data from ${a} to ${b} · ${n} years`,
  "fig-mapa":"Gap between observed and predicted income",
  "sub-mapa":"Click a country to select it. Lighter shades: countries outside the estimation sample, with out-of-sample predictions.",
  legAbaixo:"below prediction",legAcima:"above prediction",legFora:"outside sample",legSem:"no data",
  "fig-disp":"Predicted versus observed income",
  "sub-disp":"Countries in the estimation sample, in logs. On the dashed line, observed income equals predicted income.",
  eixoX:"log predicted income",eixoY:"log observed income",
  "h-acima":"Richer than the model predicts","h-abaixo":"Poorer than the model predicts",
  coefCap:(m,a,g)=>`${m} · ${a} · g + δ = ${g}`,
  coefRows:{s:"s",ngd:"n + g + δ",h:"h",c:"Constant",N:"No.",R2:"R²",p:"p-value (β₁ + β₂ = 0)",alpha:"Implied α",beta:"Implied β"},
  "nota-coef":"Dependent variable: average income per capita. All variables in natural logs. ***, ** and * denote significance at 1%, 5% and 10%. Standard errors in parentheses. No.: number of countries. p-value: F test of the restriction β₁ + β₂ = 0. Implied α and β from the restricted regression.",
  "h-sobre":"About the dashboard",
  "sobre-1":"The Solow model explains a country's long-run income level with three rates: how much it invests, how fast its population grows and how fast capital depreciates. Countries that invest more accumulate more capital per worker; countries whose population grows faster spread investment across more people. Mankiw, Romer and Weil (1992) showed that this prediction works in the data, but with too large an effect of investment, and proposed adding human capital.",
  "sobre-2":"The dashboard repeats that test with 180 countries and averages from 1950 to 2023. The coefficients of the chosen specification define each country's predicted income, and the gap to observed income shows what investment, population and schooling leave unexplained.",
  "h-interp":"Interpretation and limitations",
  "interp-1":"The gap is not a measurement error: in the model, it is each country's technology level, which includes institutions, efficiency and everything else the regression does not observe. It should therefore not be read as economic performance. Oil exporters appear far above prediction because their income comes from natural resources, not capital accumulation. The regression is cross-sectional and measures associations across countries, not causal effects: technology is likely correlated with investment and schooling, which inflates the coefficients. In the augmented model, the human capital coefficient is far above the theoretical value, a sign that the schooling index also captures productivity.",
  "h-metod":"Methodology",
  "metod-1":"With a Cobb-Douglas production function, population growing at rate <i>n</i>, technology at rate <i>g</i>, depreciation <i>δ</i> and investment rate <i>s</i>, steady-state income per capita is:",
  "metod-2":"In logs, the relation is linear in the parameters. Technology goes into the constant (the mean) and the error (each country's deviation), and the equation estimated by least squares is:",
  "metod-3":"In the augmented model, the stock of human capital per worker, <i>h</i>, enters as a third factor:",
  "metod-4":"Predicted income uses the estimated coefficients and the country's data. The gap shown is the ratio of observed to predicted income, minus one:",
  "metod-5":"Countries outside the estimation sample, such as oil exporters in the non-oil sample, get an out-of-sample prediction with the same coefficients. The decomposition shows each term's effect relative to the sample's average country: the coefficient times the country's distance from the mean, in logs.",
  "h-params":"Dashboard controls",
  "par-modelo":"<b>Model.</b> Solow uses investment and population growth; the augmented model adds the human capital index <i>hc</i> and can only be estimated on samples with that data.",
  "par-amostra":"<b>Estimation sample.</b> Countries used in the regression. The full sample has 180 countries. Non-oil drops 16 exporters; no microstates also drops 17 small islands and territories. The human capital samples have 144 and 130 countries.",
  "par-gd":"<b>g + δ.</b> Sum of technical progress and depreciation, equal for all countries. The baseline is 0.065 (1.5% + 5%); 0.05 is the MRW value.",
  "h-dados":"Data",
  "dados-1":"Penn World Table 11.0. Income per capita: rgdpe divided by pop. Investment rate: csh_i. Population growth: annual change in pop. Human capital: the hc index, based on years of schooling and returns to education. Countries with more than 20 years of complete data are kept, and each variable is the average over the available period. Small territories are not drawn on the map but can be searched.",
  "h-refs":"References",
  "btn-csv":"Download specification data (CSV)",
  "fonte":"Data source: Penn World Table 11.0 (Feenstra, Inklaar and Timmer, 2015). Authors' calculations."
 }
};
const T=()=>I18N[LANG];
const $=id=>document.getElementById(id);
const AMOSTRAS=["completa","semOil","semOilMicro","hc","hcSemOil"];
const HC_OK=["hc","hcSemOil"];
let sel={modelo:"solow",amostra:"completa",gd:"065"}, ISO="BRA";
const P=Object.fromEntries(D.paises.map(p=>[p.iso,p]));
const NUM=Object.fromEntries(D.paises.filter(p=>p.num).map(p=>[p.num,p]));

/* ---------- formatos ---------- */
const loc=()=>LANG==="en"?"en-US":"pt-BR";
const fmtN=(v,d)=>v.toLocaleString(loc(),{minimumFractionDigits:d,maximumFractionDigits:d});
const usd=v=>v==null?"—":(LANG==="en"?"US$":"US$ ")+fmtN(Math.round(v),0);
const pct=(v,d=0)=>v==null?"—":(v>0?"+":v<0?"−":"")+fmtN(Math.abs(v*100),d)+"%";
const pctAbs=(v,d=1)=>v==null?"—":fmtN(v*100,d)+"%";
const nome=p=>LANG==="en"?p.en:p.pt;

/* ---------- modelo ---------- */
const SP=()=>D.specs[`${sel.modelo}|${sel.amostra}|${sel.gd}`];
function lnPrev(p,sp=SP()){
  const c=sp.coefs, lg=sel.gd==="065"?p.lg065:p.lg050;
  if(p.ls==null||lg==null)return null;
  let v=c.c.b+c.s.b*p.ls+c.ngd.b*lg;
  if(c.h){if(p.lh==null)return null; v+=c.h.b*p.lh}
  return v;
}
function dif(p,sp){const l=lnPrev(p,sp);return l==null?null:Math.exp(p.ly-l)-1}
const membros=()=>new Set(SP().membros);

/* ---------- controles ---------- */
function seg(id,itens,ativo,cb,desab){
  const el=$(id); el.innerHTML="";
  itens.forEach(([v,lbl])=>{const b=document.createElement("button");
    b.textContent=lbl; b.setAttribute("aria-pressed",String(v===ativo));
    if(desab&&desab(v))b.disabled=true;
    b.onclick=()=>cb(v); el.appendChild(b)});
}
function controles(){
  seg("cModelo",[["solow",T().modelo[0]],["aumentado",T().modelo[1]]],sel.modelo,v=>{
    sel.modelo=v;
    if(v==="aumentado"&&!HC_OK.includes(sel.amostra))sel.amostra=sel.amostra==="completa"?"hc":"hcSemOil";
    tudo()});
  seg("cAmostra",AMOSTRAS.map((a,i)=>[a,T().amostra[i]]),sel.amostra,v=>{sel.amostra=v;tudo()},
    v=>sel.modelo==="aumentado"&&!HC_OK.includes(v));
  seg("cGd",[["065",LANG==="en"?"0.065":"0,065"],["050",LANG==="en"?"0.05":"0,05"]],sel.gd,v=>{sel.gd=v;tudo()});
}

/* ---------- busca ---------- */
const norm=s=>s.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase();
let sugIdx=-1, sugLista=[];
function buscar(q){
  const n=norm(q.trim()); const ul=$("sug");
  if(!n){ul.style.display="none";return}
  sugLista=D.paises.filter(p=>norm(p.pt).includes(n)||norm(p.en).includes(n)||p.iso.toLowerCase()===n)
    .sort((a,b)=>{const sa=norm(nome(a)).startsWith(n)?0:1,sb=norm(nome(b)).startsWith(n)?0:1;
      return sa-sb||nome(a).localeCompare(nome(b),loc())}).slice(0,8);
  sugIdx=sugLista.length?0:-1;
  ul.innerHTML=sugLista.map((p,i)=>`<li role="option" data-iso="${p.iso}" aria-selected="${i===sugIdx}">${nome(p)}<span>${p.iso}</span></li>`).join("");
  ul.style.display=sugLista.length?"block":"none";
  ul.querySelectorAll("li").forEach(li=>li.onmousedown=e=>{e.preventDefault();escolher(li.dataset.iso)});
}
function escolher(iso){ISO=iso;$("q").value="";$("sug").style.display="none";pais();marcarMapa();dispersao();
  $("pais").scrollIntoView({behavior:"smooth",block:"start"})}
function marcaSug(){$("sug").querySelectorAll("li").forEach((li,i)=>li.setAttribute("aria-selected",String(i===sugIdx)))}

/* ---------- cartao do pais ---------- */
function rankDe(iso){
  const m=membros(),sp=SP();
  const arr=D.paises.filter(p=>m.has(p.iso)).map(p=>[p.iso,dif(p,sp)]).sort((a,b)=>b[1]-a[1]);
  const i=arr.findIndex(x=>x[0]===iso); return i<0?null:[i+1,arr.length];
}
function pais(){
  const p=P[ISO], sp=SP(), m=membros(), d=dif(p,sp), l=lnPrev(p,sp), dentro=m.has(p.iso);
  let tags="";
  if(sel.modelo==="aumentado"&&p.lh==null)tags+=`<span class="tag fora">${T().semHcTag}</span>`;
  else if(!dentro)tags+=`<span class="tag fora">${T().foraTag}</span>`;
  $("pNome").innerHTML=nome(p)+tags;
  $("pAnos").textContent=T().anosTxt(p.a0,p.a1,p.na);
  $("vObs").textContent=usd(p.y);
  $("vPrev").textContent=l==null?"—":usd(Math.exp(l));
  $("vPrevSub").textContent=T().modeloNome[sel.modelo]+", "+T().amostraCurta[sel.amostra]+(l!=null&&!dentro?" · "+T().prevFora:"");
  $("vDif").textContent=pct(d);
  $("vDifSub").textContent=d==null?"":(d>=0?T().difPos:T().difNeg);
  $("cxDif").className=d==null?"":d>=0?"pos":"neg";
  // barra: escala log, -75% a +300%
  const lr=d==null?0:Math.log(1+d), lim=Math.log(4);
  const w=Math.min(Math.abs(lr)/lim,1)*100;
  $("fa").style.width=(lr>0?w:0)+"%"; $("fb").style.width=(lr<0?w:0)+"%";
  decomp(p,sp,l); tabelaPais(p,dentro);
}
function decomp(p,sp,l){
  const el=$("decomp");
  if(l==null){el.innerHTML=`<p class="sub">${T().semDado}</p>`;return}
  const c=sp.coefs, mu=sp.medias, lg=sel.gd==="065"?p.lg065:p.lg050;
  const termos=[["s",c.s.b*(p.ls-mu.s)],["ngd",c.ngd.b*(lg-mu.ngd)]];
  if(c.h)termos.push(["h",c.h.b*(p.lh-mu.h)]);
  const mediaPrev=c.c.b+c.s.b*mu.s+c.ngd.b*mu.ngd+(c.h?c.h.b*mu.h:0);
  const tot=l-mediaPrev, res=p.ly-l;
  const linhas=[...termos.map(([k,v])=>[T().termos[k],v,""]),[T().termos.prev,tot,"tot"],[T().termos.res,res,""],[T().termos.obs,tot+res,"tot"]];
  const lim=Math.max(1.2,...linhas.map(x=>Math.abs(x[1])));
  el.innerHTML=linhas.map(([lbl,v,cls])=>{
    const w=Math.abs(v)/lim*50, cor=v>=0?"var(--acima)":"var(--abaixo)";
    const pos=v>=0?`left:50%;width:${w}%`:`left:${50-w}%;width:${w}%`;
    return `<div class="lin ${cls}"><span>${lbl}</span><div class="trk"><div class="bar" style="${pos};background:${cor}"></div></div><span class="v" style="color:${cor}">${pct(Math.exp(v)-1)}</span></div>`}).join("");
}
function tabelaPais(p,dentro){
  const L=T().linhas, r=rankDe(p.iso);
  const grupo=[p.oil?T().oil:"",p.micro?T().micro:""].filter(Boolean).join(", ")||"—";
  const rows=[
    [L.s,pctAbs(p.s)],
    [L.n,pctAbs(p.n,2)+` <small>${T().aa}</small>`],
    [L.hc,p.hc==null?T().semDado:fmtN(p.hc,2)],
    [L.anos,`${p.a0}–${p.a1} <small>(${p.na})</small>`],
    [L.grupo,grupo],
    [L.amostra,dentro?T().sim:T().nao],
    [L.pos,r?T().posTxt(r[0],r[1]):"—"],
  ];
  $("tDados").innerHTML=rows.map(([a,b])=>`<tr><td>${a}</td><td>${b}</td></tr>`).join("");
}

/* ---------- cores ---------- */
const corDif=d=>d==null?"var(--semdado)":d3.interpolateRdBu(.5+Math.max(-1,Math.min(1,Math.log(1+d)/Math.log(4)))/2);

/* ---------- mapa ---------- */
const MW=1100, MH=520;
let geoPaths=null;
function montarMapa(){
  const fc=topojson.feature(GEO,GEO.objects.countries);
  fc.features=fc.features.filter(f=>f.id!=="010");
  const proj=d3.geoNaturalEarth1().fitExtent([[0,4],[MW,MH-4]],fc);
  const path=d3.geoPath(proj);
  const svg=d3.select("#mapa").attr("viewBox",`0 0 ${MW} ${MH}`);
  geoPaths=svg.append("g").selectAll("path").data(fc.features).join("path")
    .attr("class","pais-geo").attr("d",path)
    .on("mousemove",(e,f)=>{const p=NUM[f.id];
      const nm=p?nome(p):f.properties.name; let h=`<b>${nm}</b>`;
      if(p){const d=dif(p),l=lnPrev(p);
        h+=`<br>${T().obs}: ${usd(p.y)}<br>${T().prev}: ${l==null?"—":usd(Math.exp(l))}<br>${T().dif}: ${pct(d)}`;
        if(!membros().has(p.iso)&&l!=null)h+=`<br><i>${T().prevFora}</i>`}
      else h+=`<br>${T().legSem}`;
      tip(e,h)})
    .on("mouseleave",()=>tip())
    .on("click",(e,f)=>{const p=NUM[f.id];if(p)escolher(p.iso)});
}
function pintarMapa(){
  const m=membros();
  geoPaths.attr("fill",f=>{const p=NUM[f.id];return p?corDif(dif(p)):"var(--semdado)"})
    .attr("fill-opacity",f=>{const p=NUM[f.id];return p&&!m.has(p.iso)?.38:1});
  marcarMapa();
  const r=d3.range(0,1.0001,.05).map(t=>d3.interpolateRdBu(t)).join(",");
  $("leg").innerHTML=`<span>${T().legAbaixo}</span><span>−75%</span><span class="rampa" style="background:linear-gradient(90deg,${r})"></span><span>+300%</span><span>${T().legAcima}</span>`+
    `<span style="margin-left:14px"><span class="sw" style="background:${d3.interpolateRdBu(.8)};opacity:.38"></span>${T().legFora}</span>`+
    `<span><span class="sw" style="background:var(--semdado)"></span>${T().legSem}</span>`;
}
function marcarMapa(){
  geoPaths.classed("sel",f=>NUM[f.id]&&NUM[f.id].iso===ISO);
  geoPaths.filter(".sel").raise();
}

/* ---------- dispersao ---------- */
const SW=1100, SH=460, SPd={l:52,r:20,t:14,b:44};
function dispersao(){
  const sp=SP(), m=membros();
  const pts=D.paises.filter(p=>m.has(p.iso)).map(p=>({p,x:lnPrev(p,sp),y:p.ly}));
  const selP=P[ISO], selX=lnPrev(selP,sp);
  const all=pts.concat(selX==null?[]:[{x:selX,y:selP.ly}]);
  const lo=Math.floor(Math.min(...all.map(d=>Math.min(d.x,d.y)))*2)/2-.1;
  const hi=Math.ceil(Math.max(...all.map(d=>Math.max(d.x,d.y)))*2)/2+.1;
  const X=v=>SPd.l+(v-lo)/(hi-lo)*(SW-SPd.l-SPd.r), Y=v=>SPd.t+(hi-v)/(hi-lo)*(SH-SPd.t-SPd.b);
  let g="";
  for(let t=Math.ceil(lo);t<=hi;t++){
    g+=`<line class="grade" x1="${X(t)}" y1="${SPd.t}" x2="${X(t)}" y2="${SH-SPd.b}"/><line class="grade" x1="${SPd.l}" y1="${Y(t)}" x2="${SW-SPd.r}" y2="${Y(t)}"/>`+
       `<text class="eixo" x="${X(t)}" y="${SH-SPd.b+16}" text-anchor="middle">${t}</text><text class="eixo" x="${SPd.l-8}" y="${Y(t)+4}" text-anchor="end">${t}</text>`}
  g+=`<line class="diag" x1="${X(lo)}" y1="${Y(lo)}" x2="${X(hi)}" y2="${Y(hi)}"/>`;
  g+=`<text class="eixo t" x="${(SW+SPd.l)/2}" y="${SH-6}" text-anchor="middle">${T().eixoX}</text>`;
  g+=`<text class="eixo t" transform="translate(13,${(SH-SPd.b+SPd.t)/2}) rotate(-90)" text-anchor="middle">${T().eixoY}</text>`;
  pts.forEach(d=>{if(d.p.iso===ISO)return;
    g+=`<circle class="ponto" data-iso="${d.p.iso}" cx="${X(d.x).toFixed(1)}" cy="${Y(d.y).toFixed(1)}" r="4.6" fill="${corDif(Math.exp(d.y-d.x)-1)}" fill-opacity=".9" stroke="#fff" stroke-width=".7"/>`});
  if(selX!=null){const fora=!m.has(ISO);
    g+=`<circle class="ponto sel" data-iso="${ISO}" cx="${X(selX)}" cy="${Y(selP.ly)}" r="7" fill="${fora?"#fff":corDif(Math.exp(selP.ly-selX)-1)}"/>`+
       `<text class="lbl-sel" x="${X(selX)+11}" y="${Y(selP.ly)+4}">${nome(selP)}</text>`}
  const svg=$("disp"); svg.setAttribute("viewBox",`0 0 ${SW} ${SH}`); svg.innerHTML=g;
  svg.querySelectorAll(".ponto").forEach(c=>{const p=P[c.dataset.iso];
    c.onmousemove=e=>{const l=lnPrev(p);tip(e,`<b>${nome(p)}</b><br>${T().obs}: ${usd(p.y)}<br>${T().prev}: ${usd(Math.exp(l))}<br>${T().dif}: ${pct(dif(p))}`)};
    c.onmouseleave=()=>tip(); c.onclick=()=>escolher(p.iso)});
}

/* ---------- ranking ---------- */
function ranking(){
  const sp=SP(), m=membros();
  const arr=D.paises.filter(p=>m.has(p.iso)).map(p=>[p,dif(p,sp)]).sort((a,b)=>b[1]-a[1]);
  const li=(lst,off)=>lst.map(([p,d],i)=>`<li data-iso="${p.iso}"><span class="i">${off(i)}</span><span>${nome(p)}</span><span class="v">${pct(d)}</span></li>`).join("");
  $("rPos").innerHTML=li(arr.slice(0,8),i=>i+1);
  $("rNeg").innerHTML=li(arr.slice(-8).reverse(),i=>arr.length-i);
  document.querySelectorAll(".rank li").forEach(l=>l.onclick=()=>escolher(l.dataset.iso));
}

/* ---------- coeficientes ---------- */
function coeficientes(){
  const sp=SP(), c=sp.coefs, R=T().coefRows, f3=v=>v==null?"":(v<0?"−":"")+fmtN(Math.abs(v),3);
  $("coefCap").textContent=T().coefCap(T().modeloNome[sel.modelo],T().amostraCurta[sel.amostra],sel.gd==="065"?fmtN(.065,3):fmtN(.05,2));
  const par=k=>c[k]?`<tr><td><i>${R[k]}</i></td><td>${f3(c[k].b)}${c[k].st}</td></tr><tr class="se"><td></td><td>(${fmtN(c[k].se,3)})</td></tr>`:"";
  let h=`<tr class="t"><td></td><td></td></tr>`+par("s")+par("ngd")+par("h")+par("c").replace("<i>","").replace("</i>","");
  h+=`<tr class="m"><td>${R.N}</td><td>${sp.N}</td></tr><tr><td>${R.R2}</td><td>${fmtN(sp.R2,3)}</td></tr>`+
     `<tr><td>${R.p}</td><td>${fmtN(sp.p,3)}</td></tr><tr${sp.beta==null?' class="b"':""}><td>${R.alpha}</td><td>${fmtN(sp.alpha,3)}</td></tr>`;
  if(sp.beta!=null)h+=`<tr class="b"><td>${R.beta}</td><td>${fmtN(sp.beta,3)}</td></tr>`;
  $("tCoef").innerHTML=h;
}

/* ---------- tooltip ---------- */
function tip(e,h){const t=$("tip");if(!e){t.style.opacity=0;return}
  t.innerHTML=h;t.style.opacity=1;
  const x=Math.min(e.clientX+14,window.innerWidth-t.offsetWidth-10);
  t.style.left=x+"px";t.style.top=(e.clientY+14)+"px"}

/* ---------- csv ---------- */
function baixar(){
  const sp=SP(), m=membros();
  const lin=[["iso3","pais","renda_observada","renda_prevista","diferenca_pct","na_amostra","s","n","hc"].join(",")];
  D.paises.forEach(p=>{const l=lnPrev(p,sp);
    lin.push([p.iso,`"${nome(p)}"`,p.y,l==null?"":Math.exp(l).toFixed(1),l==null?"":((Math.exp(p.ly-l)-1)*100).toFixed(2),m.has(p.iso)?1:0,p.s,p.n,p.hc??""].join(","))});
  const a=document.createElement("a");
  a.href=URL.createObjectURL(new Blob([lin.join("\n")],{type:"text/csv"}));
  a.download=`solow_${sel.modelo}_${sel.amostra}_${sel.gd}.csv`;a.click();
}

/* ---------- textos ---------- */
function textos(){
  document.documentElement.lang=LANG==="en"?"en":"pt-BR";
  document.querySelectorAll("[data-i18n]").forEach(el=>{const v=T()[el.dataset.i18n];if(typeof v==="string")el.innerHTML=v});
  $("q").placeholder=T().busca;
  document.querySelectorAll(".lang").forEach(b=>b.classList.toggle("active",b.dataset.lang===LANG));
  eqs();
}
function eqs(){if(!window.katex)return;
  document.querySelectorAll("[data-eq]").forEach(el=>katex.render(el.dataset.eq,el,{displayMode:el.classList.contains("eqrow"),throwOnError:false}))}

function tudo(){controles();pais();pintarMapa();dispersao();ranking();coeficientes()}

/* ---------- inicio ---------- */
document.querySelectorAll(".lang").forEach(b=>b.onclick=()=>{LANG=b.dataset.lang;textos();tudo()});
$("q").addEventListener("input",e=>buscar(e.target.value));
$("q").addEventListener("keydown",e=>{
  if(e.key==="ArrowDown"){sugIdx=Math.min(sugIdx+1,sugLista.length-1);marcaSug();e.preventDefault()}
  else if(e.key==="ArrowUp"){sugIdx=Math.max(sugIdx-1,0);marcaSug();e.preventDefault()}
  else if(e.key==="Enter"&&sugIdx>=0){escolher(sugLista[sugIdx].iso)}
  else if(e.key==="Escape"){$("sug").style.display="none"}});
$("q").addEventListener("blur",()=>setTimeout(()=>$("sug").style.display="none",150));
$("dl").onclick=baixar;
textos(); montarMapa(); tudo();
window.addEventListener("load",eqs);
