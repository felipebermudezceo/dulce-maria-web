import { ctaBand } from "../data/content";
import { contact } from "../data/contact";
import { whatsappUrl } from "../lib/whatsapp";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { InstagramIcon } from "./InstagramIcon";
import { Reveal } from "./Reveal";

export function CTA() {
  return (
    <Reveal as="section" className="cta">
      <div className="wrap cta-inner">
        <p className="eyebrow">{ctaBand.doubtTitle}</p>
        <h2>{ctaBand.bookTitle}</h2>
        <p className="lead">{ctaBand.bookText}</p>
        <div className="cta-actions">
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
            className="btn btn-ghost btn-instagram"
            href={contact.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
            {ctaBand.instagramCta}
          </a>
        </div>
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
