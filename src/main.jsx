import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { site } from "./data/content";
import "./styles/app.css";

document.title = site.title;
const description = document.querySelector('meta[name="description"]');
if (description) description.setAttribute("content", site.description);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
