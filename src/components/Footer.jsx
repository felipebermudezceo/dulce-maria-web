import { site, navigation, locationSection } from "../data/content";
import { contact } from "../data/contact";
import { whatsappUrl } from "../lib/whatsapp";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <img src={site.logo} alt={site.clinicName} />
          <p>{site.name}</p>
        </div>
        <address>
          {contact.address.street}
          <br />
          {contact.address.suite}
          <br />
          {contact.address.city}
        </address>
        <nav aria-label="Pie de página">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="footer-links">
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
            {contact.whatsapp.display}
          </a>
          <a
            href={contact.address.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {locationSection.directionsCta}
          </a>
        </div>
      </div>
    </footer>
  );
}
