import React, { useContext } from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
// import './Header.css'

const Header = () => {

    const {user} = useContext(AuthContext)

    const navList = <>
        <NavLink
            to='/'
            className={({ isActive }) =>
                isActive
                    ? "text-[#86b817]"
                        : "hover:border-b-2 border-[#86b817] transition-transform tracking-wide"
            }
        >
            <span className='text-xl md:px-3  font-semibold'>Home</span>
        </NavLink>
        <NavLink
            to='/about'
            className={({ isActive }) =>
                isActive
                    ? "text-[#86b817]"
                        : "hover:border-b-2 border-[#86b817] transition-transform "
            }
        >
            <span className='text-xl md:px-3  font-semibold'>About</span>
        </NavLink>
        <NavLink
            to='/service'
            className={({ isActive }) =>
                isActive
                    ? "text-[#86b817] "
                        : "hover:border-b-2 border-[#86b817] transition-transform "
            }
        >
            <span className='text-xl md:px-3  font-semibold'>Services</span>
        </NavLink>
        <NavLink
            to='/package'
            className={({ isActive }) =>
                isActive
                    ? "text-[#86b817]"
                        : "hover:border-b-2 border-[#86b817] transition-transform "
            }
        >
            <span className='text-xl md:px-3  font-semibold'>Packages</span>
        </NavLink>
        <NavLink
            to='/contact'
            className={({ isActive }) =>
                isActive
                    ? "text-[#86b817]  "
                        : "hover:border-b-2 border-[#86b817] transition-transform "
            }
        >
            <span className='text-xl md:px-3  font-semibold'>Contact Us</span>
        </NavLink>
        {
            user ? 
            <NavLink
            to='/dashboard'
            className={({ isActive }) =>
                isActive
                    ? "text-[#86b817]"
                        : "hover:border-b-2 border-[#86b817] transition-transform "
            }
        >
            <span className='text-xl md:px-3  font-semibold'>Dashboard</span>
        </NavLink>
            : 
            <NavLink
            to='/login'
            className={({ isActive }) =>
                isActive
                    ? "text-[#86b817]"
                        : "hover:border-b-2 border-[#86b817] transition-transform "
            }
        >
            <span className='text-xl md:px-3  font-semibold'>Register</span>
        </NavLink>
        }
    </>

    return (
        <div className='sticky text-white z-20 top-0 left-0 w-full'>
            <div className=" md:bg-black md:opacity-50 navbar ">
                <div className="md:px-5 navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-500 rounded-box w-52">
                            {navList}
                        </ul>
                    </div>
                    <Link to='/' className="flex justify-center items-center text-[#86b817] hover:border-2 normal-case text-3xl"><FaLocationDot /> Tourist</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal">
                        {navList}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;