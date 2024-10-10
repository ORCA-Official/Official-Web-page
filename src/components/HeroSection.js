import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import videoUrl from "../assets/video/bg.mp4";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
    useEffect(() => {
        const tl = gsap.timeline();

        gsap.set(".O", { x: 0, opacity: 0 }); // Center position
        gsap.set(".A", { x: 0, opacity: 0 }); // Center position

        const smallScreen = window.innerWidth < 768;
        const mediumScreen = window.innerWidth >= 768 && window.innerWidth < 1920;
        const largeScreen = window.innerWidth >= 1920;

        let moveDistance;

        if (smallScreen) {
            moveDistance = 100;
        } else if (mediumScreen) {
            moveDistance = 350;
        } else if (largeScreen) {
            moveDistance = 250;
        }

        // First animation for letters
        tl.to(".O", { x: -moveDistance, opacity: 1, duration: 2 });
        tl.to(".A", { x: moveDistance, opacity: 1, duration: 2 }, "-=2");

        tl.fromTo(".R",
            { x: 0, scale: 0, opacity: 0 },
            { x: -moveDistance / 2.5, scale: 1, opacity: 1, duration: 4 }, "-=2"
        );
        tl.fromTo(".C",
            { x: 0, scale: 0, opacity: 0 },
            { x: moveDistance / 2.5, scale: 1, opacity: 1, duration: 4}, "-=2"
        );


    }, []);

    return (
        <>
            <div   className="relative h-screen w-full bg-black">
                <div className="absolute inset-0">
                    {/* <img
                        src={images}
                        alt="Background Image"
                        className="w-full h-full object-cover opacity-50".
                    />*/}
                    <video
                        src={videoUrl}
                        title="Video"
                        className="w-full object-cover h-full"
                        autoPlay
                        loop
                        muted
                    ></video>
                </div>

                <div
                    className="relative flex flex-col items-center justify-center h-full text-center text-white space-y-4">
                    <h1 className="flex justify-center text-4xl sm:text-6xl md:text-8xl font-bold">
                        <span className="letter O">O</span>
                        <span className="letter R">R</span>
                        <span className="letter C">C</span>
                        <span className="letter A">A</span>
                    </h1>

                    <p className="text-lg md:text-xl lg:text-2xl">
                        Building Digital Solutions for the Future.
                    </p>

                    <div className="flex space-x-4">
                        <button className="px-6 py-2 bg-white text-black rounded-md shadow-md hover:bg-gray-200">
                            Start Your Project
                        </button>
                        <button
                            className="px-6 py-2 border border-white text-white rounded-md hover:bg-white hover:text-black transition">
                            Explore Our Services
                            <span className="ml-2">→</span>
                        </button>
                    </div>
                </div>
            </div>

        </>
    );
};

export default HeroSection;
