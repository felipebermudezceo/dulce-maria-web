import { whatsappUrl } from "../lib/whatsapp";
import { HeroNotice } from "./HeroNotice";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function WhatsAppButton() {
  return (
    <div className="wa-dock">
      <HeroNotice compact />
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
