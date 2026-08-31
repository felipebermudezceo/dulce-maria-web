import { Icon } from "../Icon";
import { CoursePrice } from "./CoursePrice";

export function CourseModeCard({ mode, selected, onSelect, cta }) {
  return (
    <article
      className={`course-mode-card${mode.recommended ? " is-featured" : ""}${selected ? " is-selected" : ""}`}
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
      <button type="button" className="btn btn-fill" onClick={() => onSelect(mode.id)}>
        {cta}
      </button>
    </article>
  );
}
