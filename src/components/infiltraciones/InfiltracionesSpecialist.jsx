import { infiltracionesSpecialist } from "../../data/infiltraciones";
import { Reveal } from "../Reveal";

function initials(name) {
  return name
    .replace(/^Dr\.?\s*/i, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export function InfiltracionesSpecialist() {
  return (
    <Reveal as="section" className="section infil-specialist" id="especialista">
      <div className="wrap">
        <header className="course-section-head">
          <p className="eyebrow">{infiltracionesSpecialist.eyebrow}</p>
          <h2>{infiltracionesSpecialist.title}</h2>
        </header>
        <div className="specialist-card">
          <div className="specialist-avatar" aria-hidden="true">
            {initials(infiltracionesSpecialist.name)}
          </div>
          <div className="specialist-copy">
            <strong>{infiltracionesSpecialist.name}</strong>
            <span>{infiltracionesSpecialist.specialty}</span>
            <p>{infiltracionesSpecialist.description}</p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
