import { useEffect, useState } from "react";
import { getHeroNotices, heroActivity } from "../data/activity";
import { Icon } from "./Icon";

export function HeroNotice({ compact = false }) {
  const notices = getHeroNotices();
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState("in");
  const item = notices[index] ?? notices[0];

  useEffect(() => {
    if (notices.length < 2) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    if (phase === "in") {
      const hold = window.setTimeout(() => setPhase("out"), heroActivity.holdMs);
      return () => window.clearTimeout(hold);
    }

    const swap = window.setTimeout(() => {
      setIndex((current) => (current + 1) % notices.length);
      setPhase("in");
    }, heroActivity.exitMs);

    return () => window.clearTimeout(swap);
  }, [phase, notices.length]);

  if (!item) return null;

  return (
    <aside
      className={`hero-card${compact ? " is-compact" : ""} is-${phase}`}
      aria-live="polite"
      aria-atomic="true"
      style={{ "--hero-notice-hold": `${heroActivity.holdMs}ms` }}
    >
      <div className="hero-card-body" key={index}>
        <span className="hero-card-icon">
          <Icon name={compact ? "check" : item.icon} size={compact ? 14 : 18} />
        </span>
        <p>
          <strong>{item.title}</strong>
          {compact ? null : item.text}
        </p>
      </div>
      {compact ? null : (
        <span className="hero-card-progress" aria-hidden="true">
          <i key={index} className={phase === "in" ? "is-running" : "is-complete"} />
        </span>
      )}
    </aside>
  );
}
