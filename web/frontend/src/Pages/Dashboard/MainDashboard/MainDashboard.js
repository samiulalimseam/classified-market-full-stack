import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthContextProvider';

const MainDashboard = () => {
    const { user ,accData} = useContext(AuthContext);
    const [products, setProducts] = useState([]);
    const [Orders, setOrders] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://ass-12-server-tau.vercel.app/products/${accData.uid}`)
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.error(err))
    }, [])
    useEffect(() => {
        fetch(`https://ass-12-server-tau.vercel.app/orders/${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
            .catch(err => console.error(err))
    }, [])

    return (
        <div className='container m-auto min-h-screen p-3'>
            <div className="stats flex md:flex-row flex-col duration-1000 shadow w-full mb-2">
            {
                accData?.acType === 'Buyer' &&
            
            <div className="stat cursor-pointer" onClick={() => navigate('/dashboard/orders')}>
                    <div className="stat-figure text-primary ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div className="stat-title">Orders</div>
                    <div className="stat-value text-primary">{Orders.length}</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>
            }
            {
                accData?.acType === 'Seller' &&
            
                    <div className="stat cursor-pointer" onClick={() => navigate('/dashboard/products')}>
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div className="stat-title">Products</div>
                    <div className="stat-value text-secondary">{products.length}</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>
            }
            
            {/* {
                accData?.acType === 'Admin' &&
                <div className="flex justify-center">
                    <Link className='m-2'>Sellers</Link>
                <Link className='m-2'>Buyers</Link>
                </div>
            } */}
            
                

                

                

                <div className="stat cursor-pointer " onClick={() => navigate('/dashboard/profile')} >
                    <div className="stat-figure text-secondary">
                        <div className="avatar online">
                            <div className="w-16 rounded-full">
                                <img alt='' src={accData?.img} />
                            </div>
                        </div>
                    </div>
                    <div className="stat-value">{user?.displayName}</div>
                    <div className="stat-title">{accData?.acType || 'Account'}</div>
                    <div className="stat-desc text-secondary "><p className={`w-20 border rounded-lg py-1 text-center ${accData?.verified === 'Not Verified' && "border-red-500 text-white bg-red-600 "} ok ${accData?.verified === 'Verified' && "border-blue-700 text-white bg-blue-700 "} `}>{accData?.verified}</p></div>
                </div>

            </div>

            <Outlet></Outlet>
        </div>
    );
};

export default MainDashboard;