import { createContext, useContext, useEffect, useMemo, useState } from "react";

const RouterContext = createContext(null);

export function Router({ children }) {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const value = useMemo(
    () => ({
      path,
      navigate(to) {
        const url = to || "/";
        if (url === path) {
          window.scrollTo(0, 0);
          return;
        }
        window.history.pushState({}, "", url);
        setPath(url);
        window.scrollTo(0, 0);
      },
    }),
    [path]
  );

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
}

export function useRouter() {
  const ctx = useContext(RouterContext);
  if (!ctx) throw new Error("useRouter debe usarse dentro de <Router>");
  return ctx;
}

export function Link({ to, className, children, onClick, ...props }) {
  const { navigate } = useRouter();

  return (
    <a
      href={to}
      className={className}
      onClick={(event) => {
        if (
          event.defaultPrevented ||
          event.button !== 0 ||
          event.metaKey ||
          event.ctrlKey ||
          event.shiftKey ||
          event.altKey
        ) {
          return;
        }
        event.preventDefault();
        onClick?.(event);
        navigate(to);
      }}
      {...props}
    >
      {children}
    </a>
  );
}
