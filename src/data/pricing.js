/**
 * PRECIOS Y CONVERSIÓN DE MONEDA — DIPLOMADO
 * ------------------------------------------
 * El diplomado SE COBRA EN USD a través de Bold (los links de pago
 * están en src/data/diplomado.js -> courseModes[].checkoutUrl).
 *
 * El valor en moneda local que ve el visitante es SOLO UNA REFERENCIA
 * aproximada; el cobro real siempre es en dólares.
 *
 * Actualiza las tasas cada cierto tiempo.
 * Última revisión: 2026-09-01
 */

export const BASE_CURRENCY = "USD";
export const DEFAULT_CURRENCY = "USD";

// Cuánto vale 1 USD en cada moneda.
export const RATES = {
  USD: 1,
  COP: 4050,
  MXN: 18.7,
};

// País (ISO-2) -> moneda que se le muestra al visitante.
// Ecuador (EC), Panamá (PA), El Salvador (SV)... ya usan USD -> default.
export const CURRENCY_BY_COUNTRY = {
  CO: "COP",
  MX: "MXN",
};

// Redondeo "bonito" del valor ya convertido, por moneda.
export const ROUND_TO = {
  USD: 1,
  COP: 1000,
  MXN: 10,
};

// Locale solo para separar miles/decimales al formatear.
export const NUMBER_LOCALE = {
  USD: "en-US",
  COP: "es-CO",
  MXN: "es-MX",
};

export function currencyForCountry(country) {
  const code = String(country || "").toUpperCase();
  return CURRENCY_BY_COUNTRY[code] || DEFAULT_CURRENCY;
}

export function convertFromUsd(usdAmount, currency) {
  const rate = RATES[currency] ?? 1;
  const step = ROUND_TO[currency] ?? 1;
  return Math.round((Number(usdAmount) * rate) / step) * step;
}

export function formatAmount(amount, currency) {
  const locale = NUMBER_LOCALE[currency] || "en-US";
  return new Intl.NumberFormat(locale, { maximumFractionDigits: 0 }).format(amount);
}
