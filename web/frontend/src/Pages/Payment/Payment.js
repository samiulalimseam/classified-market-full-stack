import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK );


const Payment = () => {
    const orderId = useLoaderData();
    
    const {data:order ={}} = useQuery({
        queryKey:['order', orderId],
        queryFn: ()=> fetch(`https://ass-12-server-tau.vercel.app/order/${orderId}`)
        .then(res=>res.json())
    })

    return (
        <div className='card card-body '>
            <p className='text-3xl font-light text-center'>Complete Payment </p>
            <p className='text-md font-bold text-left'>Provide your card details to complete purchase, your total {order.productPrice} </p>
            <p>Product: {order.productName}</p>
            <p>Sold by: {order.seller}</p>
            <p>Meet location: {order.meetLocation}</p>
            <div className='card card-body border max-w-lg min-h-[290px]'>
            <Elements stripe={stripePromise}>
      <CheckOutForm order={order} />
    </Elements>
            </div>
        </div>
    );
};

export default Payment;