/**
 * CONTACTO, WHATSAPP Y UBICACIÓN
 * --------------------------------
 * Cambia aquí el teléfono, los mensajes de WhatsApp,
 * Instagram, la dirección y los enlaces de Google Maps.
 *
 * Teléfono: usar código de país sin + ni espacios.
 * Ejemplo Colombia: 573105676841
 *
 * Los mensajes de cada ecografía están en src/data/services.js
 */

export const contact = {
  whatsapp: {
    phone: "573105676841",
    display: "wa.me/573105676841",
    messages: {
      default: "Hola, quiero agendar una cita para una ecografía",
      allStudies: "Hola, quiero conocer todas las ecografías disponibles",
    },
  },
  instagram: {
    url: "https://www.instagram.com/drdulcemaria/",
    handle: "@drdulcemaria",
  },
  address: {
    street: "Calle 127 # 20-16",
    suite: "Consultorio 514, Edificio Pluss 127",
    city: "Bogotá",
    mapsUrl: "https://maps.app.goo.gl/LsEqjvCtK9F5rEM58",
    embedUrl:
      "https://www.google.com/maps?q=4.7065444,-74.0508956&z=17&output=embed",
  },
};
