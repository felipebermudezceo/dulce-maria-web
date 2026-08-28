import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { TrustBar } from "./components/TrustBar";
import { Services } from "./components/Services";
import { AboutDoctor } from "./components/AboutDoctor";
import { Reviews } from "./components/Reviews";
import { Location } from "./components/Location";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
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
        <TrustBar />
        <Services />
        <AboutDoctor />
        <Reviews />
        <Location />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
