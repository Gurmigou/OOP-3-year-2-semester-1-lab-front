import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import UserMain from "./pages/userMain/UserMain";
import Login from "./pages/login/Login";
import Registration from "./pages/registration/Registration";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
    {
        path: '/',
        element: <UserMain/>
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/register',
        element: <Registration/>
    },
    {
        path: '/main',
        element: <UserMain/>
    },
    // {
    //     path: '/card',
    //     element: <UserCard/>
    // },
]);


root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);