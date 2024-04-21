import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { BsSearch } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { Carousel } from 'react-responsive-carousel';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContextProvider';
import BookingModal from '../BookingModal/BookingModal';
import About from './About';
import Categories from './Categories';
import LatestAds from './LatestAds';
import MidSection from './MidSection';
const Home = () => {
    const {setLoading,setNewTitle}=useContext(AuthContext);
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
  const [locations, setLocations] = useState([]);
setNewTitle('Home-SaveYou')
setLoading(true)

  // useEffect(() => {
  //   fetch('https://ass-12-server-tau.vercel.app/products')
  //     .then(res => res.json())
  //     .then(data => {
  //       setProducts(data)
  //       setLoading(false)
  //   })
  //     .catch(err => console.error(err))
  // }, [])

  useEffect( ()=> {
    axios.get('https://ass-12-server-tau.vercel.app/ads')
    .then(data => setProducts(data.data))
  }, [])

  useEffect(() => {
    fetch('https://ass-12-server-tau.vercel.app/locations')
      .then(res => res.json())
      .then(data => {
        setLocations(data)
        setLoading(false)
    })
      .catch(err => console.error(err))
  }, [])

    const handleSearch = (e) =>{
        const value = document.getElementById('searchInput').value; 
        navigate(`/search/${value}`)
    }
    
    return (
        <div className='w-full'>
            <div className="hero w-full  min-h-[92px] md:min-h-[186px] bg-accent flex justify-center" >
                
                <div className="hero-content text-center text-neutral-content ">
                    <div className="max-w-md flex justify-center flex-col items-center">

                        
                        <p className="mb-5 flex justify-between items-center text-white bg-accent-focus pl-2 pr-2 rounded-full "><ImLocation></ImLocation> All of Bangladesh</p>
                        <div className=" flex justify-between bg-white w-80 md:w-[600px]    rounded-full ">
                            <input type="text" id='searchInput' name='searchInput' placeholder="What are you looking for?" className="p-3 rounded-full w-full outline-none text-black" />
                            <button onClick={handleSearch} className='btn btn-primary btn-circle'><BsSearch></BsSearch></button>
                        </div>
                    </div>
                </div>
            </div>
            <Categories></Categories>
            
            <LatestAds products={products}></LatestAds>
            <MidSection></MidSection>
            <div className="divider"><span className='text-2xl font-thin'>About Saveyou </span></div>
            <About></About>
           
        </div>
    );
};

export default Home;