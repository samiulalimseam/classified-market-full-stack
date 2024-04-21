import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import EditModal from '../../../EditModal/EditModal';
import SellersData from './SellersData';

const SellersTable = () => {
  const [sellerToSend, setSeller] = useState({})
  const query = 'Seller'

  const { data: sellers = [] } = useQuery({
    queryKey: ['sellers', query],
    queryFn: async () => {
      const res = await fetch(`https://ass-12-server-tau.vercel.app/users/${query}`)
      const data = await res.json()

      return data;
    }
  })
  const { data: products = [] } = useQuery({
    queryKey: ['products', ''],
    queryFn: async () => {
      const res = await fetch(`https://ass-12-server-tau.vercel.app/products`)
      const data = await res.json()
      return data;
    }
  })
  return (
    <div className=' duration-1000'>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">

          <thead>
          <tr className='' >
              
              <th className='bg-secondary'></th>
              <th className='bg-secondary'><span className="text-xl font-light p-3  text-white">Sellers: {sellers.length}</span></th>
              <th className='bg-secondary'><span className="text-xl font-light p-3  text-white">Products: {products.length}</span></th>
              <th className='bg-secondary'></th>
              <th className='bg-secondary'></th>
              
              
              <th className='bg-secondary'></th>
            </tr>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Products</th>
              
              <th>Verification</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>

            {
              sellers?.map(seller => {
                return <SellersData setSeller={setSeller} key={seller._id} products={products} seller={seller}></SellersData>
              })
            }
          </tbody>



        </table>
<EditModal seller={sellerToSend}></EditModal>
      </div>

    </div>
  );
};

export default SellersTable;