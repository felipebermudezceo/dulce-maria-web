import { createContext, useContext, useEffect, useMemo, useState } from "react";
import {
  DEFAULT_CURRENCY,
  convertFromUsd,
  currencyForCountry,
  formatAmount,
} from "../data/pricing";

const PricingContext = createContext(null);

export function PricingProvider({ children }) {
  const [country, setCountry] = useState("");

  useEffect(() => {
    let cancelled = false;

    fetch("/api/geo")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!cancelled && data && data.country) setCountry(data.country);
      })
      .catch(() => {
        /* sin geo -> se queda con la moneda por defecto (USD) */
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const value = useMemo(() => {
    const currency = currencyForCountry(country);
    return {
      country,
      currency,
      isConverted: currency !== DEFAULT_CURRENCY,
      price(usdAmount) {
        const amount = convertFromUsd(usdAmount, currency);
        return { currency, amount, display: formatAmount(amount, currency) };
      },
    };
  }, [country]);

  return <PricingContext.Provider value={value}>{children}</PricingContext.Provider>;
}

export function usePricing() {
  return (
    useContext(PricingContext) || {
      country: "",
      currency: DEFAULT_CURRENCY,
      isConverted: false,
      price(usdAmount) {
        const amount = convertFromUsd(usdAmount, DEFAULT_CURRENCY);
        return {
          currency: DEFAULT_CURRENCY,
          amount,
          display: formatAmount(amount, DEFAULT_CURRENCY),
        };
      },
    }
  );
}
