import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Profile from './pages/Profile.jsx'
import Cars from './pages/Cars.jsx'
import ShowCar from './pages/ShowCar.jsx'
import Error from './pages/Error.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/me',
        element: <Profile />
      },
      {
        path: '/cars',
        element: <Cars />
      },
      {
        path: 'show-car/:carId',
        element: <ShowCar />
      }
    ],
  },
]);  

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
