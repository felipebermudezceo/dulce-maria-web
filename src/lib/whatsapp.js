import { contact } from "../data/contact";

export function whatsappUrl(message = contact.whatsapp.messages.default) {
  return `https://wa.me/${contact.whatsapp.phone}?text=${encodeURIComponent(message)}`;
}
