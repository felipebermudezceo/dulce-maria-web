import { usePricing } from "../../lib/pricing";

function PriceFigure({ display, currency, struck = false, approx = false }) {
  const value = struck ? <s>{display}</s> : <strong>{display}</strong>;

  return (
    <span className={`course-price-figure${struck ? " is-was" : ""}`}>
      <span className="course-price-currency">
        {approx ? "≈ " : ""}
        {currency}
      </span>
      {value}
    </span>
  );
}

export function CoursePrice({ mode }) {
  const { price, isConverted } = usePricing();

  if (!mode.priceAmount) return null;

  const now = price(mode.priceAmount);
  const was = mode.compareAmount ? price(mode.compareAmount) : null;

  return (
    <p className="course-mode-price">
      {was ? (
        <PriceFigure
          display={was.display}
          currency={was.currency}
          approx={isConverted}
          struck
        />
      ) : null}
      <PriceFigure display={now.display} currency={now.currency} approx={isConverted} />
    </p>
  );
}
