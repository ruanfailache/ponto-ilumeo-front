import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { appRouter } from "./config/router";
import { RepositoryProvider } from "./presentation/context/repository.context";

import "./config/theme/styles/reset.css";
import "./config/theme/styles/variables.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <RepositoryProvider>
            <RouterProvider router={appRouter} />
        </RepositoryProvider>
    </React.StrictMode>
);
