import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';
import Navbar from './Header/Navbar';
import Navbar2 from './Header/Navbar2';
import Home from './Home/Home';

const Main = () => {
    return (
        <div className='duration-1000'>
            <Navbar2>

            <Outlet></Outlet>
            <Footer></Footer>
            </Navbar2>
        </div>
    );
};

export default Main;