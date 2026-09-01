import { courseModes, courseModesSection } from "../../data/diplomado";
import { Reveal } from "../Reveal";
import { CourseModeCard } from "./CourseModeCard";

export function CourseModes() {
  return (
    <Reveal as="section" className="section course-modes" id={courseModesSection.id}>
      <div className="wrap">
        <header className="course-section-head">
          <p className="eyebrow">{courseModesSection.eyebrow}</p>
          <h2>{courseModesSection.title}</h2>
          <p className="lead">{courseModesSection.lead}</p>
        </header>
        <div className="course-mode-grid">
          {courseModes.map((mode) => (
            <CourseModeCard key={mode.id} mode={mode} />
          ))}
        </div>
      </div>
    </Reveal>
  );
}
