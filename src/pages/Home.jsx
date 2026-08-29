import { useEffect } from "react";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { AboutDoctor } from "../components/AboutDoctor";
import { Reviews } from "../components/Reviews";
import { Location } from "../components/Location";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";
import { WhatsAppButton } from "../components/WhatsAppButton";

export function Home() {
  useEffect(() => {
    const { hash } = window.location;
    if (!hash) return undefined;
    const el = document.querySelector(hash);
    el?.scrollIntoView();
    return undefined;
  }, []);

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
      <WhatsAppButton />
    </>
  );
}
