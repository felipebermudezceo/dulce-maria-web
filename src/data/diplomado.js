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
  enrollLabel: "Inscribirme ahora",
  meetingLabel: "Prefiero agendar una reunión primero",
  chargeNote: "El pago se procesa en dólares (USD) de forma segura con Bold.",
};

export const courseModes = [
  {
    id: "online",
    title: "Online",
    recommended: false,
    priceAmount: "199",
    currency: "USD",
    checkoutUrl: "https://checkout.bold.co/payment/LNK_KFR1XLHMUR",
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
    checkoutUrl: "https://checkout.bold.co/payment/LNK_RNEQ14784E",
    description:
      "Combina la formación online con prácticas de 2 meses con pacientes reales para llevar tus conocimientos a otro nivel.",
    benefits: [
      "Formación online",
      "Prácticas de 2 meses, de lunes a sábado",
      "Práctica con pacientes reales",
      "Acompañamiento profesional",
      "Integración entre teoría y práctica",
    ],
  },
];

export const courseSyllabusSection = {
  id: "temario",
  eyebrow: "Contenido",
  title: "Temario del diplomado",
  lead: "Siete módulos que van desde la física del ultrasonido hasta la práctica clínica por sistemas.",
};

export const courseSyllabus = [
  {
    id: "modulo-1",
    number: "I",
    title: "Física de la Ecografía",
    topics: [
      "Historia de la ecografía",
      "Parámetros de la onda ultrasónica",
      "Potencia e intensidad acústica",
      "Interacción onda-tejido",
      "Impedancia acústica",
      "Resolución axial, lateral y temporal",
      "Formación de la imagen y armónicos",
      "Fundamentos y modalidades Doppler",
      "Artefactos ecográficos",
      "Transductores y selección",
      "Optimización de imagen",
      "Seguridad biológica y ALARA",
    ],
  },
  {
    id: "modulo-2",
    number: "II",
    title: "Ecografía de Abdomen Total",
    topics: [
      "Anatomía de hígado y vías biliares",
      "Páncreas",
      "Bazo",
      "Riñones y uréteres",
      "Vejiga y próstata",
      "Aorta y vena cava",
      "Retroperitoneo y espacios peritoneales",
      "Protocolo sistemático de exploración",
    ],
  },
  {
    id: "modulo-3",
    number: "III",
    title: "Ecografía Ginecológica",
    topics: [
      "Anatomía pélvica",
      "Técnica transabdominal y transvaginal",
      "Útero: miometrio y endometrio",
      "Miomatosis uterina (FIGO)",
      "Adenomiosis (MUSA)",
      "Istmocele",
      "Ovarios y reserva ovárica",
      "Síndrome de ovario poliquístico",
      "Masas anexiales (O-RADS)",
      "Endometriosis",
      "Enfermedad inflamatoria pélvica",
      "Infertilidad",
    ],
  },
  {
    id: "modulo-4",
    number: "IV",
    title: "Ecografía Obstétrica",
    topics: [
      "Primer trimestre: datación y viabilidad",
      "Translucencia nucal y marcadores tempranos",
      "Segundo trimestre: biometría fetal",
      "Ecografía anatómica estructurada",
      "Placenta y líquido amniótico",
      "Tercer trimestre: crecimiento y perfil biofísico",
      "Doppler obstétrico",
      "Presentación fetal y estimación de peso",
    ],
  },
  {
    id: "modulo-5",
    number: "V",
    title: "Ecografía Musculoesquelética (SOMA)",
    topics: [
      "Técnica dinámica en ecografía musculoesquelética",
      "Hombro",
      "Codo",
      "Muñeca y mano",
      "Cadera",
      "Rodilla",
      "Tobillo y pie",
      "Nervios periféricos",
      "Bursas y colecciones",
    ],
  },
  {
    id: "modulo-6",
    number: "VI",
    title: "Doppler",
    topics: [
      "Física Doppler aplicada",
      "Doppler carotídeo",
      "Doppler venoso de miembros inferiores",
      "Doppler arterial de miembros inferiores",
      "Doppler renal",
      "Doppler hepático y portal",
      "Doppler obstétrico avanzado",
      "Doppler ginecológico",
    ],
  },
  {
    id: "modulo-7",
    number: "VII",
    title: "Partes Blandas y Pequeñas Partes",
    topics: [
      "Tiroides (TI-RADS)",
      "Mama (BI-RADS)",
      "Glándulas salivales",
      "Ganglios linfáticos",
      "Escroto y testículo",
      "Pene",
      "Pared abdominal y hernias",
      "Lesiones superficiales",
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

