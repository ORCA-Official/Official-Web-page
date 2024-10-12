import React from 'react';
import '../assets/css/NavBar.css'

const Navbar = () => {
    return (
        <nav className="flex items-center  justify-between px-8 py-2 bg-white shadow-sm navBar">
            <div className="text-2xl font-bold text-black">
                ORCA
            </div>
            <ul className="flex space-x-6 text-md  text-black font-montserrat">
                <li className="hover:text-black cursor-pointer">Home</li>
                <li className="hover:text-black cursor-pointer">About Us</li>
                <li className="hover:text-black cursor-pointer">Projects</li>
                <li className="hover:text-black cursor-pointer">Career</li>
                <li className="hover:text-black cursor-pointer">Contacts</li>
            </ul>
            <button className="px-4 py-2 text-sm font-semibold text-white bg-black rounded-full hover:bg-gray-800">
                Contact Us
            </button>
        </nav>
    );
};

export default Navbar;
