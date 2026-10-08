import { infiltraciones } from "../../data/infiltraciones";
import { whatsappUrl } from "../../lib/whatsapp";

export function InfiltracionesHero() {
  return (
    <section className="infil-hero" id="infiltraciones">
      <div className="wrap infil-hero-inner">
        <p className="eyebrow">{infiltraciones.eyebrow}</p>
        <h1>
          {infiltraciones.title}
          <span className="infil-hero-accent">{infiltraciones.titleAccent}</span>
        </h1>
        <p className="lead">{infiltraciones.lead}</p>
        <div className="infil-hero-actions">
          <a
            className="btn btn-fill"
            href={whatsappUrl(infiltraciones.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {infiltraciones.primaryCta}
          </a>
          <a className="btn btn-ghost" href="#que-son">
            {infiltraciones.secondaryCta}
          </a>
        </div>
      </div>
    </section>
  );
}
