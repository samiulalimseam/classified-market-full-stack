import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContextProvider';

const SellerRoute = ({children}) => {
    const {accData} = useContext(AuthContext);
    


    
    if(accData?.acType === "Seller"){
        if(accData?.sellerDisable === false){

            return children
        } else if(accData?.sellerDisable === true){
        return <div><p className="text-center text-4xl">Your seller account has been disabled</p></div>
        }
    }
    
    return <div className='m-auto'><p className='text-4xl text-center'>You are not a Seller!</p></div>
};

export default SellerRoute;