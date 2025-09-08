import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <main className="flex items-center justify-center h-screen p-2 sm:p-4 md:p-6">
      <App />
    </main>
  </StrictMode>
);
