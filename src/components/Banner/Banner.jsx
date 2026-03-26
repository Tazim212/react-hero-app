import React from 'react';
import hero from '../../assets/hero.png'
import { Link } from 'react-router';
import { FaGooglePay } from 'react-icons/fa6';
import { FaAppStore, FaGooglePlay } from 'react-icons/fa';
const Banner = () => {
    return (
        <div className='mx-auto my-5 w-full'>
            <h1 className='text-3xl text-center font-bold'>We Build<br></br> <span className='text-purple-600'>Productive</span> Apps</h1>
            <p className='text-balance text-center py-3'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more
                exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

            <div className='text-center my-4'>
                <Link to='https://play.google.com/store/games?hl=en'><button className='btn bg-white text-black mr-7 rounded-md hover:bg-blue-900 hover:text-white'><FaGooglePlay className='text-green-400'></FaGooglePlay> Google Play</button></Link>
                <Link to='https://www.apple.com/app-store/'><button className='btn bg-white text-black rounded-md hover:bg-blue-900 hover:text-white'><FaAppStore className='text-sky-400'></FaAppStore> App Store</button></Link>
            </div>

            <img src={hero} className='w-2/3 md:w-[650px] h-fit md:h-[350px] mx-auto' alt="" />

            <div className='-mt-1 relative bg-linear-to-r from-cyan-700 to-fuchsia-600 text-amber-50 py-10'>
                <h1 className='text-3xl text-center font-bold'>Trusted by Millions, Built for You</h1>

                <div className='flex justify-center items-center md:gap-10 pl-3 md:pl-0 py-8'>
                    <div>
                        <h3>Total Downloads</h3>
                        <p className='text-4xl font-bold'>110k</p>
                        <p className='text-sm pt-2 pr-4 md:pr-0'>21% more than last month</p>
                    </div>
                    <div>
                        <h3>Total Reviews</h3>
                        <p className='text-4xl font-bold'>906K</p>
                        <p className='text-sm pt-2 pr-4 md:pr-0'>46% more than last month</p>
                    </div>
                    <div>
                        <h3>Active Apps</h3>
                        <p className='text-4xl font-bold'>132+</p>
                        <p className='text-sm pt-2'>31 more will Launch</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;