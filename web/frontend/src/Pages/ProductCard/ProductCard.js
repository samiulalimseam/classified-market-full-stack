import React, { useContext } from 'react';
import { FcOvertime, FcShipped } from 'react-icons/fc'
import { FaUserAlt } from 'react-icons/fa'
import { BsFillHandIndexThumbFill, BsFillSuitHeartFill, BsFillTagFill, BsPinMapFill } from 'react-icons/bs'
import { format } from 'date-fns';
import BookingModal from '../BookingModal/BookingModal';
import { AuthContext } from '../../Context/AuthContextProvider';
import LoadingSpinner from '../../Routes/LoadingSpinner';

const ProductCard = ({ product, setProduct, setCardProduct }) => {
  const { loading } = useContext(AuthContext);
  const propPass = (props) => {
    if (setProduct) {

      setProduct(props)
    }
    if (setCardProduct) {
      setCardProduct(props)
    }
  }

  return (
    <div className='hover:shadow-xl  rounded-xl duration-500 shadow mx-2 w-96 md:w-56 m-auto my-2   p-2'>
      <div className="carousel-item w-80 md:w-56 tohover ">
        <img className='md:w-52 w-96 hover:scale-105 duration-500 rounded-lg' src={product.img} alt="" />
      </div>
      <div className='flex flex-col justify-around items-start'>
        <p className='font-medium'>{product.title.slice(0, 22)}..</p>
        <p className='font-medium'>Price: {product.price}</p>
        <p className='font-medium'>Sale Price: {product.salePrice}</p>
        <div className="flex justify-between w-full items-center"><p className='font-thin text-sm'>Posted by: {product.seller} </p> <img className='w-5 border border-primary rounded-full' src={product?.sellerImg || <FaUserAlt></FaUserAlt> } alt="" /> </div>
        <div className="flex justify-start items-center"><p className='text-xl mr-1'><FcOvertime></FcOvertime></p> <p className='font-thin text-sm '>  {format(new Date(product.datePosted), 'PP')} </p>
        </div>
        <div className="flex justify-between w-full items-center">
          <div className="flex">
          <p className='text-sm text-accent mr-1'><BsPinMapFill></BsPinMapFill></p> <p className='font-thin text-sm '>
          {product.location.split('-')[1]}
        </p>
          </div>
          <p className='text-sm text-black font-thin  mr-1 rounded border '>{product?.verified}</p>
        </div>
        <div className="flex  items-center"><p className='text-sm text-accent mr-1'><BsFillTagFill></BsFillTagFill></p> <p className='font-thin text-sm '>
          {product.purchaseDate}
        </p>
          <div className='flex justify-end items-center mx-2' >
            <p className="text-sm text-red-600"><BsFillSuitHeartFill></BsFillSuitHeartFill> </p>
            <p className='text-sm mx-1 font-light'>{product.condition}</p>
          </div>
        </div>


        <div>

        </div>

        <label onClick={() => propPass(product)} htmlFor="my-modal-3" className="text-center bg-base-200  btn-ghost  w-full  p-1 mt-1 rounded">Buy Now</label>
      </div>

    </div>
  );
};

export default ProductCard;