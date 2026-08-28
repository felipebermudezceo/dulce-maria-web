<<<<<<< HEAD
import { Router, useRouter } from "./lib/router";
import { Home } from "./pages/Home";
import { Diplomado } from "./pages/Diplomado";

function Routes() {
  const { path } = useRouter();
  if (path === "/diplomado" || path.startsWith("/diplomado/")) return <Diplomado />;
  return <Home />;
}

export default function App() {
  return (
    <Router>
      <Routes />
    </Router>
=======
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
      <div className="float-bar">
        <div className="float-bar-left">
          <BookingNotice />
        </div>
        <WhatsAppButton />
      </div>
    </>
>>>>>>> 1d43c667c4c25e150f381b68a3871b98755fca01
  );
}
