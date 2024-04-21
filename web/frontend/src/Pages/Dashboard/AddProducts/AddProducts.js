import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthContextProvider';

const AddProducts = () => {
    const { user,accData } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [cats, setCats] = useState([]);
    const [locations, setLocations] = useState([]);
    const [conditions, setConditions] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        fetch('https://ass-12-server-tau.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCats(data))
            .catch(err => console.error(err))
    }, [])
    useEffect(() => {
        fetch('https://ass-12-server-tau.vercel.app/locations')
            .then(res => res.json())
            .then(data => setLocations(data))
            .catch(err => console.error(err))
    }, [])
    useEffect(() => {
        fetch('https://ass-12-server-tau.vercel.app/conditions')
            .then(res => res.json())
            .then(data => setConditions(data))
            .catch(err => console.error(err))
    }, [])
    const handleAddProduct = (data) => {
        const product = {

            title: data.title,
            img: data.imgURL,
            details: data.details,
            category: data.categoryId,
            price: data.price,
            salePrice: data.saleprice,
            size: data.size,
            seller: user?.displayName,
            sellerImg: user?.photoURL,
            sellerId: user?.uid,
            datePosted: new Date(),
            location: data.location,
            purchaseDate: data.purchaseDate,
            condition: data.condition,
            verified: accData?.verified,
            sellerDisabled: false
        }
        fetch('https://ass-12-server-tau.vercel.app/addproduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(() => {
                toast('Product Addedd')
                setTimeout(() => {
                    navigate('/dashboard/products')
                }, 1);
            })

        console.log(data);
    }
    return (
        <div>
            <form onSubmit={handleSubmit(handleAddProduct)} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Product title</span>
                    </label>
                    {/* name input -------------------- */}
                    <input defaultValue="" {...register("title", { required: true })} type="text" placeholder="title" className="input input-bordered" />
                    {errors.title && <span className='text-thin text-xs text-red-500'>This field is required</span>}
                    {/* email -------------input------------------------ */}
                    <div className="prices flex md:flex-row flex-col">
                        <div className='price mx-2'>
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input defaultValue="" {...register("price", { required: true })} type="number" placeholder="Price" className="input input-bordered" />
                            {errors.price && <span className='text-thin text-xs text-red-500'>This field is required</span>}
                        </div>
                        <div className='price mx-2'>
                            <label className="label">
                                <span className="label-text">Sale Price</span>
                            </label>
                            <input defaultValue="" {...register("saleprice", { required: true })} type="number" placeholder="Price" className="input input-bordered" />
                            {errors.saleprice && <span className='text-thin text-xs text-red-500'>This field is required</span>}
                        </div>
                    </div>
                </div>
                <div className="form-control">
                    <div className="category-brand flex md:flex-row flex-col">
                        <div className="categrory mx-2">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            {/* name input -------------------- */}
                            <select className='select select-secondary ' {...register("categoryId")}>
                                <option value={`Uncategorized`} disabled selected>Pick product category</option>
                                {
                                    cats.map(cat => {
                                        return <option value={cat._id}>{cat.title}</option>
                                    })
                                }


                            </select>
                            {errors.categoryId && <span className='text-thin text-xs text-red-500'>This field is required</span>}
                        </div>
                        <div className="condition mx-2">
                            <label className="label">
                                <span className="label-text">Product Condition</span>
                            </label>
                            {/* name input -------------------- */}
                            <select className='select select-secondary ' {...register("condition")}>
                                <option value={`Uncategorized`} disabled selected>Pick product condition</option>
                                {
                                    conditions.map(condition => {
                                        return <option value={condition.name}>{condition.name}</option>
                                    })
                                }


                            </select>
                            {errors.condition && <span className='text-thin text-xs text-red-500'>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Brand</span>
                            </label>
                            <input {...register("brand", { required: true })} type="text" placeholder="brand" className="input input-bordered" />
                            {errors.brand && <span className='text-thin text-xs text-red-500'>This field is required</span>}
                        </div>
                        <div className="form-control mx-2">
                            <label className="label">
                                <span className="label-text">purchaseDate</span>
                            </label>
                            <input {...register("purchaseDate", { required: true })} type="date" placeholder="purchaseDate" className="input input-bordered" />
                            {errors.purchaseDate && <span className='text-thin text-xs text-red-500'>This field is required</span>}
                        </div>
                        <label className="label">
                        </label>
                    </div>
                    {/* description */}
                    <label className="label">
                        <span className="label-text">Image URL</span>
                    </label>
                    <input defaultValue="" {...register("imgURL", { required: true })} type="text" placeholder="imgURL" className="input input-bordered" />
                    {errors.imgURL && <span className='text-thin text-xs text-red-500'>This field is required</span>}
                    <label className="label">
                        <span className="label-text">Location</span>
                    </label>
                    <select className='select select-secondary ' {...register("location")}>
                        <option value={`Uncategorized`} disabled selected>Pick Location</option>
                        {
                            locations.map(location => {
                                return <option value={location._id + '-' + location.name}>{location.name}</option>
                            })
                        }


                    </select>
                    {errors.location && <span className='text-thin text-xs text-red-500'>This field is required</span>}
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea defaultValue="" {...register("details", { required: true })} type="text" placeholder="details" className="input input-bordered" />
                    {errors.details && <span className='text-thin text-xs text-red-500'>This field is required</span>}
                </div>

                <div className="form-control mt-6">
                    <button className="btn btn-primary w-32">Submit</button>

                </div>
            </form>
        </div>
    );
};

export default AddProducts;