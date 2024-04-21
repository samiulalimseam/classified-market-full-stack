import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContextProvider';

const BuyerRoute = ({children}) => {
    const {accData} = useContext(AuthContext);
    


    
    if(accData?.acType === "Buyer"){
        return children
    }
    
    return <div className='m-auto'><p className='text-4xl text-center'>You are not a Buyer!</p></div>
};

export default BuyerRoute;