import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import { appRouter } from "./config/router";

import "./config/theme/styles/reset.css";
import "./config/theme/styles/variables.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={appRouter} />
    </React.StrictMode>
);
