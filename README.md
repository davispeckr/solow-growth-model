# Solow Growth Model Analysis

This project analyzes the Solow growth model through theoretical simulations and an empirical application using Penn World Table 11.0 data.

## Project Overview

The notebook is divided into two main parts:

1. **Theoretical simulations** of the Solow model under different shocks:
   - population growth shock
   - savings rate shock
   - technology shock

2. **Empirical analysis** based on cross-country data from Penn World Table 11.0, following the approach of Mankiw, Romer, and Weil (1992).

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

## Data

The empirical section uses data from **Penn World Table 11.0**.

Main variables used:

- real GDP
- population
- capital stock
- investment share

## Files

- `Solow.ipynb` — main notebook with simulations and empirical analysis  
- `pwt.csv` — dataset used in the empirical section  

## References

- Solow, R. M. (1956). *A Contribution to the Theory of Economic Growth*. Quarterly Journal of Economics.  
- Mankiw, N. G., Romer, D., and Weil, D. N. (1992). *A Contribution to the Empirics of Economic Growth*. Quarterly Journal of Economics.  
- Feenstra, R. C., Inklaar, R., and Timmer, M. P. (2015). *The Next Generation of the Penn World Table*. American Economic Review, 105(10), 3150–3182.
