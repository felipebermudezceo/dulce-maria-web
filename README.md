# Ecografías Dra. Dulce María

Sitio web de la consulta de ecografías. El contenido editable está separado del código.

## Cómo editar (sin tocar componentes)

| Qué quieres cambiar | Archivo |
| --- | --- |
| Teléfono o mensajes de WhatsApp | `src/data/contact.js` |
| Dirección y Google Maps | `src/data/contact.js` |
| Agregar / quitar / editar una ecografía | `src/data/services.js` |
| Reseñas, calificación 5.0 y 139 opiniones | `src/data/reviews.js` |
| Textos y foto de la doctora | `src/data/doctor.js` |
| Hero, menú, botón del header y textos generales | `src/data/content.js` |
| Botón Cursos (texto, URL, visibilidad) | `src/data/courses.js` |
| Cualidades del consultorio (pop-up de la foto) | `src/data/activity.js` |
| Avisos de citas agendadas (izquierda) | `src/data/activity.js` |
| Fotos | `public/images/` |

Las fotos actuales:

- `public/images/logo.png`
- `public/images/doctora.jpg`
- `public/images/paciente.jpg`

## Cómo ver el sitio

```bash
npm install
npm run dev
```

Luego abre la URL que muestre Vite (normalmente `http://localhost:5173`).

```bash
npm run build    # versión para publicar
npm run preview  # previsualizar la versión compilada
```

## Estructura

```
src/data/          información editable
src/components/    piezas de la página
src/lib/whatsapp.js  arma los enlaces de WhatsApp
src/styles/app.css   diseño
public/images/     fotos y logo
archive/           landing original de una sola pieza
```
