/**
 * Tasas de cambio en vivo: cuánto vale 1 USD en cada moneda.
 *
 * Fuente: open.er-api.com (gratuita, sin API key, se actualiza a diario).
 * La respuesta se cachea 12 h en el edge de Vercel (s-maxage), así que
 * open.er-api.com recibe como mucho un par de llamadas al día.
 *
 * Si la fuente falla, se devuelven las tasas de respaldo y el sitio
 * sigue funcionando.
 */
export const config = { runtime: "edge" };

const FALLBACK = { USD: 1, COP: 4050, MXN: 18.7 };
const WANTED = ["COP", "MXN"];
const SOURCE = "https://open.er-api.com/v6/latest/USD";

export default async function handler() {
  let rates = { ...FALLBACK };
  let updated = null;
  let live = false;

  try {
    const res = await fetch(SOURCE);
    if (res.ok) {
      const data = await res.json();
      if (data && data.result === "success" && data.rates) {
        rates = { USD: 1 };
        for (const code of WANTED) {
          rates[code] =
            typeof data.rates[code] === "number" ? data.rates[code] : FALLBACK[code];
        }
        updated = data.time_last_update_utc || null;
        live = true;
      }
    }
  } catch {
    rates = { ...FALLBACK };
  }

  return new Response(JSON.stringify({ rates, updated, live }), {
    status: 200,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control":
        "public, max-age=0, s-maxage=43200, stale-while-revalidate=86400",
    },
  });
}
