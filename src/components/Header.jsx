import { useEffect, useState } from "react";
import { site, navigation, headerCta } from "../data/content";
import { courses } from "../data/courses";
import { contact } from "../data/contact";
import { whatsappUrl } from "../lib/whatsapp";
import { WhatsAppIcon } from "./WhatsAppIcon";

function CoursesLink({ className, onNavigate }) {
  if (!courses.visible) return null;

  const handleClick = (event) => {
    if (!courses.url) event.preventDefault();
    onNavigate?.();
  };

  return (
    <a
      className={className}
      href={courses.url || "#"}
      onClick={handleClick}
      title={courses.url ? undefined : "Configura el enlace en src/data/courses.js"}
      {...(courses.url && courses.opensInNewTab
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {courses.label}
    </a>
  );
}

export function Header() {
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
    const sections = navigation
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter(Boolean);

    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-32% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`site-header${scrolled || open ? " is-solid" : ""}`}>
      <div className="header-bar">
        <a href="#inicio" className="brand" onClick={() => setOpen(false)}>
          <img src={site.logo} alt={site.clinicName} />
        </a>

        <nav className="nav-desktop" aria-label="Principal">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={active === item.href ? "is-active" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <CoursesLink className="btn btn-header-ghost" />
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
              href={item.href}
              className={active === item.href ? "is-active" : undefined}
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
          <CoursesLink
            className="btn btn-header-ghost"
            onNavigate={() => setOpen(false)}
          />
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
