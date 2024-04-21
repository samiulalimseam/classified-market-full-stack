import React, { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContextProvider';

const AdminRoutes = ({children}) => {
    
    const {accData} = useContext(AuthContext);
    


    
    if(accData?.acType === "Admin"){
        return children;
    }
    
    return <div className='m-auto'><p className='text-4xl text-center'>You are not an Admin!</p></div>
   
};

export default AdminRoutes;