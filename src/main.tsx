import React from "react";
import ReactDOM from "react-dom/client";
import { AuthenticationPage } from "./presentation/pages/authentication";

import "./utils/styles/reset.css";
import "./utils/styles/variables.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthenticationPage />
  </React.StrictMode>
);
