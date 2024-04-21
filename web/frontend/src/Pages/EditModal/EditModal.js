import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const EditModal = ({ seller }) => {
    const navigate = useNavigate();
    const handleSubmit = (e) =>{
        e.preventDefault()
         
        const updatedData = {
            verified: document.getElementById('verification').value,
            sellerDisable: document.getElementById('status').value,
        }
        console.log(updatedData);
        fetch(`https://ass-12-server-tau.vercel.app/updateSeller/${seller.email}`,{
            method: "POST",
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedData)
        }).then(()=>{
            toast('Updated')
            setTimeout(() => {
                navigate('/dashboard/')
            }, 1000);
        })
        .catch(err=> console.log(err))
    }
    return (
        <>
            {/* The button to open modal */}


            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative flex flex-col justify-center items-start">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{seller.name}</h3>
                    <p>Email: {seller.email}</p>
                    <p>Seller id: {seller.uid}</p>
                    <form onSubmit={handleSubmit} className="">
                        <div className="m-1">
                            <p>Seller Verification:</p>
                            <select  className='select select-bordered w-full' name="" id="verification">
                                <option value="Verified">Verified</option>
                                <option value="Not Verified">Not Verified</option>
                            </select>
                        </div>
                        <div className="m-1">
                            <p>Seller Status:</p>
                            <select className='select select-bordered w-full'  id="status">
                                <option value="false">Active</option>
                                <option value="true">Disabled</option>
                            </select>
                        </div>
                    <button  className="btn text-white btn-sm btn-secondary">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default EditModal;