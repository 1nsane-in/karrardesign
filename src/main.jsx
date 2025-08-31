import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import SmoothScrollLenis from "./components/common/SmoothScrollLenis.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SmoothScrollLenis>
      <App />
    </SmoothScrollLenis>
  </StrictMode>
);
