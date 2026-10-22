// Microsoft Clarity: mapas de calor, grabaciones y registro de clics en botones.
// Pega aquí el ID del proyecto de clarity.microsoft.com (ej. "k8x2abc9de").
// Mientras esté vacío no se carga nada.
export const CLARITY_ID = "z1q6an0dnf";

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

  const detail = detailOf(link);
  trackEvent(type);
  trackEvent([type, zoneOf(link), detail].filter(Boolean).join(" · "));
}

export function initAnalytics() {
  if (!CLARITY_ID || typeof window === "undefined") return;
  loadClarity(CLARITY_ID);
  document.addEventListener("click", onClick, { capture: true });
}
