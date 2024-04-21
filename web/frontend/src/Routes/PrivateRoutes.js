import React, { Children, useContext, useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContextProvider';
import LoadingSpinner from './LoadingSpinner';

const PrivateRoutes = ({children}) => {
    const {user,loading,setLoading} = useContext(AuthContext);
    const location = useLocation()

    
    if(loading){
        if(user){
        setTimeout(() => {
            setLoading(false)
            return children
        }, 600);    
        } else{
            return <Navigate to={'/login'} state={{from:location}} replace></Navigate>
        }
        return <div className="min-w-full min-h-screen "> <LoadingSpinner></LoadingSpinner></div>
    }
    if(user){
        setLoading(false)
        return children;
    }
    return <Navigate to={'/login'} state={{from:location}} replace></Navigate>
};

export default PrivateRoutes;