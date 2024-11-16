import {createBrowserRouter} from "react-router-dom";
import React from "react";
import MainLayout from "../layouts/MainLayout";
import AuthResourcesPage from "../pages/AuthResourcesPage";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";

export const routes = createBrowserRouter([
    {
        path: '/', element:<MainLayout/>, children: [
            {
                index: true, element: <HomePage/>
            },
            {
                path: '/login', element: <LoginPage/>
            },
            {
                path: '/auth/resources', element: <AuthResourcesPage/>
            }
        ]

    }
])