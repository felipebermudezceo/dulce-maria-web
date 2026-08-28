import { useEffect, useState } from "react";
import { getHeroNotices, heroActivity } from "../data/activity";
import { Icon } from "./Icon";
import { WhatsAppIcon } from "./WhatsAppIcon";

function NoticeIcon({ name }) {
  if (name === "whatsapp") return <WhatsAppIcon size={18} />;
  return <Icon name={name} size={18} />;
}

export function HeroNotice() {
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
      className={`hero-card is-${phase}`}
      aria-live="polite"
      style={{ "--hero-notice-hold": `${heroActivity.holdMs}ms` }}
    >
      <div className="hero-card-body" key={index}>
        <span className="hero-card-icon">
          <NoticeIcon name={item.icon} />
        </span>
        <p>
          <strong>{item.title}</strong>
          {item.text}
        </p>
      </div>
      <span className="hero-card-progress" aria-hidden="true">
        <i key={index} className={phase === "in" ? "is-running" : "is-complete"} />
      </span>
    </aside>
  );
}
