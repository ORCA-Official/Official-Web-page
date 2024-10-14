// ** React Imports
import React, { useState } from 'react';

// ** Styles Imports
import '../../assets/css/NavBar.css';

// ** Assets Imports
import oa_dark from '../../assets/images/oa_dark.png'

// ** Icon Imports
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

// ** Frame Motion Imports
import {motion} from 'framer-motion';
import {Link} from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <motion.nav
            initial={{width: '0'}}
            animate={{width: '100%'}}
            transition={{duration: 0.5, delay: 1}}
            className="bg-white shadow-sm navBar h-max overflow-hidden">
            <div className="flex items-center justify-between px-8 py-2">
                <div className="text-2xl font-bold text-black">
                    {/*ORCA*/}
                    <img src={oa_dark} className={'w-10'} alt=""/>
                </div>

                <motion.div
                    initial={{display: 'none'}}
                    animate={{display: 'block'}}
                    transition={{duration: 3, delay: 1.5}}
                >
                    <ul className="hidden md:flex space-x-6 text-md text-black font-montserrat">
                        <li className="hover:text-black cursor-pointer"><Link to="/">Home</Link></li>
                        <li className="hover:text-black cursor-pointer"><Link to="/about">About Us</Link></li>
                        <li className="hover:text-black cursor-pointer"><Link to="/project">Projects</Link></li>
                        {/*<li className="hover:text-black cursor-pointer">Career</li>*/}
                        <li className="hover:text-black cursor-pointer"><Link to="/contact">Contacts</Link></li>
                    </ul>
                </motion.div>
                <motion.div
                    initial={{display: 'none'}}
                    animate={{display: 'block'}}
                    transition={{duration: 3, delay: 1.5}}
                >
                    <button
                        className="hidden md:block px-4 py-2 text-sm font-semibold text-white bg-black rounded-md hover:bg-gray-800"
                        onClick={() => {
                            const subjectPart = "Inquiry";
                            const autoSetPart = "Some additional info";
                            const email = 'orcaofficialse@gmail.com';
                            window.location.href = `mailto:${email}?subject=${encodeURIComponent(subjectPart + " - " + autoSetPart)}`;
                        }}
                     >
                        Email Us
                    </button>
                </motion.div>
                <div className="flex md:hidden">
                    <button id="hamburger" onClick={toggleMenu}>
                        <CiMenuBurger size={22} className={`toggle ${isOpen ? 'hidden' : 'block'}`}/>
                        <IoMdClose size={22} className={`toggle ${isOpen ? 'block' : 'hidden'}`}/>
                    </button>
                </div>
            </div>
            {/* Mobile menu */}
            <ul className={`md:hidden flex flex-col items-center space-y-4 text-black font-montserrat ${isOpen ? 'block' : 'hidden'} pb-4`}>
                <li className="hover:text-black cursor-pointer"><Link to="/">Home</Link></li>
                <li className="hover:text-black cursor-pointer"><Link to="/about">About Us</Link></li>
                <li className="hover:text-black cursor-pointer"><Link to="/project">Projects</Link></li>
                {/*<li className="hover:text-black cursor-pointer">Career</li>*/}
                <li className="hover:text-black cursor-pointer"><Link to="/contact">Contacts</Link></li>
                <button
                    onClick={() => {
                        const subjectPart = "Inquiry";
                        const autoSetPart = "Some additional info";
                        const email = 'orcaofficialse@gmail.com';
                        window.location.href = `mailto:${email}?subject=${encodeURIComponent(subjectPart + " - " + autoSetPart)}`;
                    }}
                    className="px-4 py-2 text-sm font-semibold text-white bg-black rounded-md hover:bg-gray-800">
                    Email Us
                </button>
            </ul>
        </motion.nav>
    );
};

export default Navbar;
