import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import jobnav from '../assets/images/jobnav.jpeg'
import {  AutoAwesome, Category, ContentPasteSearch } from '@mui/icons-material';

const DropdownFJ = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative inline-block text-left">
            <div>
                <Link className='dark:text-white text-black hover:text-indigo-600'
                    onClick={toggleDropdown}
                >
                    Find a Job
                </Link>
            </div>

            {isOpen && (
                <div className="absolute right-0 z-10 mt-2 w-96 rounded-xl shadow-lg  bg-white dark:bg-[#242424] ring-1 ring-black ring-opacity-5">
                    <div className="flex gap-2" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        <div className='relative '>
                            <img src={jobnav} alt="" className='rounded-xl grayscale brightness-50'/>
                            <h5 className='absolute inset-0 flex text-center items-center font-bold text-white '>Find Your Future Career in MyJob <span className='h-0 pr-2'><AutoAwesome className='text-yellow-500 ' /></span></h5>
                            </div>
                        <div className='py-4 px-4 w-full'>

                        <div className='flex  gap-2 items-center'>
                        <div><ContentPasteSearch /></div>
                        <NavLink
                        to="/Jobs"
                        role="menuitem"
                        className={({ isActive }) => 
                        isActive ? 'text-blue-600' : 'text-black  dark:text-white hover:text-indigo-600'
                        }
                        >
                            Find a Job
                        </NavLink>
                        </div>

                        

                        <div className='pt-2 flex gap-2 items-center'>
                        <div><Category /></div>
                        <Link
                            to={'/AnotherRoute'}
                            className=' py-2 block dark:text-white text-gray-700 hover:bg-gray-100 dark:hover:bg-transparent hover:text-indigo-600'
                            role="menuitem"
                        >
                            Category
                        </Link>
                        </div>

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DropdownFJ;