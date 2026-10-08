import {
  infiltracionesJoints,
  infiltracionesJointsSection,
} from "../../data/infiltraciones";
import { Icon } from "../Icon";
import { Reveal } from "../Reveal";

export function InfiltracionesJoints() {
  return (
    <Reveal as="section" className="section infil-joints">
      <div className="wrap">
        <header className="course-section-head">
          <p className="eyebrow">{infiltracionesJointsSection.eyebrow}</p>
          <h2>{infiltracionesJointsSection.title}</h2>
          <p className="lead">{infiltracionesJointsSection.lead}</p>
        </header>
        <ul className="joint-grid">
          {infiltracionesJoints.map((joint) => (
            <li key={joint.id} className="joint-card">
              <Icon name="layers" size={20} />
              {joint.title}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
