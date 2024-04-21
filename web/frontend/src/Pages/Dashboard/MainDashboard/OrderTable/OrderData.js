import React from 'react';
import { Link } from 'react-router-dom';

const OrderData = ({order}) => {
    return (
        <tr className='duration-1000'>
                <th>
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={order.productImg} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{order._id.slice(16,order._id.length)}</div>
                            <div className="text-sm opacity-50">{order.productLocation.split('-')[1]}</div>
                        </div>
                    </div>
                </td>
                <td>
                {order.seller}
                    <br />
                    <span className="badge badge-ghost badge-sm">{order.sellerVerified}</span>
                </td>
                
                <td>
                    <button className=" text-black"> BDT {order.productPrice}৳ <br /> </button>
                </td>
                <td>
                    <button className=" text-black"> {order.status} <br /> </button>
                </td>
                <td>
                    <div className="flex flex-col md:flex-row">

                    <Link to={`/dashboard/payment/${order._id}`} onClick={()=> console.log('clicked')} className={`rounded bg-primary p-1 m-1 w-16 text-center text-black ${order?.paid && ' btn-disabled  bg-green-600 text-white'}`}>{order?.paid && 'Paid'} {!order?.paid && 'Pay'} <br /> </Link>
                    <button className="rounded bg-red-500 p-1 m-1 w-16 text-center text-white">Cancel <br /> </button>
                    
                    </div>
                </td>
            </tr>
    );
};

export default OrderData;