import { createContext, useContext, useEffect, useMemo, useState } from "react";
import {
  DEFAULT_CURRENCY,
  RATES,
  convertFromUsd,
  currencyForCountry,
  formatAmount,
} from "../data/pricing";

const PricingContext = createContext(null);

function buildValue(country, rates) {
  const currency = currencyForCountry(country);
  return {
    country,
    currency,
    rates,
    isConverted: currency !== DEFAULT_CURRENCY,
    price(usdAmount) {
      const amount = convertFromUsd(usdAmount, currency, rates);
      return { currency, amount, display: formatAmount(amount, currency) };
    },
  };
}

export function PricingProvider({ children }) {
  const [country, setCountry] = useState("");
  const [rates, setRates] = useState(RATES);

  useEffect(() => {
    let cancelled = false;

    fetch("/api/geo")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!cancelled && data && data.country) setCountry(data.country);
      })
      .catch(() => {});

    fetch("/api/rates")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!cancelled && data && data.rates) {
          setRates({ ...RATES, ...data.rates });
        }
      })
      .catch(() => {
        /* sin tasa en vivo -> se usa el respaldo de src/data/pricing.js */
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const value = useMemo(() => buildValue(country, rates), [country, rates]);

  return <PricingContext.Provider value={value}>{children}</PricingContext.Provider>;
}

export function usePricing() {
  return useContext(PricingContext) || buildValue("", RATES);
}
