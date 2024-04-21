import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';

import ProductCard from '../ProductCard/ProductCard';

const CategoryPage = () => {
    const [product,setCardProduct]=useState({});
    const products = useLoaderData();
    return (
        <div className='container m-auto min-h-screen'>
            <p className="text-2xl font-extralight text-center">Total {products.length} Products </p>
            <div className="flex flex-col md:flex-row md:justify-start items-center justify-center flex-wrap">
                {
                    products.map(product=>{
                        return <ProductCard setCardProduct={setCardProduct} key={product._id} product={product}></ProductCard>
                    })
                }
                <BookingModal product={product}></BookingModal>
            </div>
            
        </div>
    );
};

export default CategoryPage;