import { hero, heroCard, trustItems } from "../data/content";
import { whatsappUrl } from "../lib/whatsapp";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { Icon } from "./Icon";

const trustIcons = ["shield", "monitor", "check"];

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1>
            <span className="hero-title-main">{hero.title}</span>
            <span className="hero-title-accent">{hero.titleAccent}</span>
          </h1>
          <p className="lead">{hero.lead}</p>

          <div className="hero-actions">
            <a
              className="btn btn-fill"
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon />
              {hero.primaryCta}
            </a>
            <a className="btn btn-ghost hero-secondary" href="#servicios">
              {hero.secondaryCta}
            </a>
          </div>

          <ul className="trust-pills">
            {trustItems.map((item, index) => (
              <li key={item}>
                <Icon name={trustIcons[index]} size={16} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-media">
          <img src={hero.photo} alt={hero.photoAlt} />
          <aside className="hero-card">
            <span className="hero-card-icon">
              <Icon name="clock" size={18} />
            </span>
            <p>
              <strong>{heroCard.title}</strong>
              {heroCard.text}
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
