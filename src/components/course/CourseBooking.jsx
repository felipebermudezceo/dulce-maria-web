import { courseBookingSection, diplomado, getCourseMode } from "../../data/diplomado";
import { Reveal } from "../Reveal";
import { CalendlyBooking } from "./CalendlyBooking";

export function CourseBooking({ modeId, onChangeMode }) {
  const mode = getCourseMode(modeId);

  return (
    <Reveal as="section" className="section course-booking" id={courseBookingSection.id}>
      <div className="wrap">
        <header className="course-section-head">
          <p className="eyebrow">{courseBookingSection.eyebrow}</p>
          <h2>{courseBookingSection.title}</h2>
          <p className="lead">{courseBookingSection.lead}</p>
        </header>

        {!mode ? (
          <p className="booking-hint">Elige primero una modalidad para ver los horarios disponibles.</p>
        ) : (
          <div className="booking-layout">
            <div className="booking-summary">
              <p className="eyebrow">Selección</p>
              <h3>{diplomado.name}</h3>
              <dl>
                <div>
                  <dt>Modalidad</dt>
                  <dd>{mode.title}</dd>
                </div>
              </dl>
              <button type="button" className="text-link" onClick={onChangeMode}>
                {courseBookingSection.changeMode}
              </button>
            </div>

            <div className="booking-panel calendly-panel">
              <CalendlyBooking modeId={modeId} />
            </div>
          </div>
        )}
      </div>
    </Reveal>
  );
}
