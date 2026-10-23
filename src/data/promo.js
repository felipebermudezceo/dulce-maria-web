/**
 * PROMOCIÓN EN VENTANA (página de Inicio)
 * ----------------------------------------
 * Ventana que aparece al entrar a Inicio. La persona la cierra con la X,
 * con "Ahora no", con Esc o tocando fuera. Una vez cerrada no vuelve a
 * salir hasta que abra la página en otra visita.
 *
 * Para apagarla: enabled: false
 * Para cambiar la imagen: guárdala en public/images/ y cambia "image".
 */

export const promo = {
  enabled: true,
  id: "citologia",
  image: "/images/citologia.jpg",
  imageAlt:
    "Citologías: tu salud también se ve en una muestra. Detección temprana, mayor tranquilidad y cuidado para ti. Agenda tu cita.",
  whatsappMessage: "Hola, quiero agendar una citología",
  button: "Agendar por WhatsApp",
  dismiss: "Ahora no",
  delayMs: 1200,
};
