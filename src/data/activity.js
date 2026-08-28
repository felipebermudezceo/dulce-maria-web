/**
 * CUALIDADES Y ACTIVIDAD DEL POP-UP DEL HERO
 * ------------------------------------------
 * Rotación visible en desktop (sobre la foto) y en móvil (flotante).
 * POPUP_INTERVAL controla cuánto dura cada mensaje.
 */

export const POPUP_INTERVAL = 10000;
export const POPUP_TRANSITION = 600;

export const heroActivity = {
  holdMs: POPUP_INTERVAL,
  exitMs: POPUP_TRANSITION,
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
    {
      icon: "calendar",
      title: "Laura agendó una cita",
      text: "Agenda la tuya por WhatsApp",
    },
  ],
};

export function getHeroNotices(feed = heroActivity) {
  return feed.notices;
}
