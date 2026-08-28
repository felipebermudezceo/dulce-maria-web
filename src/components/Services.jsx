import { otherService } from "../data/services";
import { servicesSection, patientPhoto } from "../data/content";
import { contact } from "../data/contact";
import { whatsappUrl } from "../lib/whatsapp";
import { Reveal } from "./Reveal";
import { UltrasoundGrid } from "./UltrasoundGrid";

export function Services() {
  return (
    <Reveal as="section" className="section services" id="servicios">
      <div className="wrap">
        <header className="section-head services-head">
          <div>
            <p className="eyebrow">{servicesSection.eyebrow}</p>
            <h2>{servicesSection.title}</h2>
          </div>
          <a
            className="text-link"
            href={whatsappUrl(contact.whatsapp.messages.allStudies)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {servicesSection.allCta}
          </a>
        </header>

        <div className="services-layout">
          <figure className="services-photo">
            <img src={patientPhoto.src} alt={patientPhoto.alt} />
          </figure>
          <UltrasoundGrid />
        </div>

        <a
          className="other-study"
          href={whatsappUrl(otherService.whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>{otherService.title}</strong>
          <span>{otherService.description}</span>
        </a>
      </div>
    </Reveal>
  );
}
