/**
 * INFILTRACIONES ARTICULARES
 * ----------------------------------
 * Textos y estructura de la subpágina /infiltraciones.
 * Procedimiento realizado por el Dr. Manuel Silva (Medicina Interna).
 * Solo se infiltra rodilla y hombro, con corticoide, PRP o ácido hialurónico.
 * También se ofrece artrocentesis de rodilla.
 *
 * No agregar precios ni otras afirmaciones clínicas que no hayan sido
 * confirmadas por la clínica.
 */

export const infiltracionesLink = {
  label: "Infiltraciones",
  url: "/infiltraciones",
  opensInNewTab: false,
  visible: true,
};

export const infiltraciones = {
  name: "Infiltraciones Articulares",
  eyebrow: "Guiadas por ecografía",
  title: "Infiltraciones",
  titleAccent: "Articulares",
  lead: "Alivio del dolor articular con un procedimiento guiado por ecografía en tiempo real, a cargo del Dr. Manuel Silva.",
  primaryCta: "Agendar cita",
  secondaryCta: "Conocer el procedimiento",
  whatsappMessage:
    "Hola, quiero agendar una cita para una infiltración articular",
};

export const infiltracionesAboutSection = {
  eyebrow: "¿Qué son?",
  title: "Un procedimiento preciso y guiado en tiempo real",
  lead:
    "La infiltración articular consiste en aplicar medicamento directamente en la articulación afectada. Al realizarla guiada por ecografía, el especialista visualiza la articulación en todo momento para ubicar el punto exacto con mayor precisión y seguridad.",
};

export const infiltracionesBenefits = [
  {
    icon: "check",
    title: "Mayor precisión",
    text: "La guía ecográfica permite ubicar la aguja con exactitud dentro de la articulación.",
  },
  {
    icon: "clock",
    title: "Procedimiento ambulatorio",
    text: "Se realiza en consulta, sin necesidad de hospitalización ni reposo prolongado.",
  },
  {
    icon: "shield",
    title: "Mínimamente invasivo",
    text: "Un procedimiento seguro, con mínima molestia durante y después de la aplicación.",
  },
  {
    icon: "heart",
    title: "Alivio del dolor",
    text: "Busca reducir el dolor y mejorar la movilidad de la articulación tratada.",
  },
];

export const infiltracionesJointsSection = {
  eyebrow: "Articulaciones",
  title: "¿Qué articulaciones se pueden tratar?",
  lead: "Realizamos infiltraciones en rodilla y hombro. El Dr. Manuel Silva evalúa cada caso para definir el tratamiento adecuado.",
};

export const infiltracionesJoints = [
  { id: "rodilla", title: "Rodilla" },
  { id: "hombro", title: "Hombro" },
];

export const infiltracionesTypesSection = {
  eyebrow: "Tipos de infiltración",
  title: "¿Qué sustancias utilizamos?",
  lead: "El Dr. Manuel Silva define cuál es la más adecuada según tu diagnóstico y objetivo del tratamiento.",
};

export const infiltracionesTypes = [
  {
    id: "corticoide",
    icon: "shield",
    title: "Corticoide",
    text: "Un antiinflamatorio que se aplica directamente en la articulación para reducir la inflamación y aliviar el dolor de forma rápida.",
    indication:
      "Indicado para pacientes con dolor e inflamación articular moderada a severa, como brotes de artrosis o bursitis, que buscan un alivio rápido.",
  },
  {
    id: "prp",
    icon: "heart",
    title: "Plasma Rico en Plaquetas (PRP)",
    text: "Se obtiene a partir de una muestra de sangre del propio paciente, concentrando factores de crecimiento que favorecen la reparación del tejido articular.",
    indication:
      "Indicado para pacientes con desgaste articular leve a moderado que buscan una alternativa regenerativa con su propio material biológico.",
  },
  {
    id: "acido-hialuronico",
    icon: "drop",
    title: "Ácido Hialurónico",
    text: "Actúa como lubricante y amortiguador dentro de la articulación, mejorando el deslizamiento entre las superficies articulares.",
    indication:
      "Indicado para pacientes con artrosis que buscan mejorar la movilidad y reducir la fricción articular, especialmente en la rodilla.",
  },
];

export const infiltracionesArtrocentesis = {
  eyebrow: "Otro procedimiento",
  title: "Artrocentesis de rodilla",
  text: "Es la punción de la rodilla para extraer el líquido articular acumulado (derrame), ya sea con fines diagnósticos o para aliviar la presión y el dolor que genera.",
  cta: "Consultar por WhatsApp",
  whatsappMessage: "Hola, quiero agendar una cita para una artrocentesis de rodilla",
};

export const infiltracionesSpecialist = {
  eyebrow: "Especialista",
  title: "¿Quién realiza el procedimiento?",
  name: "Dr. Manuel Silva",
  specialty: "Medicina Interna",
  description:
    "El Dr. Manuel Silva realiza las infiltraciones articulares guiadas por ecografía en nuestra sede, evaluando cada caso y acompañando al paciente durante todo el procedimiento.",
};

export const infiltracionesCtaSection = {
  eyebrow: "¿Tienes dolor articular?",
  title: "Consulta si una infiltración es para ti",
  text: "Escríbenos por WhatsApp y te ayudamos a agendar tu valoración con el Dr. Manuel Silva.",
  button: "Consultar por WhatsApp",
};
