import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Our_menu from "../Pages/Our_menu/Our_menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/menu",
                element: <Our_menu></Our_menu>
            },
            {
                path: "/order/:category",
                element: <Order></Order>
            }, 
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/registration",
                element: <Registration></Registration>
            }
        ],
    },
]);
