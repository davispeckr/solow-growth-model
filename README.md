# Solow Growth Model Analysis

This project analyzes the Solow growth model through theoretical simulations and an empirical application using Penn World Table 11.0 data.

## Project Overview

The notebook is divided into two main parts:

1. **Theoretical simulations** of the Solow model under different shocks:
   - population growth shock
   - savings rate shock
   - technology shock

2. **Empirical analysis** based on cross-country data from Penn World Table 11.0, following the approach of Mankiw, Romer, and Weil (1992).

3. **Augmented Solow model** with human capital, using the `hc` index of Penn World Table 11.0.

## Theoretical Framework

The steady-state level of income per capita in the Solow model is given by:

$$
y^* = A \left(\frac{s}{n + g + \delta}\right)^{\frac{\alpha}{1-\alpha}}
$$

where:

- $y^*$ = steady-state income per capita  
- $A$ = level of technology  
- $s$ = savings rate  
- $n$ = population growth rate  
- $g$ = technological growth rate  
- $\delta$ = depreciation rate  
- $\alpha$ = capital share of income  

## Empirical Strategy

The empirical analysis uses country-level averages and estimates the following log-linear specification:

$$
\log(y^*) = \beta_0 + \beta_1 \log(s) + \beta_2 \log(n + g + \delta)
$$

The expected results are:

- a positive relationship between savings and income per capita
- a negative relationship between population growth and income per capita

## Augmented Solow Model

Mankiw, Romer and Weil (1992) add human capital $H$ to the production function, $Y = K^{\alpha} H^{\beta} (AL)^{1-\alpha-\beta}$. With the stock of human capital per worker observed, the steady state becomes:

$$
\log(y^*) = \beta_0 + \frac{\alpha}{1-\alpha}\log(s) - \frac{\alpha}{1-\alpha}\log(n + g + \delta) + \frac{\beta}{1-\alpha}\log(h)
$$

Human capital is measured by the Penn World Table `hc` index, which combines average years of schooling with Mincerian returns to education. The sample with human capital data has 144 countries, and 130 once oil exporters are excluded.

In the sample without oil exporters, adding human capital lowers the coefficient on investment from 1.50 to 0.85 and the implied capital share from 0.65 to 0.45, while the $R^2$ rises from 0.63 to 0.79. The restriction that the coefficients on $\log(s)$ and $\log(n+g+\delta)$ sum to zero is not rejected (p = 0.28). The coefficient on $\log(h)$, however, is about 2.3, far above the value of 0.5 implied by $\alpha = \beta = 1/3$, so the `hc` index should not be read as a structural measure of $\beta$: it captures labor efficiency from schooling and is correlated with the omitted technology term.

## Data

The empirical section uses data from **Penn World Table 11.0**.

Main variables used:

- real GDP
- population
- capital stock
- investment share
- human capital index (`hc`)

## Files

- `Solow.ipynb` — main notebook with simulations and empirical analysis  
- `pwt.csv` — dataset used in the empirical section  
- `pwt_hc.csv` — human capital index (`hc`) from Penn World Table 11.0, extracted from `pwt110.dta`  

## References

- Barro, R. J., and Lee, J. W. (2013). *A New Data Set of Educational Attainment in the World, 1950–2010*. Journal of Development Economics, 104, 184–198.  
- Solow, R. M. (1956). *A Contribution to the Theory of Economic Growth*. Quarterly Journal of Economics.  
- Mankiw, N. G., Romer, D., and Weil, D. N. (1992). *A Contribution to the Empirics of Economic Growth*. Quarterly Journal of Economics.  
- Feenstra, R. C., Inklaar, R., and Timmer, M. P. (2015). *The Next Generation of the Penn World Table*. American Economic Review, 105(10), 3150–3182.
