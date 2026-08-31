import { useEffect, useRef } from "react";
import { getCalendlyUrl } from "../../data/course";

const WIDGET = "https://assets.calendly.com/assets/external/widget.js";

function loadWidget() {
  if (window.Calendly) return Promise.resolve();

  const existing = document.querySelector(`script[src="${WIDGET}"]`);
  if (existing) {
    return new Promise((resolve) => {
      if (window.Calendly) resolve();
      else existing.addEventListener("load", () => resolve(), { once: true });
    });
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = WIDGET;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("No se pudo cargar Calendly"));
    document.body.appendChild(script);
  });
}

export function CalendlyBooking({ modeId, onEventScheduled }) {
  const hostRef = useRef(null);
  const url = getCalendlyUrl(modeId);

  useEffect(() => {
    const onMessage = (event) => {
      if (event.origin !== "https://calendly.com") return;
      if (event.data?.event !== "calendly.event_scheduled") return;
      onEventScheduled?.({
        modeId,
        payload: event.data.payload,
      });
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [modeId, onEventScheduled]);

  useEffect(() => {
    const host = hostRef.current;
    if (!host || !url) return undefined;
    let cancelled = false;

    loadWidget().then(() => {
      if (cancelled || !hostRef.current || !window.Calendly) return;
      host.innerHTML = "";
      window.Calendly.initInlineWidget({
        url,
        parentElement: host,
        utm: {
          content: modeId || "",
        },
      });
    });

    return () => {
      cancelled = true;
      if (host) host.innerHTML = "";
    };
  }, [url, modeId]);

  return (
    <div
      ref={hostRef}
      className="calendly-embed"
      data-calendly-mode={modeId || ""}
    />
  );
}
