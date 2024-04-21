import { useQuery } from '@tanstack/react-query';
import React from 'react';
import BuyersData from './BuyersData';

const BuyersTable = () => {
  const buyerQuery = 'Buyer'
  const orderQuery = 'all'

  const { data: buyers = [] } = useQuery({
    queryKey: ['buyers', buyerQuery],
    queryFn: async () => {
      const res = await fetch(`https://ass-12-server-tau.vercel.app/users/${buyerQuery}`)
      const data = await res.json()
      return data;
    }
  })
  const { data: orders = [] } = useQuery({
    queryKey: ['orders', orderQuery],
    queryFn: async () => {
      const res = await fetch(`https://ass-12-server-tau.vercel.app/orders/${orderQuery}`)
      const data = await res.json()
      return data;
    }
  })
  return (
    <div className=' duration-1000'>
      <div className="overflow-x-auto w-full">
        <h2 className="text-center">
        
        </h2>
        <table className="table w-full">

          <thead>
            <tr className='' >
              
              <th className='bg-secondary'></th>
              <th className='bg-secondary'><span className="text-xl font-light p-3  text-white">Buyers: {buyers.length}</span></th>
              <th className='bg-secondary'><span className="text-xl font-light p-3  text-white">Orders: {orders.length}</span></th>
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
              <th>Orders</th>
              
              <th>Email</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>

            {
              buyers?.map(buyer => {
                return <BuyersData key={buyer._id} orders={orders} buyer={buyer}></BuyersData>
              })
            }

          </tbody>



        </table>
      </div>

    </div>
  );
};

export default BuyersTable;