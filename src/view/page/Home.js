import React, {useEffect} from 'react';
import images from "../../images/image.png"
import Service from "./Service";
import { gsap } from 'gsap';

const Home = () => {
    /*useEffect(() => {
        gsap.set('.letter', { opacity: 0 });

        // Show 'O' and 'A' first
        gsap.to('.O, .A', {
            opacity: 1,
            duration: 10,
            ease: 'power2.out',
            stagger: 0.2,
        });

        // Show 'R' and 'C' after 'O' and 'A' appear
        gsap.to('.R, .C', {
            opacity: 1,
            duration: 10,
            ease: 'power2.out',
            stagger: 0.2,
            delay: 1.5,
        });
    }, []);*/
    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo(".O",
            { x: -200, opacity: 0 },
            { x: 0, opacity: 1, duration: 2 }
        );
        tl.fromTo(".A",
            { x: 200, opacity: 0 },
            { x: 0, opacity: 1, duration: 2 }, "-=1"
        );

        tl.fromTo(".R",
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 5, ease: "bounce.out" }, "+=0.5"
        );
        tl.fromTo(".C",
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 5, ease: "bounce.out" }, "-=0.8"
        );
    }, []);
    return (
        <>
            <div className="relative h-screen w-full bg-black">
                <div className="absolute inset-0">
                    <img
                        src={images}
                        alt="Background Image"
                        className="w-full h-full object-cover opacity-50"
                    />
                </div>

                <div className="relative flex flex-col items-center justify-center h-full text-center text-white space-y-4">
                    <h1 className="flex justify-center text-4xl sm:text-6xl md:text-8xl font-bold space-x-2 sm:space-x-4 md:space-x-8 lg:space-x-80">
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

            <div
                className="container mx-auto px-4 sm:px-8 lg:px-16 py-12 flex flex-col lg:flex-row items-start justify-between space-y-8 lg:space-y-0">
                {/* Left Section - Number and Text */}
                <div className="lg:w-1/2 space-y-4">
                    <h1 className="text-6xl font-bold text-gray-300">/1.</h1>
                    <p className="text-md md:text-lg text-gray-700">
                        At Orca Tech Solutions, we specialize in creating innovative software solutions tailored to meet
                        the unique needs of businesses. With a focus on excellence, collaboration, and cutting-edge
                        technology, we help companies streamline operations, improve efficiency, and stay ahead in the
                        digital age.
                    </p>
                </div>

                {/* Right Section - ABOUT US with Image */}
                <div className="lg:w-1/3 flex flex-col space-y-4 items-end">
                    <h2 className="text-3xl font-bold text-right pt-2 mb-4">ABOUT US</h2>
                    <img
                        src={images}
                        alt="About Us"
                        className="w-full h-auto object-cover rounded-lg shadow-md ring-gray-200"
                    />
                </div>
            </div>

            <Service />
        </>


    )
        ;
};

export default Home;
