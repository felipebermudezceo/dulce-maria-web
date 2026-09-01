/**
 * Devuelve el país del visitante usando la geolocalización por IP
 * que Vercel añade a cada petición (cabecera x-vercel-ip-country).
 * No requiere API key. En local (vite dev) no existe -> country "".
 */
export const config = { runtime: "edge" };

export default function handler(request) {
  const country = request.headers.get("x-vercel-ip-country") || "";

  return new Response(JSON.stringify({ country }), {
    status: 200,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}
