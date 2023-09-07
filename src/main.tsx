import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import { GlobalStyles } from "./styles/GlobalStyles";
import "@fontsource/dm-sans";
import { ChampProvider } from "./contexts/ChampContext";
import "./css/tailwind.css";
import "./css/variables.css";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChampProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChampProvider>
  </React.StrictMode>
);
