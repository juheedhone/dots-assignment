import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <main className="flex items-center justify-center h-screen">
      <App />
    </main>
  </StrictMode>
);
