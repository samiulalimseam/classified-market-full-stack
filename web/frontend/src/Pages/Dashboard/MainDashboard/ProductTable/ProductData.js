import { format } from 'date-fns';
import React from 'react';

const ProductData = ({ product }) => {
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
                                <img src={product.img} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{product.title.slice(0,16)}</div>
                            <div className="text-sm opacity-50">{product.location.split('-')[1]}</div>
                        </div>
                    </div>
                </td>
                <td>
                {product.seller}
                    <br />
                    <span className="badge badge-ghost badge-sm">Not Verified</span>
                </td>
                <td>{format(new Date(product.datePosted),"PP")}</td>
                <th>
                    <button className="btn btn-ghost btn-xs">Price: {product.price} <br /> Sale: {product.salePrice}</button>
                </th>
            </tr>
        
    );
};

export default ProductData;