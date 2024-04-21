import React from 'react';

const SellersData = ({ seller, products, setSeller }) => {

    const sellerProducts = products.filter(p => p.sellerId === seller.uid);
    
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
                            <img src={seller.img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{seller.name}</div>
                        <div className="text-xs font-light opacity-50">{seller.uid}</div>
                    </div>
                </div>
            </td>
            <td>
                {/* {seller.seller} */}
                <br />
                <span className="badge badge-ghost badge-sm">{sellerProducts.length}</span>
            </td>
            <td>
                <p className={`text-sm border rounded-lg w-24 text-center ${seller.verified === 'Verified' && 'border-blue-600 text-blue-600'} `}>{seller.verified}</p>
            </td>
            <td>
                <div>

                   
                    <label onClick={()=> setSeller(seller)}  htmlFor="my-modal-3"  className="btn btn-secondary btn-xs  text-white">Edit</label>
                </div>
            </td>
        </tr>
    );
};

export default SellersData;