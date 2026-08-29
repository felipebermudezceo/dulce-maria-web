import { useEffect, useState } from "react";
import { diplomado } from "../data/diplomado";
import { site } from "../data/content";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { CourseBenefits } from "../components/course/CourseBenefits";
import { CourseBooking } from "../components/course/CourseBooking";
import { CourseHero } from "../components/course/CourseHero";
import { CourseModes } from "../components/course/CourseModes";
import "../styles/course.css";

export function Diplomado() {
  const [modeId, setModeId] = useState("");

  useEffect(() => {
    const previous = document.title;
    document.title = `${diplomado.name} | ${site.clinicName}`;
    return () => {
      document.title = previous;
    };
  }, []);

  const selectMode = (id) => {
    setModeId(id);
    window.requestAnimationFrame(() => {
      document.getElementById("reserva")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <div className="course-page">
      <a className="skip" href="#formacion">
        Ir al contenido
      </a>
      <Header />
      <main>
        <CourseHero />
        <CourseModes selectedId={modeId} onSelect={selectMode} />
        <CourseBenefits />
        <CourseBooking modeId={modeId} onChangeMode={() => setModeId("")} />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
