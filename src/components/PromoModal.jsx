import { useEffect, useRef, useState } from "react";
import { promo } from "../data/promo";
import { whatsappUrl } from "../lib/whatsapp";
import { WhatsAppIcon } from "./WhatsAppIcon";

const storageKey = `dm-promo-${promo.id}`;

function wasClosed() {
  try {
    return sessionStorage.getItem(storageKey) === "closed";
  } catch {
    return false;
  }
}

export function PromoModal() {
  const [open, setOpen] = useState(false);
  const closeRef = useRef(null);

  useEffect(() => {
    if (!promo.enabled || wasClosed()) return undefined;
    const timer = window.setTimeout(() => setOpen(true), promo.delayMs);
    return () => window.clearTimeout(timer);
  }, []);

  function close() {
    setOpen(false);
    try {
      sessionStorage.setItem(storageKey, "closed");
    } catch {
      // Sin almacenamiento: puede volver a salir al recargar.
    }
  }

  useEffect(() => {
    if (!open) return undefined;
    const previous = document.activeElement;
    closeRef.current?.focus();
    const onKey = (event) => {
      if (event.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.classList.add("promo-open");
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("promo-open");
      previous?.focus?.();
    };
  }, [open]);

  if (!open) return null;

  const href = whatsappUrl(promo.whatsappMessage);

  return (
    <div
      className="promo-backdrop"
      onClick={(event) => {
        if (event.target === event.currentTarget) close();
      }}
    >
      <div
        className="promo-dialog"
        role="dialog"
        aria-modal="true"
        aria-label={promo.imageAlt}
        data-track-zone="promo"
        data-track-detail={promo.id}
      >
        <button
          ref={closeRef}
          type="button"
          className="promo-close"
          onClick={close}
          aria-label="Cerrar promoción"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <path
              d="M6 6l12 12M18 6L6 18"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <a
          className="promo-image"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={promo.image} alt={promo.imageAlt} width="1200" height="800" />
        </a>
        <div className="promo-actions">
          <a
            className="btn promo-wa"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon />
            {promo.button}
          </a>
          <button type="button" className="promo-dismiss" onClick={close}>
            {promo.dismiss}
          </button>
        </div>
      </div>
    </div>
  );
}
