import { Router, useRouter } from "./lib/router";
import { Home } from "./pages/Home";
import { Diplomado } from "./pages/Diplomado";
import { Infiltraciones } from "./pages/Infiltraciones";

function Routes() {
  const { path } = useRouter();
  if (path === "/diplomado" || path.startsWith("/diplomado/")) return <Diplomado />;
  if (path === "/infiltraciones" || path.startsWith("/infiltraciones/")) return <Infiltraciones />;
  return <Home />;
}

export default function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}
