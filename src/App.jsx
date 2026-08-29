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
  );
}
