import { diplomado, courseConfirmation } from "../../data/diplomado";
import { Link } from "../../lib/router";

export function BookingConfirmation({ summary }) {
  return (
    <div className="booking-confirmation" role="status">
      <p className="eyebrow">Confirmación</p>
      <h3>{courseConfirmation.title}</h3>
      <p className="booking-confirmation-name">{diplomado.name}</p>
      <dl>
        <div>
          <dt>Modalidad</dt>
          <dd>{summary.mode}</dd>
        </div>
        <div>
          <dt>Fecha</dt>
          <dd>{summary.dateLabel}</dd>
        </div>
        <div>
          <dt>Hora</dt>
          <dd>{summary.time}</dd>
        </div>
      </dl>
      <p>{courseConfirmation.body}</p>
      <Link className="btn btn-fill" to="/">
        {courseConfirmation.homeCta}
      </Link>
    </div>
  );
}
