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
      <p className="course-mode-kicker">
        {mode.kicker || (mode.recommended ? "Modalidad completa" : "Modalidad flexible")}
      </p>
      <h3>{mode.title}</h3>
      {mode.promoLabel ? (
        <span className="course-mode-promo">{mode.promoLabel}</span>
      ) : null}
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
        {mode.meetingFirst && !mode.hideMeeting ? (
          <a
            className="btn course-mode-meeting-btn"
            href={mode.meetingUrl || getCalendlyUrl(mode.id)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {mode.meetingButtonLabel || "Agendar una cita"}
          </a>
        ) : null}
        {mode.checkoutUrl ? (
          <a
            className="btn btn-fill"
            href={mode.checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {mode.enrollLabel || courseModesSection.enrollLabel}
          </a>
        ) : (
          <span className="btn btn-fill is-soon" aria-disabled="true">
            {mode.comingSoonLabel || "Enlace de pago disponible pronto"}
          </span>
        )}
        {mode.hideMeeting || mode.meetingFirst ? null : (
          <a
            className="course-mode-meeting"
            href={getCalendlyUrl(mode.id)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {courseModesSection.meetingLabel}
          </a>
        )}
        <p className="course-mode-charge-note">
          {mode.chargeNote || courseModesSection.chargeNote}
        </p>
      </div>
    </article>
  );
}
