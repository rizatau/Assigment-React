import React from "react";
import {useLocation, Navigate} from 'react-router-dom';

export default function PrivateRoute({children}){
    const location = useLocation()
    console.log(!localStorage.getItem(''));
    if(!localStorage.getItem('')){
        
    return <Navigate to='/login' state={{from:location}} />
    }

    return children
}
