import React, {useEffect, useState} from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import videoUrl from "../../assets/video/bg.mp4";
import logo from '../../assets/images/oa.png'
import '../../assets/css/hero-styles.css'
import {motion} from 'framer-motion';
import {BsArrowUpRight} from "react-icons/bs";

gsap.registerPlugin(ScrollTrigger);

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

    return (
        <div className={'relative'}>
            <div className="relative h-screen w-full bg-black">
                <div className="absolute inset-0">
                    <video
                        src={videoUrl}
                        title="Video"
                        className="w-full object-cover h-full opacity-25"
                        autoPlay
                        loop
                        muted
                    ></video>
                </div>

                <div
                    className="relative flex flex-col items-center h-full justify-center text-center text-white space-y-4">


                    <motion.div className={'md:text-[8vw] text-[12vw] font-light text-center flex justify-between'}
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
                    </motion.p>

                    <div className={'flex h-max justify-end'}>
                        <button className={'md:text-lg text-xs mr-6 md:px-6 md:py-2 px-2 py-1 border border-white text-white md:rounded-md rounded-sm'}>
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
                                className="mr-6 px-6 py-2 border border-white text-white rounded-md">
                                Start Your Project
                            </button>
                            <button
                                className={'w-max flex items-center gap-x-2 py-2 border-b border-b-white text-white'}>
                                <span>Explore Our Services</span>
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
