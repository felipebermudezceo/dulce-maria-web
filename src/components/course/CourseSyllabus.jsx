import { courseSyllabus, courseSyllabusSection } from "../../data/diplomado";
import { Reveal } from "../Reveal";

export function CourseSyllabus() {
  return (
    <Reveal as="section" className="section course-syllabus" id={courseSyllabusSection.id}>
      <div className="wrap">
        <header className="course-section-head">
          <p className="eyebrow">{courseSyllabusSection.eyebrow}</p>
          <h2>{courseSyllabusSection.title}</h2>
          <p className="lead">{courseSyllabusSection.lead}</p>
        </header>

        <div className="syllabus-list">
          {courseSyllabus.map((mod, index) => (
            <details key={mod.id} className="syllabus-item" open={index === 0}>
              <summary>
                <span className="syllabus-num">{mod.number}</span>
                <span className="syllabus-title">{mod.title}</span>
                <svg
                  className="syllabus-chevron"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </summary>
              <ul>
                {mod.topics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
