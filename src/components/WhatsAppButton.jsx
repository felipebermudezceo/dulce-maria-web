import { whatsappUrl } from "../lib/whatsapp";
import { BookingNotice } from "./BookingNotice";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function WhatsAppButton() {
  return (
    <div className="float-bar">
      <div className="float-bar-left">
        <BookingNotice />
      </div>
      <a
        className="wa-fab"
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        <WhatsAppIcon size={26} />
      </a>
    </div>
  );
}
