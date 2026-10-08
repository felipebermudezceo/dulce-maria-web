import { infiltraciones, infiltracionesCtaSection } from "../../data/infiltraciones";
import { whatsappUrl } from "../../lib/whatsapp";
import { WhatsAppIcon } from "../WhatsAppIcon";
import { Reveal } from "../Reveal";

export function InfiltracionesCTA() {
  return (
    <Reveal as="section" className="infil-cta">
      <div className="wrap">
        <p className="eyebrow">{infiltracionesCtaSection.eyebrow}</p>
        <h2>{infiltracionesCtaSection.title}</h2>
        <p>{infiltracionesCtaSection.text}</p>
        <a
          className="btn btn-fill"
          href={whatsappUrl(infiltraciones.whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon />
          {infiltracionesCtaSection.button}
        </a>
      </div>
    </Reveal>
  );
}
