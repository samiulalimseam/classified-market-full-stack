import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContextProvider';
import logo from './logo.svg'
import './style.css';

const Navbar2 = ({ children }) => {
    const navigate = useNavigate();
    const { user, logOut } = useContext(AuthContext);
    const handleSignout = () => {
        logOut()
    }
    const menuitems = <>
        <li> <Link to={`/`} >Home</Link> </li>
        {!user?.uid && <li><Link to={'/login'}>Login</Link></li>}
        {user?.uid && <li><Link to={`/`} onClick={handleSignout}>SignOut</Link></li>}
        <li> <Link to={`/dashboard`} >Dashboard</Link> </li>
        <li> <Link to={`/blogs`} >Blog</Link> </li>
        <Link to={`/`} className="btn w-36 md:btn-md btn-sm btn-primary">Post Your Ad</Link>

    </>
    return (
        <div className="drawer ">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content  ">

                <div className="w-full m-auto bg-accent scrollbar" id="style-3">
                    <div className="container navbar m-auto ">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className=" text-white inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-1 justify-center md:justify-start px-2 mx-2"><img onClick={() => navigate('/')} className='w-40 cursor-pointer relative right-6 ' src={logo} alt="" /></div>
                        <div className="text-white flex-none hidden lg:block">
                            <ul className="menu menu-horizontal">

                                {
                                    menuitems
                                }
                            </ul>
                        </div>
                    </div>
                </div>

                {children}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-base-100">

                    {
                        menuitems
                    }

                </ul>

            </div>
        </div>
    );
};

export default Navbar2;