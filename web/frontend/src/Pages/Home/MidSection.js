import React from 'react';
import { FcCurrencyExchange, FcShipped, FcPlus, FcCollaboration, FcGlobe } from "react-icons/fc";
import { TbLock, TbShoppingCart } from "react-icons/tb";


const MidSection = () => {
    return (
        <div className="container m-auto">

            <div className='flex md:flex-row flex-col items-center  md:justify-around m-10'>
                <div className="section1 mb-3">
                    <div className="card card-side bg-base-100 w-96 p-5 md:w-auto shadow-xl flex justify-between items-center ">
                        <p className='text-[100px] '><FcCurrencyExchange></FcCurrencyExchange></p>
                        <div className="card-body">
                            <h2 className="card-title">Start making money!</h2>
                            <p>Do you have something to sell?
                                Post your first ad and start making money!</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary "><span className='text-xl mr-2'>
                                    <FcPlus></FcPlus>
                                </span> Post your Ad for free</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section2 mb-3">
                    <div className="card card-side bg-base-100 w-96 p-5 m-2 md:w-full shadow-xl flex items-center">
                        <p className='text-[100px] '><FcCollaboration></FcCollaboration></p>
                        <div className="card-body">
                            <h2 className="card-title">Want to buy goods?</h2>
                            <p>Looking to buy necessary goods in Bangladesh ?
                                Get up to 800k+ Products or browse through 300+ categories!</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-secondary text-white"><span className='text-xl mr-2'><FcGlobe></FcGlobe></span> Explore</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section3 mb-5">
                <div className=" m-auto card card-side bg-base-100 w-96 p-5 md:w-1/2 shadow-xl flex flex-col md:flex-row justify-between items-center ">
                    <p className='text-[100px] '><FcShipped></FcShipped></p>
                    <div className="card-body ">
                        <h2 className="card-title">Get items delivered to you with
                            <span className=' p-1 rounded-md   items-center flex'>
                                <span className='text-sm flex items-center bg-secondary pl-1 h-6 w-5 text-white rounded-l-lg '><TbLock></TbLock></span> <span className='text-xs flex items-center h-6 w-28 border border-secondary rounded-r-lg  justify-center '>Doorstep Delivery</span>
                            </span>
                        </h2>
                        <p>Choose from over 4,500 items that can be delivered to your doorstep. Order online and enjoy our Buyer Protection program, which means that we’ll replace the item for FREE if it’s not as described in the ad!</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-accent text-white">Shop Now<span className='text-xl mr-2'>
                                <TbShoppingCart></TbShoppingCart>
                            </span>


                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default MidSection;