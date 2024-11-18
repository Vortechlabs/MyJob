import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import { NavLink, Link } from 'react-router-dom';
import DropdownFJ from './JobDropDown';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State untuk kontrol menu hamburger

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='fixed top-0 left-0 right-0  xl:px-80 bg-transparent backdrop-blur-3xl shadow z-50 flex justify-between items-center p-6'>
      <div className='flex h-7 gap-2'>
        <img src={logo} alt="logo" />
        <h1 className='text-2xl font-medium flex items-center'>MyJob</h1>
      </div>
      <div className='hidden md:flex items-center gap-5'>
        <NavLink
          to="/"
          className={({ isActive }) => 
            isActive ? 'text-indigo-600' : 'text-black dark:text-white hover:text-indigo-600'
          }
        >
          Home
        </NavLink>
        <DropdownFJ />
        <NavLink
          to="/Reqruiters"
          className={({ isActive }) => 
            isActive ? 'text-indigo-600' : 'text-black dark:text-white hover:text-indigo-600'
          }
        >
          Reqruiters
        </NavLink>
        <NavLink
          to="/About"
          className={({ isActive }) => 
            isActive ? 'text-indigo-600' : 'text-black dark:text-white hover:text-indigo-600'
          }
        >
          About
        </NavLink>
        <NavLink
          to="/Contact"
          className={({ isActive }) => 
            isActive ? 'text-indigo-600' : 'text-black dark:text-white hover:text-indigo-600 '
          }
        >
          Contact
        </NavLink>
      </div>
      <div className='flex gap-2'>
        <Link to={'/Login'} className='text-white hover:text-white'><button className='bg-transparent'>Login</button></Link>
        <Link to={'Register'}><button className='bg-indigo-600 text-white'>Register</button></Link>
      </div>
      <div className='flex md:hidden'>
        <button onClick={toggleMenu} className='text-black dark:text-white'>
          {isOpen ? '✖' : '☰'}
        </button>
      </div>
      <div className={`absolute top-16 right-0 bg-white dark:bg-[#242424] p-10 shadow-md w-full md:hidden transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}>
        <div className='flex flex-col lg:items-center'>
          <NavLink
            to="/"
            className={({ isActive }) => 
              isActive ? 'text-indigo-600' : ' text-black dark:text-white hover:text-indigo-600 '
            }
          >
            Home
          </NavLink>
          <DropdownFJ />
          <NavLink
            to="/Reqruiters"
            className={({ isActive }) => 
              isActive ? 'text-indigo-600' : 'text-black dark:text-white hover:text-indigo-600'
            }
          >
            Reqruiters
          </NavLink>
          <NavLink
            to="/About"
            className={({ isActive }) => 
              isActive ? 'text-indigo-600' : 'text-black dark:text-white hover:text-indigo-600'
            }
          >
            About
          </NavLink>
          <NavLink
            to="/Contact"
            className={({ isActive }) => 
              isActive ? 'text-indigo-600' : 'text-black dark:text-white hover:text-indigo-600'
            }
          >
            Contact
          </NavLink>
          
      <div className='flex gap-2'>
        <a  href="/Login"> <button className=' text-white bg-transparent'>Login</button></a>
        <button className='bg-indigo-600 text-white'>Register</button>
      </div>
        </div>
      </div>
    </nav>
  );
};