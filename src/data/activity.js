/**
 * CUALIDADES Y ACTIVIDAD DEL POP-UP DEL HERO
 * ------------------------------------------
 * Las cualidades rotan en la foto (desktop) y junto al botón de WhatsApp (móvil).
 * Las citas son un aviso aparte, a la izquierda.
 * Tardan varios segundos en salir y hay una pausa larga entre uno y otro.
 */

export const POPUP_INTERVAL = 10000;
export const POPUP_TRANSITION = 600;

export const BOOKING_VISIBLE = 5500;
export const BOOKING_TRANSITION = 500;
export const BOOKING_FIRST_DELAY_MIN = 9000;
export const BOOKING_FIRST_DELAY_MAX = 16000;
export const BOOKING_GAP_MIN = 22000;
export const BOOKING_GAP_MAX = 40000;

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
      icon: "pin",
      title: "Ecografías obstétricas",
      text: "Crecimiento, detalle anatómico, translucencia nucal, doppler fetal y perfil biofísico",
    },
  ],
};

export const bookingActivity = {
  visibleMs: BOOKING_VISIBLE,
  exitMs: BOOKING_TRANSITION,
  notices: [
    { icon: "calendar", title: "Laura agendó una cita", text: "Hace un momento" },
    { icon: "calendar", title: "Camila agendó una cita", text: "Hace 2 minutos" },
    { icon: "calendar", title: "Andrea agendó una cita", text: "Hace 3 minutos" },
    { icon: "calendar", title: "Valentina agendó una cita", text: "Hace 5 minutos" },
    { icon: "calendar", title: "Daniela agendó una cita", text: "Hace un momento" },
    { icon: "calendar", title: "Carolina agendó una cita", text: "Hace 4 minutos" },
    { icon: "calendar", title: "Natalia agendó una cita", text: "Hace 7 minutos" },
    { icon: "calendar", title: "Juliana agendó una cita", text: "Hace 2 minutos" },
    { icon: "calendar", title: "Paula agendó una cita", text: "Hace un momento" },
    { icon: "calendar", title: "Catalina agendó una cita", text: "Hace 6 minutos" },
    { icon: "calendar", title: "Isabella agendó una cita", text: "Hace 8 minutos" },
    { icon: "calendar", title: "Sofía agendó una cita", text: "Hace 3 minutos" },
    { icon: "calendar", title: "Mariana agendó una cita", text: "Hace 1 minuto" },
    { icon: "calendar", title: "Alejandra agendó una cita", text: "Hace 9 minutos" },
    { icon: "calendar", title: "Manuela agendó una cita", text: "Hace 4 minutos" },
    { icon: "calendar", title: "Gabriela agendó una cita", text: "Hace un momento" },
    { icon: "calendar", title: "Diana agendó una cita", text: "Hace 11 minutos" },
    { icon: "calendar", title: "Sara agendó una cita", text: "Hace 5 minutos" },
    { icon: "calendar", title: "María agendó una cita", text: "Hace 2 minutos" },
    { icon: "calendar", title: "Ana agendó una cita", text: "Hace 6 minutos" },
  ],
};

export function getHeroNotices(feed = heroActivity) {
  return feed.notices;
}

export function getBookingNotices(feed = bookingActivity) {
  return feed.notices;
}
