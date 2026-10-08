import { useEffect } from "react";
import { infiltraciones } from "../data/infiltraciones";
import { site } from "../data/content";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { InfiltracionesHero } from "../components/infiltraciones/InfiltracionesHero";
import { InfiltracionesAbout } from "../components/infiltraciones/InfiltracionesAbout";
import { InfiltracionesTypes } from "../components/infiltraciones/InfiltracionesTypes";
import { InfiltracionesJoints } from "../components/infiltraciones/InfiltracionesJoints";
import { InfiltracionesArtrocentesis } from "../components/infiltraciones/InfiltracionesArtrocentesis";
import { InfiltracionesSpecialist } from "../components/infiltraciones/InfiltracionesSpecialist";
import { InfiltracionesCTA } from "../components/infiltraciones/InfiltracionesCTA";
import "../styles/course.css";
import "../styles/infiltraciones.css";

export function Infiltraciones() {
  useEffect(() => {
    const previous = document.title;
    document.title = `${infiltraciones.name} | ${site.clinicName}`;
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <div className="infil-page">
      <a className="skip" href="#que-son">
        Ir al contenido
      </a>
      <Header />
      <main>
        <InfiltracionesHero />
        <InfiltracionesAbout />
        <InfiltracionesTypes />
        <InfiltracionesJoints />
        <InfiltracionesArtrocentesis />
        <InfiltracionesSpecialist />
        <InfiltracionesCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
