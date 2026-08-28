/**
 * ECOGRAFÍAS / SERVICIOS
 * ----------------------
 * Para agregar una ecografía, copia un objeto y cámbialo.
 * Para quitarla, bórrala de este arreglo.
 *
 * whatsappMessage: texto que se abre en WhatsApp al agendar.
 */

export const services = [
  {
    id: "abdominales",
    title: "Ecografías Abdominales",
    description: "Hígado, vesícula, páncreas, riñones, bazo y más.",
    whatsappMessage:
      "Hola, quiero agendar una cita para una ecografía abdominal",
  },
  {
    id: "tiroides",
    title: "Ecografías de Tiroides",
    description: "Tiroides y cuello, con evaluación detallada.",
    whatsappMessage:
      "Hola, quiero agendar una cita para una ecografía de tiroides",
  },
  {
    id: "mamarias",
    title: "Ecografías Mamarias",
    description: "Evaluación de mamas y axilas con acompañamiento cercano.",
    whatsappMessage:
      "Hola, quiero agendar una cita para una ecografía mamaria",
  },
  {
    id: "obstetricas",
    title: "Ecografías Obstétricas",
    description: "Control prenatal, 2D, 3D, 4D y doppler fetal.",
    whatsappMessage:
      "Hola, quiero agendar una cita para una ecografía obstétrica",
  },
  {
    id: "renales",
    title: "Renales y Urinarias",
    description: "Riñones, vías urinarias y vejiga.",
    whatsappMessage:
      "Hola, quiero agendar una cita para una ecografía renal y de vías urinarias",
  },
  {
    id: "doppler",
    title: "Doppler Vascular",
    description: "Estudio del flujo sanguíneo con equipos de última generación.",
    whatsappMessage: "Hola, quiero agendar una cita para una doppler vascular",
  },
];

export const otherService = {
  title: "¿No encuentras tu estudio?",
  description:
    "Cuéntanos qué necesitas y te ayudamos a encontrar la ecografía adecuada.",
  whatsappMessage:
    "Hola, necesito una ecografía que no veo en la página, ¿me pueden ayudar?",
};
