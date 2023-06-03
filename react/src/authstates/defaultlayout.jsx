import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import useAuthContext from '../contexts/authcontexts'

export default function DefaultLayout() {

    const  { user }  = useAuthContext();
    const location = useLocation();

    return user ? <Outlet /> : <Navigate to={'/login'} replace state={{from: location}}/>
        
    
}
