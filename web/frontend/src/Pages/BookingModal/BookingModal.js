import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContextProvider';
import ProductCard from '../ProductCard/ProductCard';

const BookingModal = ({product}) => {
    const {user,accData} = useContext(AuthContext);
    const navigate = useNavigate();
    const addNewOrder=(order)=>{

    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const form = e.target;
        const order={
            productId: product._id,
            productName: product.title,
            productPrice: product.salePrice,
            productCondition: product.condition,
            productPurchaseDate: product.purchaseDate,
            seller:product.seller,
            sellerId: product.sellerId,
            productLocation: product.location,
            productImg: product.img,
            meetLocation: form.location.value,
            buyerPhone: form.phone.value,
            buyerEmail: form.email.value,
            buyerName: form.name.value,
            sellerVerified: product.verified,
            paid: false,
            status: 'pending',
            

        }
        fetch('https://ass-12-server-tau.vercel.app/addorder', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(order)
        }).then(()=>{
            toast('Booked Successfully!')
            setTimeout(() => {
                navigate('/dashboard/orders')
            }, 2000);
        })
        .catch(err=>console.error(err))

    }
    return (
        <>
            {/* The button to open modal */}


{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">Request  Seller</h3>
    <form onSubmit={(e)=>{
        e.preventDefault()
        if(accData.acType === 'Seller' || accData.acType === 'Admin'){
            toast(`Sorry, ${accData.acType}s are not allowed to order products!`)
        }
        else{
            handleSubmit(e)
        }
    }} className='flex flex-col' >
        <div className="flex flex-col border p-2">
        <p className="text-sm">Product: {product?.title}</p>
        <p className="text-xs">Price: {product?.salePrice}</p>
        <p className="text-xs">Condition: {product?.condition}</p>
        </div>
        <label >Email</label>
    <input type="text" defaultValue={user?.email} disabled placeholder="Email" name='email' className="input input-bordered w-full max-w-xs" />
        <label >Name</label>
    <input type="text" name='name' defaultValue={user?.displayName} disabled placeholder="Name" className="input input-bordered w-full max-w-xs" />
        <label >Phone</label>
    <input type="text" name='phone' placeholder="Phone" className="input input-bordered w-full max-w-xs" />
        <label >Location</label>
    <input type="text" name='location' placeholder="Location" className="input input-bordered w-full max-w-xs" />
    <button type="submit" className='btn btn-primary w-32 my-2'>Submit</button>
    </form>
    
  </div>
</div>
        </>
    );
};

export default BookingModal;