import React from 'react';
import { createBrowserRouter } from "react-router";
import App from '../../App';
import Apps from '../Apps/Apps';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
        {
            path: "/apps",
            Component: Apps
        },
    ]
  },
  
]);

