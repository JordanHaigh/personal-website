import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CV from "./components/CV.jsx";
import "./styles.css";
import "./cv.css";

createRoot(document.getElementById("root")).render(
  <StrictMode><CV /></StrictMode>,
);
