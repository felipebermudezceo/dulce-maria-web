import { useEffect, useState } from "react";
import { usePageMeta } from "../lib/seo";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { CookieButtons } from "../components/CookieBanner";
import { privacyPolicy } from "../data/privacy";
import { getConsent, onConsentChange } from "../lib/analytics";

export function Privacidad() {
  usePageMeta(
    "Política de privacidad y cookies | Dra. Dulce María",
    "Qué datos recoge la página de Ecografías Dra. Dulce María, para qué se usan y cómo ejercer tus derechos (Ley 1581 de 2012)."
  );
  const [choice, setChoice] = useState(getConsent);
  useEffect(() => onConsentChange(setChoice), []);

  return (
    <>
      <a className="skip" href="#privacidad">
        Ir al contenido
      </a>
      <Header />
      <main>
        <section className="section privacy" id="privacidad">
          <div className="wrap privacy-wrap">
            <h1>{privacyPolicy.title}</h1>
            <p className="privacy-updated">Actualizada el {privacyPolicy.updated}</p>
            <p>{privacyPolicy.intro}</p>
            {privacyPolicy.sections.map((section) => (
              <div key={section.title}>
                <h2>{section.title}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            ))}
            <div className="privacy-choice">
              <h2>{privacyPolicy.choiceTitle}</h2>
              <p>{privacyPolicy.choiceStatus[choice || "none"]}</p>
              <CookieButtons />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
