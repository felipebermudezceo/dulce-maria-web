import { locationSection } from "../data/content";
import { contact } from "../data/contact";
import { whatsappUrl } from "../lib/whatsapp";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { Reveal } from "./Reveal";

export function Location() {
  const { address } = contact;

  return (
    <Reveal as="section" className="section location" id="ubicacion">
      <div className="wrap location-layout">
        <div className="location-info">
          <p className="eyebrow">{locationSection.eyebrow}</p>
          <h2>{locationSection.title}</h2>
          <address>
            {address.street}
            <br />
            {address.suite}
            <br />
            {address.city}
          </address>
          <div className="location-actions">
            <a
              className="btn btn-fill"
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon />
              {locationSection.whatsappCta}
            </a>
            <a
              className="btn btn-ghost"
              href={address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {locationSection.mapsCta}
            </a>
          </div>
        </div>

        <div className="location-map">
          <iframe
            title="Ubicación en Google Maps"
            src={address.embedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </Reveal>
  );
}
