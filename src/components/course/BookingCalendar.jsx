const WEEKDAYS = ["L", "M", "M", "J", "V", "S", "D"];

function monthLabel(year, month) {
  const label = new Date(year, month, 1).toLocaleDateString("es-CO", {
    month: "long",
    year: "numeric",
  });
  return label.charAt(0).toUpperCase() + label.slice(1);
}

function buildCells(year, month) {
  const first = new Date(year, month, 1);
  const startOffset = (first.getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells = [];

  for (let i = 0; i < startOffset; i += 1) cells.push(null);
  for (let day = 1; day <= daysInMonth; day += 1) {
    cells.push(new Date(year, month, day));
  }
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}

export function BookingCalendar({
  year,
  month,
  selectedDate,
  availability,
  onPrev,
  onNext,
  onSelectDate,
  timesTitle,
  selectedTime,
  onSelectTime,
}) {
  const cells = buildCells(year, month);
  const times = selectedDate ? availability[selectedDate] ?? [] : [];

  return (
    <div className="booking-calendar">
      <div className="booking-calendar-nav">
        <button type="button" onClick={onPrev} aria-label="Mes anterior">
          ‹
        </button>
        <h3>{monthLabel(year, month)}</h3>
        <button type="button" onClick={onNext} aria-label="Mes siguiente">
          ›
        </button>
      </div>

      <div className="booking-weekdays" aria-hidden="true">
        {WEEKDAYS.map((day, index) => (
          <span key={`${day}-${index}`}>{day}</span>
        ))}
      </div>

      <div className="booking-grid">
        {cells.map((date, index) => {
          if (!date) return <span key={`empty-${index}`} className="booking-day is-empty" />;
          const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
          const slots = availability[key];
          const enabled = Boolean(slots?.length);
          const selected = selectedDate === key;

          return (
            <button
              key={key}
              type="button"
              className={`booking-day${enabled ? " is-available" : ""}${selected ? " is-selected" : ""}`}
              disabled={!enabled}
              onClick={() => onSelectDate(key)}
            >
              {date.getDate()}
            </button>
          );
        })}
      </div>

      {selectedDate ? (
        <div className="booking-times">
          <h4>{timesTitle}</h4>
          {times.length ? (
            <div className="booking-time-list">
              {times.map((time) => (
                <button
                  key={time}
                  type="button"
                  className={`booking-time${selectedTime === time ? " is-selected" : ""}`}
                  onClick={() => onSelectTime(time)}
                >
                  {time}
                </button>
              ))}
            </div>
          ) : (
            <p>No hay horarios disponibles este día.</p>
          )}
        </div>
      ) : (
        <p className="booking-hint">Selecciona un día disponible para ver los horarios.</p>
      )}
    </div>
  );
}
