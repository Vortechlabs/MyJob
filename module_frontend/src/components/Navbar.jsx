import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import { NavLink, Link } from 'react-router-dom';
import { useAuth } from './AuthContext'; 
import { UserAvatarProfile } from './OfficerAvatarProfile';

export const Navbar = () => {
  const { isLoggedIn, setIsLoggedIn, logout, userData } = useAuth(); 
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    console.log("Logout button clicked"); 
    logout(); 
};

  return (
    <nav className='fixed w-screen bg-transparent backdrop-blur-3xl shadow z-50 flex justify-between items-center p-6'>
      <div className='flex h-7 gap-2 '>
        <img src={logo} alt="logo" />
        <h1 className='text-2xl font-medium flex items-center'>MyJob</h1>
      </div>
      <div className='hidden md:flex items-center gap-5'>
        <NavLink to="/" className={({ isActive }) => isActive ? 'hidden' : 'hidden'}></NavLink>
        <NavLink to="/home" className={({ isActive }) => isActive ? 'text-indigo-600' : 'text-black dark:text-white hover:text-indigo-600'}>Home</NavLink>
        <NavLink to="/Jobs" className={({ isActive }) => isActive ? 'text-indigo-600' : 'text-black dark:text-white hover:text-indigo-600'}>Find a job</NavLink>
        <NavLink to="/Reqruiters" className={({ isActive }) => isActive ? 'text-indigo-600' : 'text-black dark:text-white hover:text-indigo-600'}>Reqruiters</NavLink>
        <NavLink to="/Question" className={({ isActive }) => isActive ? 'text-indigo-600' : 'text-black dark:text-white hover:text-indigo-600'}>FaQ</NavLink>
        <NavLink to="/Contact" className={({ isActive }) => isActive ? 'text-indigo-600' : 'text-black dark:text-white hover:text-indigo-600'}>Contact</NavLink>
      </div>
      <div className='hidden md:flex gap-2'>
        {!isLoggedIn ? (
          <>
            <Link to={'/Login'} className='text-black dark:text-white dark:hover:text-indigo-600'>
              <button className='bg-transparent'>Login</button>
            </Link>
            <Link to={'/Register'}>
              <button className='bg-indigo-600 text-white'>Register</button>
            </Link>
          </>
        ) : (
          <>
            <span className='text-black dark:text-white flex items-center'><UserAvatarProfile /></span>
          </>
        )}
      </div>
      
      {!isLoggedIn ? (
      <div className='flex md:hidden'>
        <div> 
        <Link to={'/Login'}>
          <button className='text-black dark:text-white bg-transparent'>Login</button>
        </Link>
        </div>
        <button onClick={toggleMenu} className='text-black dark:text-white'>
          {isOpen ? '✖' : '☰'}
        </button>
      </div>
      ):(
        <div className='flex md:hidden'>
        <div><UserAvatarProfile /> </div>
        <button onClick={toggleMenu} className='text-black dark:text-white'>
          {isOpen ? '✖' : '☰'}
        </button>
      </div>
      )}
      <div className={`absolute top-20 right-0 bg-white dark:bg-[#242424] p-10 shadow-md w-full md:hidden transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}>
        <div className='flex flex-col lg:items-center'>
          <NavLink
            to="/home"
            className={({ isActive }) => 
              isActive ? 'text-indigo-600' : 'text-black dark:text-white hover:text-indigo-600'
            }
          >   
            Home
          </NavLink>
          <NavLink
            to="/Jobs"
            className={({ isActive }) => 
              isActive ? 'text-indigo-600' : 'text-black dark:text-white hover:text-indigo-600'
            }
          >
            Find a Job
          </NavLink>
          <NavLink
            to="/Reqruiters"
            className={({ isActive }) => 
              isActive ? 'text-indigo-600' : 'text-black dark:text-white hover:text-indigo-600'
            }
          >
            Reqruiters
          </NavLink>
          <NavLink
            to="/Question"
            className={({ isActive }) => 
              isActive ? 'text-indigo-600' : 'text-black dark:text-white hover:text-indigo-600'
            }
          >
            FaQ
          </NavLink>
          <NavLink
            to="/Contact"
            className={({ isActive }) => 
              isActive ? 'text-indigo-600' : 'text-black dark:text-white hover:text-indigo-600'
            }
          >
            Contact
          </NavLink>
         
        </div>
      </div>
    </nav>
  );
};