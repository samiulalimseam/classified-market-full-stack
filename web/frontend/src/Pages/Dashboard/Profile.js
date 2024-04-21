import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContextProvider';

const Profile = () => {
    const {accData,user} = useContext(AuthContext);
    return (
        <div className='flex flex-col border p-3 rounded-md bg-slate-50'>
            <div className="pinfo flex flex-col md:flex-row w-full">
                <p className="font-bold">Account type: <span className='font-light mx-2'>
                    {accData?.acType}
                    </span> </p>
                <p className="font-bold">
                    Email:
                    <span className="font-light mx-2">
                    {accData?.email}
                        </span> 
                    </p>
                <p className="font-bold">Verification: <span className='font-light mx-2'>
                    {accData?.verified}
                    </span> </p>
                <p className="font-bold">
                    Phone:
                    <span className="font-light mx-2">
                    {accData?.phone}
                        </span> 
                    </p>
            </div>
        </div>
    );
};

export default Profile;