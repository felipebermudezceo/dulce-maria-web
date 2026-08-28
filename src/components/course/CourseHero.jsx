import { diplomado } from "../../data/diplomado";

export function CourseHero() {
  return (
    <section className="course-hero" id="formacion">
      <div className="course-hero-media" aria-hidden="true">
        <img src={diplomado.photo} alt="" />
      </div>
      <div className="course-hero-inner wrap">
        <p className="eyebrow">{diplomado.eyebrow}</p>
        <h1>
          <span className="course-hero-title">{diplomado.title}</span>
          <span className="course-hero-accent">{diplomado.titleAccent}</span>
        </h1>
        <p className="lead course-hero-lead">{diplomado.lead}</p>
        <div className="course-hero-actions">
          <a className="btn btn-fill" href="#modalidades">
            {diplomado.primaryCta}
          </a>
          <a className="btn btn-ghost" href="#modalidades">
            {diplomado.secondaryCta}
          </a>
        </div>
      </div>
    </section>
  );
}
