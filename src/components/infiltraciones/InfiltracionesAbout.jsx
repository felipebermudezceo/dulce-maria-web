import {
  infiltracionesAboutSection,
  infiltracionesBenefits,
} from "../../data/infiltraciones";
import { Icon } from "../Icon";
import { Reveal } from "../Reveal";

export function InfiltracionesAbout() {
  return (
    <Reveal as="section" className="section infil-about" id="que-son">
      <div className="wrap">
        <header className="course-section-head">
          <p className="eyebrow">{infiltracionesAboutSection.eyebrow}</p>
          <h2>{infiltracionesAboutSection.title}</h2>
        </header>
        <p className="infil-about-lead">{infiltracionesAboutSection.lead}</p>
        <ul className="course-benefit-grid">
          {infiltracionesBenefits.map((item) => (
            <li key={item.title} className="course-benefit-card">
              <Icon name={item.icon} size={22} />
              <strong>{item.title}</strong>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
