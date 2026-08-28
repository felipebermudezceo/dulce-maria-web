export function TrustMetric({ value, suffix, label }) {
  return (
    <article className="trust-metric">
      <p className="trust-metric-value">
        {value}
        {suffix ? <span>{suffix}</span> : null}
      </p>
      <p className="trust-metric-label">{label}</p>
    </article>
  );
}
