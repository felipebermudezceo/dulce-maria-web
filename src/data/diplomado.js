/**
 * DIPLOMADO EN ECOGRAFÍA DIAGNÓSTICA
 * ----------------------------------
 * Textos y estructura de la subpágina /diplomado.
 *
 * duration, hours y certification se dejan vacíos
 * hasta tener datos reales. No inventar acreditaciones.
 * Los precios de cada modalidad están en courseModes.
 */

export const diplomado = {
  name: "Diplomado en Ecografía Diagnóstica",
  eyebrow: "Formación profesional",
  title: "Diplomado en",
  titleAccent: "Ecografía Diagnóstica",
  lead: "Una formación pensada para quienes buscan desarrollar sus conocimientos en ecografía diagnóstica con acompañamiento profesional.",
  primaryCta: "Quiero formarme",
  secondaryCta: "Ver modalidades",
  photo: "/images/doctora.jpg",
  photoAlt: "Formación en ecografía diagnóstica con la Dra. Dulce María",
  duration: "",
  hours: "",
  price: "",
  certification: "",
};

export const courseModesSection = {
  id: "modalidades",
  eyebrow: "Modalidades",
  title: "¿Cómo quieres formarte?",
  lead: "Elige la modalidad que mejor se adapte a tus objetivos y disponibilidad.",
  chooseLabel: "Elegir modalidad",
};

export const courseModes = [
  {
    id: "online",
    title: "Online",
    recommended: false,
    priceAmount: "199",
    currency: "USD",
    description:
      "Aprende desde donde estés con una modalidad flexible y enfocada en tu formación.",
    benefits: [
      "Formación desde cualquier lugar",
      "Contenido organizado y flexible",
      "Acceso a material educativo",
      "Acompañamiento durante tu formación",
    ],
  },
  {
    id: "practico-online",
    title: "Práctico + Online",
    recommended: true,
    badge: "Recomendado",
    priceAmount: "599",
    compareAmount: "799",
    currency: "USD",
    description:
      "Combina la formación online con una experiencia práctica para llevar tus conocimientos a otro nivel.",
    benefits: [
      "Formación online",
      "Sesiones prácticas",
      "Acompañamiento profesional",
      "Mayor experiencia aplicada",
      "Integración entre teoría y práctica",
    ],
  },
];

export const courseBenefitsSection = {
  eyebrow: "Por qué formarte",
  title: "¿Por qué formarte con nosotros?",
  items: [
    { number: "01", title: "Formación especializada", icon: "monitor" },
    { number: "02", title: "Acompañamiento profesional", icon: "heart" },
    { number: "03", title: "Modalidades flexibles", icon: "layers" },
    { number: "04", title: "Contenido enfocado en ecografía", icon: "pulse" },
    { number: "05", title: "Experiencia práctica", icon: "check" },
    { number: "06", title: "Aprendizaje aplicado", icon: "clock" },
  ],
};

export const courseBookingSection = {
  id: "reserva",
  eyebrow: "Reunión informativa",
  title: "Agenda una llamada",
  lead: "Esta reunión es para explicarte de qué trata el diplomado, su duración, las modalidades, el costo y resolver tus dudas. Elige la modalidad que te interesa y reserva un horario.",
  changeMode: "Cambiar modalidad",
  panelTitle: "Reserva tu horario",
  panelText:
    "Te llevaremos a Calendly para que elijas el día y la hora que mejor te queden. La reunión es virtual y sin costo.",
  cta: "Abrir Calendly",
};

export function getCourseMode(id) {
  return courseModes.find((mode) => mode.id === id) ?? null;
}
