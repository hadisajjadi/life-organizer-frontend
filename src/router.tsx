import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";


import ErrorPage from './routes/ErrorPage';
import Root from './routes/Root';
import Day from './routes/Day';



const routerItems = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Day />,
            },
            {
                path: "/about",
                element: <div>About</div>,
            },
            {
                path: "*",
                element: <ErrorPage />,
            },
        ],
    },
]);

const Router = () => {
    return (
        <React.StrictMode>
            <RouterProvider router={routerItems} />
        </React.StrictMode>
    )
}

export default Router;