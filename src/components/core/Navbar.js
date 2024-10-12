// ** React Imports
import React, { useState } from 'react';

// ** Styles Imports
import '../../assets/css/NavBar.css';

// ** Assets Imports
import oa_dark from '../../assets/images/oa_dark.png'

// ** Icon Imports
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white shadow-sm navBar">
            <div className="flex items-center justify-between px-8 py-2">
                <div className="text-2xl font-bold text-black">
                    {/*ORCA*/}
                    <img src={oa_dark} className={'w-10'} alt=""/>
                </div>
                <ul className="hidden md:flex space-x-6 text-md text-black font-montserrat">
                    <li className="hover:text-black cursor-pointer">Home</li>
                    <li className="hover:text-black cursor-pointer">About Us</li>
                    <li className="hover:text-black cursor-pointer">Projects</li>
                    <li className="hover:text-black cursor-pointer">Career</li>
                    <li className="hover:text-black cursor-pointer">Contacts</li>
                </ul>
                <button className="hidden md:block px-4 py-2 text-sm font-semibold text-white bg-black rounded-md hover:bg-gray-800">
                    Contact Us
                </button>
                <div className="flex md:hidden">
                    <button id="hamburger" onClick={toggleMenu}>
                        <CiMenuBurger size={22} className={`toggle ${isOpen ? 'hidden' : 'block'}`} />
                        <IoMdClose size={22} className={`toggle ${isOpen ? 'block' : 'hidden'}`} />
                    </button>
                </div>
            </div>
            {/* Mobile menu */}
            <ul className={`md:hidden flex flex-col items-center space-y-4 text-black font-montserrat ${isOpen ? 'block' : 'hidden'} pb-4`}>
                <li className="hover:text-black cursor-pointer">Home</li>
                <li className="hover:text-black cursor-pointer">About Us</li>
                <li className="hover:text-black cursor-pointer">Projects</li>
                <li className="hover:text-black cursor-pointer">Career</li>
                <li className="hover:text-black cursor-pointer">Contacts</li>
                <button className="px-4 py-2 text-sm font-semibold text-white bg-black rounded-md hover:bg-gray-800">
                    Contact Us
                </button>
            </ul>
        </nav>
    );
};

export default Navbar;
