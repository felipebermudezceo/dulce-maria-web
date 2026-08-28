import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { AboutDoctor } from "./components/AboutDoctor";
import { Reviews } from "./components/Reviews";
import { Location } from "./components/Location";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { BookingNotice } from "./components/BookingNotice";
import { WhatsAppButton } from "./components/WhatsAppButton";

export default function App() {
  return (
    <>
      <a className="skip" href="#inicio">
        Ir al contenido
      </a>
      <Header />
      <main>
        <Hero />
        <Services />
        <AboutDoctor />
        <Reviews />
        <Location />
        <CTA />
      </main>
      <Footer />
      <BookingNotice />
      <WhatsAppButton />
    </>
  );
}
