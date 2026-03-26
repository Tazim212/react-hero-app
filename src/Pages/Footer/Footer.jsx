import React from 'react';
import logo from '../../assets/logo.png'
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-blue-950 text-base-content p-10">
                <aside>
                    <div className='flex gap-2 items-center ml-10'>
                        <img src={logo} className='w-10 h-10' alt="" />
                        <h2 className='font-bold text-purple-600 text-2xl'>Hero.IO</h2>
                    </div>

                </aside>

                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <div className="grid grid-flow-col gap-4">
                        <span><FaFacebook className='w-5 h-5'></FaFacebook></span>
                        <span><FaTwitter className='w-5 h-5'></FaTwitter></span>
                        <span><FaYoutube className='w-5 h-5'></FaYoutube></span>
                    </div>
                </nav>

            </footer>
            <footer className='text-center text-white bg-blue-950 pb-5'>
                <p>Copyright © 2025 - All right reserved</p>
            </footer>
        </div>

    );
};

export default Footer;