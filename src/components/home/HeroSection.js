// ** React Imports
import React, {useEffect, useState} from 'react';

// ** GSAP Imports
//import {gsap} from 'gsap';
//import {ScrollTrigger} from 'gsap/ScrollTrigger';

// ** Assets Imports
import images from "../../assets/images/background.png";
import logo from '../../assets/images/FORTESEI.png'
import '../../assets/css/hero-styles.css'

// ** Frame Motion Imports
import {motion} from 'framer-motion';

// ** React Icons Import
import {BsArrowUpRight} from "react-icons/bs";
import {Link} from "react-router-dom";

const HeroSection = () => {

    const [paddingCount, setPaddingCount] = useState('12rem');

    useEffect(() => {

        if (window.innerWidth < 640) { // Small (sm)
            setPaddingCount('2rem')
        } else if (window.innerWidth >= 640 && window.innerWidth < 768) {
            setPaddingCount('4rem')
        } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
            setPaddingCount('6rem')
        } else if (window.innerWidth >= 1024) {
            setPaddingCount('10rem')
        }
    }, []);

    const startingLetterVariant = {
        hidden: { opacity: 0, scale: 0.5, rotate: -20 },
        visible: { opacity: 1, scale: 1, rotate: 0 }
    };

    const remainingLettersVariant = {
        hidden: { opacity: 0, x: -15 },
        visible: { opacity: 1, x: 0 }
    };
    return (
        <div className={'relative'}>
            <div className="relative h-screen w-full bg-black">
                <div className="absolute inset-0">
                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                    <img
                        src={images}
                        alt="Background Image"
                        className="w-full h-full object-cover opacity-50"
                    />
                    {/*<video
                        src={videoUrl}
                        title="Video"
                        className="w-full object-cover h-full opacity-25"
                        autoPlay
                        loop
                        muted
                    ></video>*/}
                </div>

                <div
                    className="relative flex flex-col items-center h-full justify-center text-center text-white space-y-4">


                    {/* <motion.div className={'md:text-[8vw] text-[12vw] font-light text-center flex justify-between'}
                                initial={{width: 'max-content'}}
                                animate={{width: '100vw', paddingInline: paddingCount}}
                                transition={{duration: 0.5, delay: 1}}
                    >
                        <motion.div
                            initial={{x: 0}}
                            animate={{x: 0}}
                            transition={{duration: 1}}
                        >
                            O
                        </motion.div>
                        <motion.div
                            initial={{display: 'none'}}
                            animate={{display: 'block'}}
                            transition={{duration: 1.2, delay: 1.1}}
                        >
                            R
                        </motion.div>
                        <motion.div
                            initial={{display: 'none'}}
                            animate={{display: 'block'}}
                            transition={{duration: 1.2, delay: 1.1}}
                        >
                            C
                        </motion.div>
                        <motion.div
                            initial={{x: 0}}
                            animate={{x: 0}}
                            transition={{duration: 1}}
                        >
                            A
                        </motion.div>

                    </motion.div>

                    <motion.p className={'font-montserrat lg:text-xl md:text-lg text-xs font-extralight'}
                              initial={{opacity: 0}}
                              animate={{opacity: 1}}
                              transition={{duration: 1, delay:1.3}}
                    >
                        Building Digital Solutions for the Future.
                    </motion.p>*/}
                    {/*RELIABILITY STRENGTH Add*/}
                    <div>
                        {/*<div className="flex flex-col" style={{ padding: paddingCount }}>
                            <div className="text-white text-[8vw] md:text-[8vw] font-light absolute ">
                                RELIABILITY
                            </div>
                            <div className="text-white text-[8vw] md:text-[8vw] ml-[28vw] font-light mt-[20vw] md:mt-[8vw]">
                                STRENGTH
                            </div>
                            <div className="text-gray-300 text-sm md:text-base font-light mt-4">
                                BUILDING DIGITAL SOLUTIONS FOR THE FUTURE
                            </div>
                        </div>*/}
                        <div className="flex flex-col" style={{padding: paddingCount}}>
                            {/* "R" and "ELIABILITY" */}
                            <div className="text-white text-[8vw] md:text-[8vw] font-light absolute">
                                <motion.span
                                    initial="hidden"
                                    animate="visible"
                                    transition={{delay: 0.2, duration: 0.6, ease: "easeOut"}}
                                    variants={startingLetterVariant}
                                >
                                    R
                                </motion.span>
                                <motion.span
                                    initial="hidden"
                                    animate="visible"
                                    transition={{delay: 0.8, duration: 0.8, ease: "easeInOut"}}
                                    variants={remainingLettersVariant}
                                >
                                    ELIABILITY
                                </motion.span>
                            </div>

                            {/* "S" and "TRENGTH" */}
                            <div
                                className="text-white text-[8vw] md:text-[8vw] ml-[28vw] font-light mt-[20vw] md:mt-[8vw]">
                                <motion.span
                                    initial="hidden"
                                    animate="visible"
                                    transition={{delay: 0.2, duration: 0.6, ease: "easeOut"}}
                                    variants={startingLetterVariant}
                                >
                                    S
                                </motion.span>
                                <motion.span
                                    initial="hidden"
                                    animate="visible"
                                    transition={{delay: 0.8, duration: 0.8, ease: "easeInOut"}}
                                    variants={remainingLettersVariant}
                                >
                                    TRENGTH
                                </motion.span>
                            </div>

                            {/* Tagline */}
                            <motion.div
                                className="text-gray-300 text-sm md:text-base font-light mt-4"
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{delay: 1.5, duration: 1}}
                            >
                                BUILDING DIGITAL SOLUTIONS FOR THE FUTURE
                            </motion.div>
                        </div>
                        {/*<p className={'font-montserrat lg:text-xl md:text-lg text-xs font-extralight'}>
                            Building Digital Solutions for the Future.
                        </p>*/}
                    </div>


                    <div className={'md:hidden flex h-max justify-end'}>
                        <button
                            className={'md:text-lg text-xs mr-6 md:px-6 md:py-2 px-2 py-1 border border-white text-white md:rounded-md rounded-sm'}>
                            Start Your Project
                        </button>
                        <button
                            className={'md:text-lg text-xs w-max flex items-center md:gap-x-2 md:py-2 py-1 border-b border-b-white text-white'}>
                            <span>Explore Our Services</span>
                            <BsArrowUpRight size={14}/>
                        </button>
                    </div>
                </div>

                <div className={'md:block hidden absolute bottom-0 w-full'}>
                    <div className={'w-full flex justify-between px-10 pb-4'}>
                        <div className={''}>
                            <img src={logo} alt="logo" className={'w-16'}/>
                        </div>
                        <div className={'flex h-max justify-end'}>
                            <button
                                className="mr-6 px-6 py-2 border border-white text-white rounded-md"
                                onClick={() => {
                                    const subjectPart = "Inquiry";
                                    const autoSetPart = "Start Your Project";
                                    const email = 'orcaofficialse@gmail.com';
                                    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subjectPart + " - " + autoSetPart)}`;
                                }}
                            >
                                Start Your Project
                            </button>
                            <button
                                className={'w-max flex items-center gap-x-2 py-2 border-b border-b-white text-white'}>
                                <span><Link to="/about">Explore Our Services</Link></span>
                                <BsArrowUpRight size={14}/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HeroSection;
