import { hours } from "../data/contact";

export function OpeningHours({ className = "" }) {
  return (
    <div className={`opening-hours ${className}`.trim()}>
      <p className="opening-hours-title">{hours.title}</p>
      <dl>
        {hours.rows.map((row) => (
          <div key={row.days}>
            <dt>{row.days}</dt>
            <dd>
              {row.times.map((time) => (
                <span key={time}>{time}</span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
