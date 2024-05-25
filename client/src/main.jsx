import ReactDom from 'react-dom/client';
import { createBrowerRouter, RouterProvider } from 'react-router-dom/dist';
import 'index.css';

import App from '.App.jsx';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from '/pages/Login';
import Signup from '/pages/Signup';
import Error from '/pages/Error';


const router = createBrowerRouter(
    [
        {
            path: '/',
            element: <App />,
            error: <Error />,
            children: [
                { index: true,
                    element: <Home />
                },
                {
                    path: '/profile',
                    element: <Profile />
                },
                {
                    path: '/login',
                    element: <Login />
                },
                {
                    path: '/signup',
                    element: <Signup />
                }
            ]
        }
    ]
);
