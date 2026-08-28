import { bookingSettings } from "../../data/booking";

function pad(value) {
  return String(value).padStart(2, "0");
}

export function toDateKey(date) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

function addDays(date, amount) {
  const next = new Date(date);
  next.setDate(next.getDate() + amount);
  return next;
}

/**
 * Proveedor temporal para pintar la UI.
 * Sustituir por Cal.com / Calendly / Google / API en src/lib/booking/index.js
 */
export const previewProvider = {
  id: "preview",

  async getAvailability({ modeId } = {}) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const days = {};

    for (let offset = 1; offset <= bookingSettings.horizonDays; offset += 1) {
      const date = addDays(today, offset);
      if (bookingSettings.closedWeekdays.includes(date.getDay())) continue;
      days[toDateKey(date)] = [...bookingSettings.weekdaySlots];
    }

    return { timezone: bookingSettings.timezone, modeId: modeId ?? null, days };
  },

  async createReservation(payload) {
    /**
     * Punto de conexión real:
     * return await fetch("/api/bookings", { method: "POST", body: JSON.stringify(payload) })
     * o el SDK de Cal.com / Calendly / Google Calendar.
     */
    return {
      status: "received",
      provider: "preview",
      id: `local-${Date.now()}`,
      createdAt: new Date().toISOString(),
      booking: payload,
    };
  },
};
