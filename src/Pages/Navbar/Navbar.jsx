import { Link, NavLink } from 'react-router';
import logo from '../../assets/logo.png'
import { FaBars, FaGithub } from 'react-icons/fa';
import '../../index.css'

const Navbar = () => {

    return (
        <div className="navbar bg-gray-300 shadow-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <span tabIndex={0} className='btn btn-outline btn-accent lg:hidden text-md'><FaBars></FaBars></span>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-sky-800 text-white rounded-box z-1 mt-3 w-52 p-2 font-semibold">
                        <NavLink to='/' className={({ isActive }) =>
                            isActive ? "active" : ""
                        }>Home</NavLink>
                        <NavLink to='/apps' className={({ isActive }) =>
                            isActive ? "active" : ""
                        }>Apps</NavLink>
                        <NavLink to='/installation' className={({ isActive }) =>
                            isActive ? "active" : ""
                        }>Installation</NavLink>
                    </ul>
                </div>
                <Link to='/' className='flex gap-2 items-center ml-3 md:ml-10'>
                    <img src={logo} className='w-10 h-10' alt="" />
                    <h2 className='font-bold text-purple-600'>Hero.IO</h2>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-3 font-semibold text-black">
                    <NavLink to='/' className={({ isActive }) =>
                        isActive ? "active" : ""
                    }>Home</NavLink>
                    <NavLink to='/apps' className={({ isActive }) =>
                        isActive ? "active" : ""
                    }>Apps</NavLink>
                    <NavLink to='/installation' className={({ isActive }) =>
                        isActive ? "active" : ""
                    }>Installation</NavLink>
                </ul>
            </div>
            <div className="navbar-end mr-0 md:mr-10">
                <Link to='https://github.com/Tazim212' className='btn btn-primary rounded-xl'><span><FaGithub></FaGithub></span>Contribute</Link>
            </div>
        </div>
    );
};

export default Navbar;