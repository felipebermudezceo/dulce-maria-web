import { whatsappUrl } from "../lib/whatsapp";
import { contact } from "../data/contact";
import { BookingNotice } from "./BookingNotice";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { InstagramIcon } from "./InstagramIcon";

export function WhatsAppButton() {
  return (
    <div className="float-bar">
      <div className="float-bar-left">
        <BookingNotice />
      </div>
      <div className="float-bar-actions">
        <a
          className="ig-fab"
          href={contact.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Seguir en Instagram"
        >
          <InstagramIcon size={24} />
        </a>
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
    </div>
  );
}
