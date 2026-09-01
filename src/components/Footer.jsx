import { site, navigation, locationSection, hero } from "../data/content";
import { contact } from "../data/contact";
import { whatsappUrl } from "../lib/whatsapp";
import { useRouter } from "../lib/router";

export function Footer() {
  const { path } = useRouter();
  const prefix = path === "/" ? "" : "/";

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
            <a key={item.href} href={`${prefix}${item.href}`}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="footer-links">
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
            {contact.whatsapp.display}
          </a>
          <a
            href={contact.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {hero.instagramCta}
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
