export function BookingForm({ values, onChange, onSubmit, submitting, error, confirmCta, backCta, onBack }) {
  const field = (name) => (event) => onChange({ ...values, [name]: event.target.value });

  return (
    <form className="booking-form" onSubmit={onSubmit}>
      <div className="booking-form-grid">
        <label>
          Nombre
          <input
            name="firstName"
            autoComplete="given-name"
            value={values.firstName}
            onChange={field("firstName")}
            required
          />
        </label>
        <label>
          Apellido
          <input
            name="lastName"
            autoComplete="family-name"
            value={values.lastName}
            onChange={field("lastName")}
            required
          />
        </label>
        <label>
          WhatsApp
          <input
            name="whatsapp"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={values.whatsapp}
            onChange={field("whatsapp")}
            required
          />
        </label>
        <label>
          Correo electrónico
          <input
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={field("email")}
            required
          />
        </label>
      </div>
      {error ? <p className="booking-error">{error}</p> : null}
      <div className="booking-form-actions">
        <button type="button" className="btn btn-ghost" onClick={onBack}>
          {backCta}
        </button>
        <button type="submit" className="btn btn-fill" disabled={submitting}>
          {submitting ? "Enviando…" : confirmCta}
        </button>
      </div>
    </form>
  );
}
