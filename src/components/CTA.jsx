import { ctaBand } from "../data/content";
import { whatsappUrl } from "../lib/whatsapp";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { Reveal } from "./Reveal";

export function CTA() {
  return (
    <Reveal as="section" className="cta">
      <div className="wrap cta-inner">
        <p className="eyebrow">{ctaBand.doubtTitle}</p>
        <h2>{ctaBand.bookTitle}</h2>
        <p className="lead">{ctaBand.bookText}</p>
        <a
          className="btn btn-fill"
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon />
          {ctaBand.bookButton}
        </a>
        <a
          className="text-link"
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
        >
          {ctaBand.doubtText}
        </a>
      </div>
    </Reveal>
  );
}
