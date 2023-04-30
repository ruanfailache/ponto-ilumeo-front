import React from "react";
import ReactDOM from "react-dom/client";
import { HomePage } from "./presentation/pages";

import "./utils/styles/reset.css";
import "./utils/styles/variables.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <HomePage />
    </React.StrictMode>
);
