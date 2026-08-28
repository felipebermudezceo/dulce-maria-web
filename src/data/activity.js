/**
 * ACTIVIDAD DEL HERO
 * ------------------
 * Textos visibles del pop-up. Esta versión usa contenido de demostración.
 */

export const heroActivity = {
  holdMs: 4500,
  exitMs: 450,
  notices: [
    {
      icon: "calendar",
      title: "Ángela agendó una cita",
      text: "Agenda la tuya por WhatsApp",
    },
    {
      icon: "heart",
      title: "Mariana agendó una ecografía",
      text: "Atención rápida y personalizada",
    },
    {
      icon: "monitor",
      title: "Ecografía 3D agendada",
      text: "Agenda tu estudio por WhatsApp",
    },
    {
      icon: "calendar",
      title: "Carlos agendó una cita",
      text: "Reserva tu atención fácilmente",
    },
    {
      icon: "monitor",
      title: "Ecografía 4D agendada",
      text: "Conoce nuestras ecografías",
    },
    {
      icon: "pulse",
      title: "15 personas están viendo esta página",
      text: "Conoce nuestras ecografías",
    },
    {
      icon: "whatsapp",
      title: "Laura agendó una ecografía",
      text: "Agenda tu cita por WhatsApp",
    },
  ],
};

export function getHeroNotices(feed = heroActivity) {
  return feed.notices;
}
