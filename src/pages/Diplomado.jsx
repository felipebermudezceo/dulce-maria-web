import { usePageMeta } from "../lib/seo";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { CourseBenefits } from "../components/course/CourseBenefits";
import { CourseHero } from "../components/course/CourseHero";
import { CourseModes } from "../components/course/CourseModes";
import { CourseSyllabus } from "../components/course/CourseSyllabus";
import { PricingProvider } from "../lib/pricing";
import "../styles/course.css";

export function Diplomado() {
  usePageMeta(
    "Diplomado en Ecografía Diagnóstica en Bogotá | Curso Online y Práctico",
    "Diplomado y curso de ecografía diagnóstica con la Dra. Dulce María: modalidad online, práctico + online y clase magistral. Formación en ecografía en Bogotá y Colombia."
  );

  return (
    <PricingProvider>
      <div className="course-page">
        <a className="skip" href="#formacion">
          Ir al contenido
        </a>
        <Header />
        <main>
          <CourseHero />
          <CourseModes />
          <CourseSyllabus />
          <CourseBenefits />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </PricingProvider>
  );
}
