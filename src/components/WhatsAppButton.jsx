import { mobileBar } from "../data/content";
import { whatsappUrl } from "../lib/whatsapp";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function WhatsAppButton() {
  return (
    <>
      <a
        className="wa-fab"
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={mobileBar.action}
      >
        <WhatsAppIcon size={24} />
      </a>
      <div className="wa-bar">
        <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
          <span>{mobileBar.label}</span>
          <strong>
            <WhatsAppIcon size={16} />
            {mobileBar.action}
          </strong>
        </a>
      </div>
    </>
  );
}
