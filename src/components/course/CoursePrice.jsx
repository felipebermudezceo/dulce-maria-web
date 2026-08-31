function PriceFigure({ amount, currency, struck = false }) {
  const value = struck ? <s>{amount}</s> : <strong>{amount}</strong>;

  return (
    <span className={`course-price-figure${struck ? " is-was" : ""}`}>
      <span className="course-price-currency">{currency}</span>
      {value}
    </span>
  );
}

export function CoursePrice({ mode }) {
  if (!mode.priceAmount) return null;

  return (
    <p className="course-mode-price">
      {mode.compareAmount ? (
        <PriceFigure amount={mode.compareAmount} currency={mode.currency} struck />
      ) : null}
      <PriceFigure amount={mode.priceAmount} currency={mode.currency} />
    </p>
  );
}
