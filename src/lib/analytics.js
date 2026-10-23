// Microsoft Clarity: mapas de calor, grabaciones y registro de clics en botones.
// Pega aquí el ID del proyecto de clarity.microsoft.com (ej. "k8x2abc9de").
// Mientras esté vacío no se carga nada.
export const CLARITY_ID = "z1q6an0dnf";

// Etiqueta de Google (gtag.js) de la cuenta de Google Ads.
export const GOOGLE_TAG_ID = "AW-18533153439";

function loadGoogleTag(id) {
  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag() {
      window.dataLayer.push(arguments);
    };
  window.gtag("js", new Date());
  window.gtag("config", id);
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(script);
}

function loadClarity(id) {
  window.clarity =
    window.clarity ||
    function (...args) {
      (window.clarity.q = window.clarity.q || []).push(args);
    };
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.clarity.ms/tag/${id}`;
  document.head.appendChild(script);
}

// Tipo de botón según a dónde lleva el enlace.
function linkType(href) {
  if (/wa\.me|whatsapp/i.test(href)) return "whatsapp";
  if (/checkout\.bold\.co/i.test(href)) return "pago-bold";
  if (/calendly\.com/i.test(href)) return "calendly";
  if (/instagram\.com/i.test(href)) return "instagram";
  if (/google\.[^/]+\/maps|maps\.app\.goo|goo\.gl\/maps/i.test(href)) return "mapa";
  if (/google\.|g\.page/i.test(href)) return "resenas-google";
  if (/^tel:/i.test(href)) return "llamada";
  if (/^mailto:/i.test(href)) return "correo";
  return null;
}

// Zona de la página donde está el botón (menú, pie, flotante o id de la sección).
function zoneOf(el) {
  const marked = el.closest("[data-track-zone]");
  if (marked) return marked.getAttribute("data-track-zone");
  if (el.closest(".site-header")) return "menu";
  if (el.closest(".site-footer")) return "pie";
  const section = el.closest("section[id]");
  return section ? section.id : "otra";
}

function detailOf(el) {
  const marked = el.closest("[data-track-detail]");
  if (marked) return marked.getAttribute("data-track-detail");
  const card = el.closest("article[id]");
  return card ? card.id : "";
}

export function trackEvent(name) {
  if (typeof window.clarity === "function") window.clarity("event", name);
}

function onClick(event) {
  const link = event.target.closest("a[href]");
  if (!link) return;
  const href = link.getAttribute("href");
  let type = linkType(href);
  // Enlaces internos del menú (Cursos, Infiltraciones, secciones).
  if (!type && link.closest(".site-header")) {
    type = `menu-${link.textContent.trim().toLowerCase().replace(/\s+/g, "-")}`;
  }
  if (!type) return;
  // Reseñas y mapa usan el mismo enlace de Google Maps.
  if (type === "mapa" && link.closest(".reviews")) type = "resenas-google";

  const zone = zoneOf(link);
  const detail = detailOf(link);
  trackEvent(type);
  trackEvent([type, zone, detail].filter(Boolean).join(" · "));

  // Para Google Tag Manager: evento "clic_boton" con los mismos datos.
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "clic_boton",
    boton: type,
    zona: zone,
    detalle: detail,
    link_url: link.href,
  });

  // Mismo clic directo a Google Ads: evento con el tipo de botón, zona y detalle.
  if (typeof window.gtag === "function") {
    window.gtag("event", type.replace(/-/g, "_"), {
      boton: type,
      zona: zone,
      detalle: detail || undefined,
      link_url: link.href,
    });
  }
}

// Consentimiento de cookies: Clarity y Google solo se cargan si la persona acepta.
const CONSENT_KEY = "dm-cookies";
const CONSENT_EVENT = "dm-consent-change";

export function getConsent() {
  try {
    return localStorage.getItem(CONSENT_KEY); // "granted" | "denied" | null
  } catch {
    return null;
  }
}

let started = false;
function startClarity() {
  if (started) return;
  started = true;
  if (CLARITY_ID) {
    loadClarity(CLARITY_ID);
    window.clarity("consent");
  }
  if (GOOGLE_TAG_ID) loadGoogleTag(GOOGLE_TAG_ID);
  document.addEventListener("click", onClick, { capture: true });
}

export function setConsent(value) {
  try {
    localStorage.setItem(CONSENT_KEY, value);
  } catch {
    // Sin almacenamiento: la elección vale solo para esta visita.
  }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }));
  if (typeof window.gtag === "function") {
    const v = value === "granted" ? "granted" : "denied";
    window.gtag("consent", "update", {
      ad_storage: v,
      ad_user_data: v,
      ad_personalization: v,
      analytics_storage: v,
    });
  }
  if (value === "granted") startClarity();
  // Si retira el permiso con todo ya cargado, se recarga para descargarlo.
  else if (started) window.location.reload();
}

export function onConsentChange(callback) {
  const handler = (event) => callback(event.detail);
  window.addEventListener(CONSENT_EVENT, handler);
  return () => window.removeEventListener(CONSENT_EVENT, handler);
}

export function initAnalytics() {
  if (typeof window === "undefined") return;
  if (getConsent() === "granted") startClarity();
}
