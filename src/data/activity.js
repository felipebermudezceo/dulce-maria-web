/**
 * CUALIDADES DEL POP-UP DEL HERO
 * ------------------------------
 * Frases cortas respaldadas por el contenido actual de la clínica.
 * No afirmar aquí nada que no esté ya en content.js o services.js.
 */

export const heroActivity = {
  holdMs: 4500,
  exitMs: 450,
  notices: [
    {
      icon: "clock",
      title: "Atención rápida",
      text: "Atención rápida y sin filas",
    },
    {
      icon: "shield",
      title: "Especialistas certificados",
      text: "Diagnósticos precisos y atención humana",
    },
    {
      icon: "monitor",
      title: "Tecnología avanzada",
      text: "Tecnología de última generación",
    },
    {
      icon: "heart",
      title: "Atención personalizada",
      text: "Trato humano y personalizado",
    },
    {
      icon: "layers",
      title: "Ecografías 2D, 3D y 4D",
      text: "Control prenatal, 2D, 3D, 4D y doppler fetal",
    },
  ],
};

export function getHeroNotices(feed = heroActivity) {
  return feed.notices;
}
