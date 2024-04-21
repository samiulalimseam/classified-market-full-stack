import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../../Context/AuthContextProvider';
import ProductData from './ProductData';

const ProductTable = () => {
  const {accData} = useContext(AuthContext);
   const [products,setProducts] = useState([])
  useEffect(()=>{
    fetch(`https://ass-12-server-tau.vercel.app/products/${accData.uid}`)
    .then(res=>res.json())
    .then(data=> setProducts(data))
    .catch(err=> console.log(err))
  },[])

  return (
    <div className=' duration-1000'>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">

          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Product/Location</th>
              <th>Seller</th>
              <th>Date Posted</th>
              <th></th>
            </tr>
          </thead>
          <tbody>

            {
              products.map(product => {
                return <ProductData key={product.id} product={product}></ProductData>
              })
            }

          </tbody>



        </table>
      </div>

    </div>
  );
};

export default ProductTable;