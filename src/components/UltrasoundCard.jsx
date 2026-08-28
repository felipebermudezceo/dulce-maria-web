import { servicesSection } from "../data/content";
import { whatsappUrl } from "../lib/whatsapp";
import { Icon } from "./Icon";

export function UltrasoundCard({ service, icon }) {
  return (
    <a
      id={service.id}
      className="study-card"
      href={whatsappUrl(service.whatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="study-card-icon">
        <Icon name={icon} size={18} />
      </span>
      <strong>{service.title}</strong>
      <span className="study-card-desc">{service.description}</span>
      <em>
        {servicesSection.bookLabel}
        <span aria-hidden="true"> →</span>
      </em>
    </a>
  );
}
