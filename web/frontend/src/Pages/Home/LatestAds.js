import { format } from 'date-fns';
import React, { useContext, useEffect, useRef, useState } from 'react';
import './ads.css';

import ProductCard from '../ProductCard/ProductCard';
import BookingModal from '../BookingModal/BookingModal';
import { AuthContext } from '../../Context/AuthContextProvider';
import LoadingSpinner from '../../Routes/LoadingSpinner';

const LatestAds = ({products}) => {
  const {user,accData}= useContext(AuthContext);
    const [product,setProduct]= useState({});
 
if(!user?.email){
  return <></>
}
if(accData?.acType === 'Buyer'){


  return (
    <div className='container m-auto my-20'>
      <div className="divider"><span className="text-2xl font-light">Featured Products</span></div>
      <p className="text-xs">Advertised by Sellers</p>
      <div className=" carousel  carousel-horizontal flex justify-center flex-row-reverse overflow-x-scroll scroll-auto py-5  rounded-box">
        {
          products.map(product => {
            

              return <ProductCard key={product._id} setProduct={setProduct} product={product} ></ProductCard>
            
          })
          
        }
    

        <BookingModal product={product}></BookingModal>
      </div>
    </div>
  );
} };

export default LatestAds;