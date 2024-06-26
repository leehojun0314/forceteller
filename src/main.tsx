import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App.tsx";
// import "./css/index.css";
// import "./assets/css/index.css";
import { StyledEngineProvider } from "@mui/material/styles";
import "./assets/css/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <App />
    </StyledEngineProvider>
  </React.StrictMode>,
);
