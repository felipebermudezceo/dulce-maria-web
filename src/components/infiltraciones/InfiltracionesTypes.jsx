import {
  infiltracionesTypes,
  infiltracionesTypesSection,
} from "../../data/infiltraciones";
import { Icon } from "../Icon";
import { Reveal } from "../Reveal";

export function InfiltracionesTypes() {
  return (
    <Reveal as="section" className="section infil-types" id="tipos">
      <div className="wrap">
        <header className="course-section-head">
          <p className="eyebrow">{infiltracionesTypesSection.eyebrow}</p>
          <h2>{infiltracionesTypesSection.title}</h2>
          <p className="lead">{infiltracionesTypesSection.lead}</p>
        </header>
        <div className="type-grid">
          {infiltracionesTypes.map((type) => (
            <article key={type.id} className="type-card">
              <span className="type-card-icon">
                <Icon name={type.icon} size={22} />
              </span>
              <h3>{type.title}</h3>
              <p>{type.text}</p>
              <p className="type-card-indication">
                <strong>¿Para quién?</strong> {type.indication}
              </p>
            </article>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
