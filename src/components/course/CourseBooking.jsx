import { courseBookingSection, diplomado, getCourseMode } from "../../data/diplomado";
import { getCalendlyUrl } from "../../data/course";
import { Reveal } from "../Reveal";
import { CoursePrice } from "./CoursePrice";

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
          <p className="booking-hint">
            Elige primero una modalidad. Luego podrás agendar la reunión para conocer el diplomado, el costo y resolver dudas.
          </p>
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
                {mode.priceAmount ? (
                  <div>
                    <dt>Costo</dt>
                    <dd>
                      <CoursePrice mode={mode} />
                    </dd>
                  </div>
                ) : null}
              </dl>
              <button type="button" className="text-link" onClick={onChangeMode}>
                {courseBookingSection.changeMode}
              </button>
            </div>

            <div className="booking-panel booking-cta-panel">
              <h3>{courseBookingSection.panelTitle}</h3>
              <p>{courseBookingSection.panelText}</p>
              <a
                className="btn btn-fill"
                href={getCalendlyUrl(modeId)}
                target="_blank"
                rel="noopener noreferrer"
              >
                {courseBookingSection.cta}
              </a>
            </div>
          </div>
        )}
      </div>
    </Reveal>
  );
}
