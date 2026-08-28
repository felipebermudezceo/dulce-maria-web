/**
 * RESEÑAS DE GOOGLE
 * -----------------
 * rating y totalReviews deben coincidir con Google.
 * googleReviewsUrl: enlace al perfil de Google (hoy el de Maps).
 *
 * Para agregar una reseña, copia un objeto en `items`.
 * Campos opcionales por reseña:
 *   stars, date, source, photo, initials
 *
 * Más adelante este archivo puede alimentarse desde una API de Google.
 */

export const reviews = {
  rating: "5.0",
  totalReviews: 139,
  source: "Google",
  sourceLabel: "opiniones en Google",
  googleReviewsUrl: "https://maps.app.goo.gl/LsEqjvCtK9F5rEM58",
  defaultStars: 5,
  items: [
    {
      initials: "SB",
      name: "Suly Bedoya",
      quote:
        "Excelente atención y experiencia con mi ecografía. La Dra explica muy bien, con amor y paciencia. Desde la recepcionista, hasta los demás Doctores son muy amables, están pendientes de uno en todo momento. Recomiendo mucho el lugar.",
    },
    {
      initials: "FD",
      name: "Francesca Dipaola",
      quote:
        "Me hice la ecografía mamaria con la doctora Dulce María. Es una persona muy empática, amable y se nota que ama lo que hace. Explica todo con muchos detalles y hace que uno se sienta tranquilo y en confianza durante el examen.",
    },
    {
      initials: "AH",
      name: "Angela Hernandez",
      quote:
        "Una excelente atención por parte de la Doctora Dulce María, es un amor de persona, su dedicación al explicar parte por parte de tu bebé es muy grata, me fui feliz... Súper recomendada.",
    },
    {
      initials: "NC",
      name: "Natalia Céspedes",
      quote:
        "Es increíble encontrar una persona tan amable, amorosa y profesional en estos días. Entre atención, paciencia, detalle y profesionalismo pienso que es de las mejores. 10/10 instalaciones, trato, trabajo y precio.",
    },
    {
      initials: "EV",
      name: "Esteban Valdes",
      quote:
        "Una excelente atención y buena vibra, la verdad una gran experiencia y lo mejor es esa energía con qué atiende la doctora.",
    },
    {
      initials: "GA",
      name: "Gustavo Adolfo",
      quote:
        "Excelente atención, muy agradable la doctora Dulce María, qué persona más gentil, mil felicitaciones, muy profesionales todos.",
    },
  ],
};
