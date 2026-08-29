/**
 * CONFIGURACIÓN DE CALENDLY — DIPLOMADO
 * -------------------------------------
 * Fuente real de disponibilidad y reservas.
 *
 * El perfil solo publica un tipo de evento:
 *   DESCRIPCION DIPLOMADO
 *   https://calendly.com/diplomadodradulcemaria/descripcion-diplomado
 *
 * No existen URLs separadas para Online y Práctico + Online.
 * Ambas modalidades abren el mismo evento y se distingue
 * con utm_content para saber cuál eligió el visitante.
 *
 * Si más adelante crean un evento por modalidad, cambia
 * solo `events.online` y `events.practico-online`.
 */

export const calendlyProfileUrl = "https://calendly.com/diplomadodradulcemaria";

export const calendlyEventUrl =
  "https://calendly.com/diplomadodradulcemaria/descripcion-diplomado";

export const calendlyEvents = {
  online: calendlyEventUrl,
  "practico-online": calendlyEventUrl,
};

export const calendlyEmbed = {
  hideGdprBanner: true,
  primaryColor: "1bb4c4",
};

export function getCalendlyUrl(modeId) {
  const base = calendlyEvents[modeId] || calendlyEventUrl;
  const params = new URLSearchParams({
    hide_gdpr_banner: calendlyEmbed.hideGdprBanner ? "1" : "0",
    primary_color: calendlyEmbed.primaryColor,
  });
  if (modeId) params.set("utm_content", modeId);
  return `${base}?${params.toString()}`;
}
