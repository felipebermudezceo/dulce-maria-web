import { courseBenefitsSection } from "../../data/diplomado";
import { Icon } from "../Icon";
import { Reveal } from "../Reveal";

export function CourseBenefits() {
  return (
    <Reveal as="section" className="section course-benefits">
      <div className="wrap">
        <header className="course-section-head">
          <p className="eyebrow">{courseBenefitsSection.eyebrow}</p>
          <h2>{courseBenefitsSection.title}</h2>
        </header>
        <ul className="course-benefit-grid">
          {courseBenefitsSection.items.map((item) => (
            <li key={item.number} className="course-benefit-card">
              <span>{item.number}</span>
              <Icon name={item.icon} size={22} />
              <strong>{item.title}</strong>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
