/**
 * BARRA DE CONFIANZA
 * ------------------
 * Las cifras salen de reviews.js y services.js.
 * No agregues números que no existan en esos archivos.
 */

import { reviews } from "./reviews";
import { services } from "./services";

export const trustBar = {
  items: [
    {
      value: reviews.rating,
      suffix: "★",
      label: "Calificación Google",
    },
    {
      value: String(reviews.totalReviews),
      label: "Opiniones en Google",
    },
    {
      value: String(services.length),
      label: "Tipos de estudios",
    },
  ],
};
