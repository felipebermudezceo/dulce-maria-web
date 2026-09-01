import { getCalendlyUrl } from "../../data/course";
import { courseModesSection } from "../../data/diplomado";
import { Icon } from "../Icon";
import { CoursePrice } from "./CoursePrice";

export function CourseModeCard({ mode }) {
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
      <div className="course-mode-actions">
        <a
          className="btn btn-fill"
          href={mode.checkoutUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {courseModesSection.enrollLabel}
        </a>
        <a
          className="course-mode-meeting"
          href={getCalendlyUrl(mode.id)}
          target="_blank"
          rel="noopener noreferrer"
        >
          {courseModesSection.meetingLabel}
        </a>
        <p className="course-mode-charge-note">{courseModesSection.chargeNote}</p>
      </div>
    </article>
  );
}
