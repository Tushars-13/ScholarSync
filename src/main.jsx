import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import { StudentProfileProvider } from "./context/StudentProfileContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <StudentProfileProvider>
        <App />
      </StudentProfileProvider>
    </BrowserRouter>
  </StrictMode>
);