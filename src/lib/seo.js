import { useEffect } from "react";

/**
 * Cambia el título y la meta description mientras la página está montada
 * y restaura los anteriores al salir.
 */
export function usePageMeta(title, description) {
  useEffect(() => {
    const meta = document.querySelector('meta[name="description"]');
    const previousTitle = document.title;
    const previousDescription = meta?.getAttribute("content");
    document.title = title;
    if (meta && description) meta.setAttribute("content", description);
    return () => {
      document.title = previousTitle;
      if (meta && previousDescription) meta.setAttribute("content", previousDescription);
    };
  }, [title, description]);
}
