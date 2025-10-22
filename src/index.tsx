import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChatbaseDashboard } from "./screens/ChatbaseDashboard";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <ChatbaseDashboard />
  </StrictMode>,
);
