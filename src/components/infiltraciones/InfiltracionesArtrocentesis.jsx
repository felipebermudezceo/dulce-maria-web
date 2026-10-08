import { infiltracionesArtrocentesis } from "../../data/infiltraciones";
import { whatsappUrl } from "../../lib/whatsapp";
import { Icon } from "../Icon";
import { Reveal } from "../Reveal";

export function InfiltracionesArtrocentesis() {
  return (
    <Reveal as="section" className="section infil-artrocentesis" id="artrocentesis">
      <div className="wrap">
        <div className="artrocentesis-card">
          <span className="artrocentesis-icon">
            <Icon name="pulse" size={24} />
          </span>
          <div className="artrocentesis-copy">
            <p className="eyebrow">{infiltracionesArtrocentesis.eyebrow}</p>
            <h2>{infiltracionesArtrocentesis.title}</h2>
            <p>{infiltracionesArtrocentesis.text}</p>
          </div>
          <a
            className="btn btn-ghost"
            href={whatsappUrl(infiltracionesArtrocentesis.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {infiltracionesArtrocentesis.cta}
          </a>
        </div>
      </div>
    </Reveal>
  );
}
