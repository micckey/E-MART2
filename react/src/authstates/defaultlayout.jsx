import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import useAuthContext from '../contexts/authcontexts'

export default function DefaultLayout() {

    const  { user }  = useAuthContext();

    return user ? <Outlet /> : <Navigate to={'/login'} />
        
    
}
