/**
 * DISPONIBILIDAD DEL DIPLOMADO
 * ----------------------------
 * Esta configuración alimenta la UI del calendario hasta conectar
 * Cal.com, Calendly, Google Calendar o un backend propio.
 *
 * No representa cupos confirmados ni una reserva real.
 * Cambia weekdaySlots y closedWeekdays cuando exista el horario oficial.
 */

export const bookingSettings = {
  timezone: "America/Bogota",
  weekdaySlots: ["08:00", "10:00", "14:00", "16:00"],
  closedWeekdays: [0],
  horizonDays: 60,
};
