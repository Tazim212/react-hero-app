import React from 'react';
import { createBrowserRouter } from "react-router";
import App from '../../App';
import Apps from '../Apps/Apps';
import Home from '../Home/Home';
import AppDetails from '../AppDetails/AppDetails';
import ErrorPage from '../../Pages/ErrorPage/ErrorPage';
import Installation from '../Installation/Installation';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
            path: "/",
            Component: Home
        },
        {
            path: "/apps",
            Component: Apps,
        },
        {
            path: '/appdetails/:id',
            Component: AppDetails
        },
        {
            path: '/installation',
            Component: Installation
        }
    ]
  },
  
]);

