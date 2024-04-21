import React from 'react';

const BuyersData = ({buyer,orders}) => {
    const orderPerCustomer = orders.filter(order => order.buyerEmail === buyer.email)


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
                            <img src={buyer.img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{buyer.name}</div>
                        <div className="text-xs font-light opacity-50">{buyer.uid}</div>
                    </div>
                </div>
            </td>
            <td>
                {buyer.buyer}
                <br />
                <span className="badge badge-ghost badge-sm">{orderPerCustomer.length}</span>
            </td>
            <td>
                <p className={`text-sm  rounded-lg w-auto  `}>{buyer.email}</p>
            </td>
            <td>
                <div>

                    <button className="btn btn-secondary btn-xs  text-white">Edit </button>
                </div>
            </td>
        </tr>
    );
};

export default BuyersData;