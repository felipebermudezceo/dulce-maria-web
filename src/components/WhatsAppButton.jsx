import { whatsappUrl } from "../lib/whatsapp";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function WhatsAppButton({ showNotice = true }) {
  return (
<<<<<<< HEAD
    <div className={`wa-dock${showNotice ? "" : " is-fab-only"}`}>
      {showNotice ? <HeroNotice compact /> : null}
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
=======
    <a
      className="wa-fab"
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      <WhatsAppIcon size={26} />
    </a>
>>>>>>> 1d43c667c4c25e150f381b68a3871b98755fca01
  );
}
