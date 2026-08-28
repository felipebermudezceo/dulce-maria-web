/**
 * CAPA DE RESERVAS
 * ----------------
 * Cambia `provider` cuando conectemos Cal.com, Calendly,
 * Google Calendar o un backend propio.
 *
 * La UI (calendario, formulario, confirmación) no debe conocer
 * el proveedor: solo llama a getAvailability y createReservation.
 */

import { previewProvider } from "./previewProvider";

export const bookingProvider = previewProvider;

export function getAvailability(params) {
  return bookingProvider.getAvailability(params);
}

export function createReservation(payload) {
  return bookingProvider.createReservation(payload);
}
