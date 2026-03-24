import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../../assets/logo.png'
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 font-semibold">
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/apps'>Apps</NavLink>
                        <NavLink to='/'>Installation</NavLink>
                    </ul>
                </div>
                <div className='flex gap-2 items-center ml-10'>
                    <img src={logo} className='w-10 h-10' alt="" />
                    <h2 className='font-bold text-purple-600'>Hero.IO</h2>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-3 font-semibold">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/apps'>Apps</NavLink>
                    <NavLink to='/'>Installation</NavLink>
                </ul>
            </div>
            <div className="navbar-end">
                <button className='btn btn-primary rounded-xl'><span><FaGithub></FaGithub></span>Contribute</button>
            </div>
        </div>
    );
};

export default Navbar;