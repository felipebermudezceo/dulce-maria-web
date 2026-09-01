import { getCalendlyUrl } from "../../data/course";
import { Icon } from "../Icon";
import { CoursePrice } from "./CoursePrice";

export function CourseModeCard({ mode, cta }) {
  return (
    <article
      className={`course-mode-card${mode.recommended ? " is-featured" : ""}`}
    >
      {mode.badge ? <span className="course-mode-badge">{mode.badge}</span> : null}
      <p className="course-mode-kicker">{mode.recommended ? "Modalidad completa" : "Modalidad flexible"}</p>
      <h3>{mode.title}</h3>
      <CoursePrice mode={mode} />
      <p>{mode.description}</p>
      <ul>
        {mode.benefits.map((item) => (
          <li key={item}>
            <Icon name="check" size={16} />
            {item}
          </li>
        ))}
      </ul>
      <a
        className="btn btn-fill"
        href={getCalendlyUrl(mode.id)}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="calendar" size={18} />
        {cta}
      </a>
    </article>
  );
}
