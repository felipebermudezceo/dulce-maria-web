import { useEffect } from "react";
import { diplomado } from "../data/diplomado";
import { site } from "../data/content";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { CourseBenefits } from "../components/course/CourseBenefits";
import { CourseHero } from "../components/course/CourseHero";
import { CourseModes } from "../components/course/CourseModes";
import "../styles/course.css";

export function Diplomado() {
  useEffect(() => {
    const previous = document.title;
    document.title = `${diplomado.name} | ${site.clinicName}`;
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <div className="course-page">
      <a className="skip" href="#formacion">
        Ir al contenido
      </a>
      <Header />
      <main>
        <CourseHero />
        <CourseModes />
        <CourseBenefits />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
