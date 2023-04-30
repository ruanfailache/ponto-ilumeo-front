import { HomePage } from "@/view/pages";

import { RouteObject } from "react-router-dom";

export const HOME_ROUTE_PATH = "/registrar-ponto";

export const homeRoute: RouteObject = {
    path: HOME_ROUTE_PATH,
    element: <HomePage />,
};
