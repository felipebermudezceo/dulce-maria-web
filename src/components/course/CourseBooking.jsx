import { useEffect, useMemo, useState } from "react";
import {
  courseBookingSection,
  diplomado,
  getCourseMode,
} from "../../data/diplomado";
import { createReservation, getAvailability } from "../../lib/booking";
import { Reveal } from "../Reveal";
import { BookingCalendar } from "./BookingCalendar";
import { BookingConfirmation } from "./BookingConfirmation";
import { BookingForm } from "./BookingForm";

function formatDateLabel(dateKey) {
  const [year, month, day] = dateKey.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("es-CO", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

const emptyForm = {
  firstName: "",
  lastName: "",
  whatsapp: "",
  email: "",
};

export function CourseBooking({ modeId, onChangeMode }) {
  const now = new Date();
  const [year, setYear] = useState(now.getFullYear());
  const [month, setMonth] = useState(now.getMonth());
  const [availability, setAvailability] = useState({});
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [step, setStep] = useState("schedule");
  const [form, setForm] = useState(emptyForm);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [summary, setSummary] = useState(null);

  const mode = getCourseMode(modeId);

  useEffect(() => {
    let active = true;
    getAvailability({ modeId }).then((result) => {
      if (active) setAvailability(result.days ?? {});
    });
    return () => {
      active = false;
    };
  }, [modeId]);

  useEffect(() => {
    setDate("");
    setTime("");
    setStep("schedule");
    setForm(emptyForm);
    setError("");
    setSummary(null);
  }, [modeId]);

  const monthHasAvailability = useMemo(() => {
    const prefix = `${year}-${String(month + 1).padStart(2, "0")}`;
    return Object.keys(availability).some((key) => key.startsWith(prefix));
  }, [availability, month, year]);

  const goMonth = (delta) => {
    const next = new Date(year, month + delta, 1);
    setYear(next.getFullYear());
    setMonth(next.getMonth());
  };

  const selectDate = (key) => {
    setDate(key);
    setTime("");
    setStep("schedule");
  };

  const selectTime = (value) => {
    setTime(value);
    setStep("form");
  };

  const submit = async (event) => {
    event.preventDefault();
    if (!mode || !date || !time) return;
    setSubmitting(true);
    setError("");

    try {
      const result = await createReservation({
        program: diplomado.name,
        modeId: mode.id,
        mode: mode.title,
        date,
        time,
        timezone: "America/Bogota",
        contact: form,
      });
      setSummary({
        mode: mode.title,
        dateLabel: formatDateLabel(date),
        time,
        id: result.id,
      });
      setStep("done");
    } catch (err) {
      setError("No pudimos completar la reserva. Inténtalo de nuevo en un momento.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Reveal as="section" className="section course-booking" id={courseBookingSection.id}>
      <div className="wrap">
        <header className="course-section-head">
          <p className="eyebrow">{courseBookingSection.eyebrow}</p>
          <h2>{courseBookingSection.title}</h2>
          <p className="lead">{courseBookingSection.lead}</p>
        </header>

        {!mode ? (
          <p className="booking-hint">Elige primero una modalidad para ver el calendario.</p>
        ) : step === "done" && summary ? (
          <BookingConfirmation summary={summary} />
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
                <div>
                  <dt>Fecha</dt>
                  <dd>{date ? formatDateLabel(date) : "Pendiente"}</dd>
                </div>
                <div>
                  <dt>Hora</dt>
                  <dd>{time || "Pendiente"}</dd>
                </div>
              </dl>
              <button type="button" className="text-link" onClick={onChangeMode}>
                {courseBookingSection.changeMode}
              </button>
            </div>

            <div className="booking-panel">
              {step === "form" ? (
                <>
                  <h3>{courseBookingSection.formTitle}</h3>
                  <BookingForm
                    values={form}
                    onChange={setForm}
                    onSubmit={submit}
                    submitting={submitting}
                    error={error}
                    confirmCta={courseBookingSection.confirmCta}
                    backCta={courseBookingSection.backCta}
                    onBack={() => setStep("schedule")}
                  />
                </>
              ) : (
                <>
                  {!monthHasAvailability ? (
                    <p className="booking-hint">
                      Este mes aún no tiene días disponibles. Prueba el siguiente.
                    </p>
                  ) : null}
                  <BookingCalendar
                    year={year}
                    month={month}
                    selectedDate={date}
                    availability={availability}
                    onPrev={() => goMonth(-1)}
                    onNext={() => goMonth(1)}
                    onSelectDate={selectDate}
                    timesTitle={courseBookingSection.timesTitle}
                    selectedTime={time}
                    onSelectTime={selectTime}
                  />
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </Reveal>
  );
}
