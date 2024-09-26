import React from 'react';
import { kosherLogo } from '../assets';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {

    return (
        <nav className="flex justify-between h-20 bg-white items-center p-4">
            <div className='flex'>
                <img className='w-24 absolute' src={kosherLogo} alt="" />
                <div className=''>
                    <h3 className='text-2xl bg-black absolute uppercase text-white  px-6 py-2 ml-28'>Сграда 4А</h3>
                </div>
            </div>
            <div className='flex space-x-6 items-center'>
                <h3 className='text-xl'>EN</h3>
                <MenuIcon className='text-2xl' />
            </div>

        </nav>
    );
};

export default Navbar;
