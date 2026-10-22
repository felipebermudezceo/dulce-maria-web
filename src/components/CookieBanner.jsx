import { useEffect, useState } from "react";
import { cookieBanner } from "../data/privacy";
import { getConsent, onConsentChange, setConsent } from "../lib/analytics";
import { Link } from "../lib/router";

export function CookieButtons() {
  return (
    <div className="cookie-banner-actions">
      <button
        type="button"
        className="btn btn-ghost cookie-reject"
        onClick={() => setConsent("denied")}
      >
        {cookieBanner.reject}
      </button>
      <button
        type="button"
        className="btn btn-fill"
        onClick={() => setConsent("granted")}
      >
        {cookieBanner.accept}
      </button>
    </div>
  );
}

export function CookieBanner() {
  const [choice, setChoice] = useState(getConsent);

  useEffect(() => onConsentChange(setChoice), []);

  if (choice) return null;

  return (
    <div className="cookie-banner" role="region" aria-label="Aviso de cookies">
      <p>
        {cookieBanner.text} <Link to="/privacidad">{cookieBanner.policyLink}</Link>
      </p>
      <CookieButtons />
    </div>
  );
}
