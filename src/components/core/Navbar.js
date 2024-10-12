import React, { useState } from 'react';
import '../../assets/css/NavBar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white shadow-sm navBar">
            <div className="flex items-center justify-between px-8 py-2">
                <div className="text-2xl font-bold text-black">
                    ORCA
                </div>
                <ul className="hidden md:flex space-x-6 text-md text-black font-montserrat">
                    <li className="hover:text-black cursor-pointer">Home</li>
                    <li className="hover:text-black cursor-pointer">About Us</li>
                    <li className="hover:text-black cursor-pointer">Projects</li>
                    <li className="hover:text-black cursor-pointer">Career</li>
                    <li className="hover:text-black cursor-pointer">Contacts</li>
                </ul>
                <button className="hidden md:block px-4 py-2 text-sm font-semibold text-white bg-black rounded-full hover:bg-gray-800">
                    Contact Us
                </button>
                <div className="flex md:hidden">
                    <button id="hamburger" onClick={toggleMenu}>
                        <img className={`toggle ${isOpen ? 'hidden' : 'block'}`} src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png" width="48" height="48" alt="Menu" />
                        <img className={`toggle ${isOpen ? 'block' : 'hidden'}`} src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png" width="48" height="48" alt="Close" />
                    </button>
                </div>
            </div>
            {/* Mobile menu */}
            <ul className={`md:hidden flex flex-col items-center space-y-4 text-black font-montserrat ${isOpen ? 'block' : 'hidden'}`}>
                <li className="hover:text-black cursor-pointer">Home</li>
                <li className="hover:text-black cursor-pointer">About Us</li>
                <li className="hover:text-black cursor-pointer">Projects</li>
                <li className="hover:text-black cursor-pointer">Career</li>
                <li className="hover:text-black cursor-pointer">Contacts</li>
                <button className="px-4 py-2 text-sm font-semibold text-white bg-black rounded-full hover:bg-gray-800">
                    Contact Us
                </button>
            </ul>
        </nav>
    );
};

export default Navbar;
