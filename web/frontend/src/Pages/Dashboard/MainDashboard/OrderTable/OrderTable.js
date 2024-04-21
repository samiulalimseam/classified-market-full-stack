import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../../Context/AuthContextProvider';
import OrderData from './OrderData';

const OrderTable = () => {
  const {user,account,setLoading} = useContext(AuthContext);
    const [orders, setOrders] = useState([]);
    


    
    useEffect(()=>{
      fetch(`https://ass-12-server-tau.vercel.app/orders/${user.email}`)
      .then(res=>res.json())
      .then(data=> setOrders(data))
      .catch(err=>console.log(err))
    },[])
    
    return (
        <div>
      <div className="duration-1000 overflow-x-auto w-full">
        <table className="table w-full">

          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Order ID</th>
              <th>Seller</th>
              <th>Price</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>

            {
              orders.map(order => {
                return <OrderData key={order.id} order={order}></OrderData>
              })
            }

          </tbody>



        </table>
      </div>

    </div>
    );
};

export default OrderTable;