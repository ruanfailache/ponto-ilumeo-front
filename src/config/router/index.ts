import { createBrowserRouter } from "react-router-dom";

import { authenticationRoute, homeRoute } from "./routes";

export const appRouter = createBrowserRouter([authenticationRoute, homeRoute]);
