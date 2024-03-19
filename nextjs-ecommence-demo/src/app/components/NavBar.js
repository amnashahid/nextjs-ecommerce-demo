import Link from 'next/link';
import React from 'react';

const NavBar = () => {
    return (
        <div className='grid'>
            <div className="hidden sm:block">
                <div className="grid p-4 grid-cols-1 gap-4 bg-[#23856D] sm:grid-cols-3 font-semibold text-white">
                    <div className='text-left'>(333) 555 - 6666 john-joe@example.com</div>
                    <div className='text-center'>Follow us and get a chance to win 80% off</div>
                    <div className='text-right'>Follow us</div>
                </div>
            </div>

            <div className="grid p-4 grid-cols-1 bg-white sm:grid-cols-12">
                <div className='text-left font-bold text-2xl grid-cols-3'>
                    Bandage
                </div>
                <div className='grid-cols-1'>
                    <Link href='/'>Home</Link>
                </div>
                <div className='grid-cols-1'>
                    Shop
                </div>
                <div className='grid-cols-1'>
                    About
                </div>
                <div className='grid-cols-1'>
                    Blog
                </div>
                <div className='grid-cols-1'>
                    Contact
                </div>
                <div className='grid-cols-4'>
                    Login / Register
                </div>
            </div>
        </div>

    );
};

export default NavBar;