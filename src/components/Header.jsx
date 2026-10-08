import { useEffect, useState } from "react";
import { site, navigation, headerCta } from "../data/content";
import { courses } from "../data/courses";
import { infiltracionesLink } from "../data/infiltraciones";
import { contact } from "../data/contact";
import { whatsappUrl } from "../lib/whatsapp";
import { Link, useRouter } from "../lib/router";
import { WhatsAppIcon } from "./WhatsAppIcon";

function HeaderNavLink({ link, className, onNavigate }) {
  const { path } = useRouter();
  if (!link.visible) return null;

  const active = link.url?.startsWith("/") && path.startsWith(link.url);
  const classes = `${className}${active ? " is-active" : ""}`;

  if (link.url?.startsWith("/")) {
    return (
      <Link className={classes} to={link.url} onClick={onNavigate}>
        {link.label}
      </Link>
    );
  }

  const handleClick = (event) => {
    if (!link.url) event.preventDefault();
    onNavigate?.();
  };

  return (
    <a
      className={classes}
      href={link.url || "#"}
      onClick={handleClick}
      title={link.url ? undefined : "Configura el enlace correspondiente en src/data/"}
      {...(link.url && link.opensInNewTab
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {link.label}
    </a>
  );
}

export function Header() {
  const { path } = useRouter();
  const onHome = path === "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#inicio");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!onHome) return undefined;

    const sections = navigation
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter(Boolean);

    if (!sections.length) return undefined;

    const live = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-32% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] }
    );

    sections.forEach((section) => live.observe(section));
    return () => live.disconnect();
  }, [onHome]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const sectionHref = (href) => (onHome ? href : `/${href}`);

  return (
    <header className={`site-header${scrolled || open ? " is-solid" : ""}`}>
      <div className="header-bar">
        {onHome ? (
          <a href="#inicio" className="brand" onClick={() => setOpen(false)}>
            <img src={site.logo} alt={site.clinicName} />
          </a>
        ) : (
          <Link to="/" className="brand" onClick={() => setOpen(false)}>
            <img src={site.logo} alt={site.clinicName} />
          </Link>
        )}

        <nav className="nav-desktop" aria-label="Principal">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={sectionHref(item.href)}
              className={onHome && active === item.href ? "is-active" : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <HeaderNavLink link={infiltracionesLink} className="btn btn-header-ghost" />
          <HeaderNavLink link={courses} className="btn btn-header-ghost" />
          <a
            className="btn btn-header"
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon size={15} />
            {headerCta}
          </a>
        </div>

        <button
          className={`menu-toggle${open ? " is-open" : ""}`}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className="nav-mobile">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={sectionHref(item.href)}
              className={onHome && active === item.href ? "is-active" : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <p className="nav-mobile-meta">
            {contact.address.street}
            <br />
            {contact.address.city}
          </p>
          <a
            className="btn btn-fill"
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            <WhatsAppIcon size={18} />
            {headerCta}
          </a>
        </div>
      )}
    </header>
  );
}
