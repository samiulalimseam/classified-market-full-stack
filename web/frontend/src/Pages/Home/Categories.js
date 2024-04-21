import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import {GiRunningShoe} from "react-icons/gi";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContextProvider';

const Categories = () => {
    const {setLoading} = useContext(AuthContext)
    const navigate = useNavigate();
    setLoading(true)
    const {data:cats =[]} = useQuery({
        queryKey:['cats'],
        queryFn: ()=> fetch('https://ass-12-server-tau.vercel.app/categories')
        .then(res=>res.json())
    })
    const {data:products =[]} = useQuery({
        queryKey:['products'],
        queryFn: ()=> fetch('https://ass-12-server-tau.vercel.app/products')
        .then(res=>res.json())
    })
    // -------------------------------------------------------


    




    return (
        <div className='duration-1000 container m-auto md:mt-20'>
            <p className="text-lg font-bold m-3">Browse by Categories</p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 ">
                {
                    cats.map(category=>{
                        return <div  key={category.id} onClick={()=> navigate(`/category/${category._id}`) } className=' cursor-pointer m-auto flex justify-start items-center w-44 p-2 mb-2 h-auto rounded-lg border '>
                            <img className='w-12' src={category.img} alt="" />
                            <div>
                            <p className='text-lg font-light'>{category.title}</p>
                            <p className="text-sm font-thin">
                                {
                                    products.filter(product=>product.category === category._id).length
                                } Products
                            </p>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default Categories;