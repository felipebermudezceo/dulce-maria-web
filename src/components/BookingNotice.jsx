import { useEffect, useState } from "react";
import {
  BOOKING_FIRST_DELAY_MAX,
  BOOKING_FIRST_DELAY_MIN,
  BOOKING_GAP_MAX,
  BOOKING_GAP_MIN,
  BOOKING_TRANSITION,
  BOOKING_VISIBLE,
  getBookingNotices,
} from "../data/activity";
import { Icon } from "./Icon";

function randomBetween(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

function nextIndex(current, length) {
  if (length < 2) return 0;
  let next = current;
  while (next === current) {
    next = Math.floor(Math.random() * length);
  }
  return next;
}

export function BookingNotice() {
  const notices = getBookingNotices();
  const [index, setIndex] = useState(() =>
    notices.length ? Math.floor(Math.random() * notices.length) : 0,
  );
  const [phase, setPhase] = useState("wait");
  const item = notices[index] ?? notices[0];

  useEffect(() => {
    if (!notices.length) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase("in");
      return undefined;
    }

    if (phase === "wait") {
      const delay = randomBetween(BOOKING_FIRST_DELAY_MIN, BOOKING_FIRST_DELAY_MAX);
      const start = window.setTimeout(() => setPhase("in"), delay);
      return () => window.clearTimeout(start);
    }

    if (phase === "in") {
      const hold = window.setTimeout(() => setPhase("out"), BOOKING_VISIBLE);
      return () => window.clearTimeout(hold);
    }

    if (phase === "out") {
      const hide = window.setTimeout(() => setPhase("gap"), BOOKING_TRANSITION);
      return () => window.clearTimeout(hide);
    }

    const gap = randomBetween(BOOKING_GAP_MIN, BOOKING_GAP_MAX);
    const swap = window.setTimeout(() => {
      setIndex((current) => nextIndex(current, notices.length));
      setPhase("in");
    }, gap);

    return () => window.clearTimeout(swap);
  }, [phase, notices.length]);

  if (!item || phase === "wait" || phase === "gap") return null;

  return (
    <aside
      className={`booking-notice is-${phase}`}
      aria-live="polite"
      aria-atomic="true"
      style={{
        "--booking-notice-transition": `${BOOKING_TRANSITION}ms`,
      }}
    >
      <span className="booking-notice-icon">
        <Icon name={item.icon} size={18} />
      </span>
      <p>
        <strong>{item.title}</strong>
        {item.text}
      </p>
    </aside>
  );
}
