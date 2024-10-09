import React, { useEffect } from 'react';
import images from "../../assets/images/image.png";
import Service from "./Service";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
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
            { x: -moveDistance / 2.5, scale: 1, opacity: 1, duration: 4, ease: "bounce.out" }, "-=2"
        );
        tl.fromTo(".C",
            { x: 0, scale: 0, opacity: 0 },
            { x: moveDistance / 2.5, scale: 1, opacity: 1, duration: 4, ease: "bounce.out" }, "-=2"
        );

        // ScrollTrigger for fading out the first section and revealing the second section
        ScrollTrigger.create({
            trigger: "#second",
            start: "top center", // Start when the top of #second hits the center of the viewport
            end: "bottom top", // End when the bottom of #second hits the top of the viewport
            onEnter: () => {
                gsap.to("#first", { opacity: 0, duration: 1 });
                gsap.to("#second", { opacity: 1, duration: 1, delay: 0.5 }); // Delay to sync with the first fade-out
            },
            onLeaveBack: () => {
                gsap.to("#first", { opacity: 1, duration: 1 });
                gsap.to("#second", { opacity: 0, duration: 1 }); // Ensure the second section fades out
            },
            scrub: true // Enable scrubbing for a smoother effect
        });

        return () => {
            // Cleanup ScrollTrigger on component unmount
            ScrollTrigger.killAll();
        };
    }, []);

    return (
        <>
            <div id="first" className="relative h-screen w-full bg-black">
                <div className="absolute inset-0">
                    <img
                        src={images}
                        alt="Background Image"
                        className="w-full h-full object-cover opacity-50"
                    />
                </div>

                <div className="relative flex flex-col items-center justify-center h-full text-center text-white space-y-4">
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

            <div id="second" className="container mx-auto px-4 sm:px-8 lg:px-16 py-12 flex flex-col lg:flex-row items-start justify-between space-y-8 lg:space-y-0 opacity-0"> {/* Start with opacity 0 */}
                {/* Left Section - Number and Text */}
                <div className="lg:w-1/2 space-y-4">
                    <h1 className="text-6xl font-bold text-gray-300 font-kumar">/1.</h1>
                    <p className="text-md md:text-lg text-gray-700 font-poppins">
                        At Orca Tech Solutions, we specialize in creating innovative software solutions tailored to meet
                        the unique needs of businesses. With a focus on excellence, collaboration, and cutting-edge
                        technology, we help companies streamline operations, improve efficiency, and stay ahead in the
                        digital age.
                    </p>
                </div>

                {/* Right Section - ABOUT US with Image */}
                <div className="lg:w-1/3 flex flex-col space-y-4 items-end">
                    <h2 className="text-3xl font-bold text-right pt-2 mb-4 font-montserrat">ABOUT US</h2>
                    <img
                        src={images}
                        alt="About Us"
                        className="w-full h-auto object-cover rounded-lg shadow-md ring-gray-200"
                    />
                </div>
            </div>

            <Service />
        </>
    );
};

export default Home;
