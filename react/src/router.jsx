import { Navigate, createBrowserRouter } from 'react-router-dom'
import Login from './views/login';
import Signup from './views/signup';
import Dashboard from './views/dashboard';
import DefaultLayout from './authstates/defaultlayout';
import GuestLayout from './authstates/guestlayout';
import NotFound from './views/notfound';

const Router = createBrowserRouter([

    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            }
        ]
    },

    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to='/dashboard' />
            },
            {
                path: '/dashboard',
                element: <Dashboard />
            }
        ]
    },

    {
        path: '*',
        element: <NotFound />
    }
])

export default Router;
