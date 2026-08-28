import { whatsappUrl } from "../lib/whatsapp";
import { HeroNotice } from "./HeroNotice";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function WhatsAppButton({ showNotice = true }) {
  return (
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
  );
}
