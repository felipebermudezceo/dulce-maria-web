import { doctor } from "../data/doctor";
import { whatsappUrl } from "../lib/whatsapp";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { Reveal } from "./Reveal";

export function AboutDoctor() {
  const [first, second] = doctor.paragraphs;

  return (
    <Reveal as="section" className="section about" id="nosotros">
      <div className="wrap about-grid">
        <figure className="about-photo">
          <img src={doctor.photo} alt={doctor.photoAlt} />
        </figure>

        <div className="about-copy">
          <p className="eyebrow">{doctor.eyebrow}</p>
          <h2>{doctor.title}</h2>
          <p className="about-lead">{first}</p>
          <p>{second}</p>
          <blockquote>{doctor.quote}</blockquote>
          <a
            className="btn btn-fill"
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon />
            {doctor.cta}
          </a>
        </div>
      </div>
    </Reveal>
  );
}
