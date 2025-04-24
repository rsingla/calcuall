/**
 * Represents currency conversion rates.
 */
export interface CurrencyRates {
  /**
   * The base currency for the rates.
   */
  base: string;
  /**
   * A map of currency codes to their exchange rates relative to the base currency.
   */
  rates: { [currencyCode: string]: number };
}

/**
 * Asynchronously retrieves currency conversion rates for a given base currency.
 * @param baseCurrency - The base currency for which to retrieve conversion rates.
 * @returns A promise that resolves to a CurrencyRates object containing the base currency and its rates.
 */
export async function getCurrencyRates(baseCurrency: string): Promise<CurrencyRates> {
  // TODO: Implement this by calling an API.

  return {
    base: baseCurrency,
    rates: {
      USD: 1.0,
      EUR: 0.85,
      GBP: 0.72,
    },
  };
}

