import { trustBar } from "../data/trust";
import { Reveal } from "./Reveal";
import { TrustMetric } from "./TrustMetric";

export function TrustBar() {
  return (
    <Reveal as="section" className="trust-bar" aria-label="Indicadores de confianza">
      <div className="wrap trust-bar-inner">
        {trustBar.items.map((item) => (
          <TrustMetric
            key={item.label}
            value={item.value}
            suffix={item.suffix}
            label={item.label}
          />
        ))}
      </div>
    </Reveal>
  );
}
