/**
 * CONFIGURACIÓN DE CALENDLY — DIPLOMADO
 * -------------------------------------
 * Reunión informativa para explicar el diplomado:
 * de qué trata, duración, modalidades, costo y resolución de dudas.
 *
 * https://calendly.com/diplomadodradulcemaria
 *
 * No existen URLs separadas por modalidad.
 * Se distingue cuál eligió el visitante con utm_content.
 */

export const calendlyProfileUrl = "https://calendly.com/diplomadodradulcemaria";

export const calendlyEventUrl = calendlyProfileUrl;

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
