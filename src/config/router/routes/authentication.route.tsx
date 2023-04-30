import { AuthenticationPage } from "@/view/pages";

import { RouteObject } from "react-router-dom";

export const AUTHENTICATION_ROUTE_PATH = "/";

export const authenticationRoute: RouteObject = {
    path: AUTHENTICATION_ROUTE_PATH,
    element: <AuthenticationPage />,
};
