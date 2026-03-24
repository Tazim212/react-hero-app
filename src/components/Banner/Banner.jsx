import React from 'react';
import hero from '../../assets/hero.png'
import { Link } from 'react-router';
import { FaGooglePay } from 'react-icons/fa6';
import { FaAppStore, FaGooglePlay } from 'react-icons/fa';
const Banner = () => {
    return (
        <div className='mx-auto my-5 w-[600px]'>
            <h1 className='text-3xl text-center font-bold'>We Build<br></br> <span className='text-purple-600'>Productive</span>Apps</h1>
            <p className='text-center py-3'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more 
                exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            
            <div className='text-center my-4'>
                <Link to='https://play.google.com/store/games?hl=en'><button className='btn bg-white text-black mr-7 rounded-md'><FaGooglePlay className='text-green-400'></FaGooglePlay> Google Play</button></Link>
                <Link to='https://www.apple.com/app-store/'><button className='btn bg-white text-black rounded-md'><FaAppStore className='text-sky-400'></FaAppStore> App Store</button></Link>
            </div>

            <img src={hero} alt="" />
        </div>
    );
};

export default Banner;