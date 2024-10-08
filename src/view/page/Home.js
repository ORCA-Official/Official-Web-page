import React, {useEffect} from 'react';
import images from "../../images/image.png"
import Service from "./Service";
import { gsap } from 'gsap';
import videoUrl from "../../images/bg.mp4";

const Home = () => {
    //const videoUrl = 'https://drive.google.com/file/d/13XXRir_Jdlvjkc4GKfh3Zk1Lacaj-o6S/preview';
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

        gsap.set(".O", { x: 0, opacity: 0 });  // Center position
        gsap.set(".A", { x: 0, opacity: 0 });  // Center position


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
    }, []);






    return (
        <>
            <div className="relative h-screen w-full bg-black">
                <div className="absolute inset-0">
                    {/* <img
                        src={images}
                        alt="Background Image"
                        className="w-full h-full object-cover opacity-50"
                    />*/}
                    {/*<iframe
                        src="https://drive.google.com/file/d/13XXRir_Jdlvjkc4GKfh3Zk1Lacaj-o6S/preview?autoplay=1&mute=1"
                        className="w-full h-full"
                        allow="autoplay; encrypted-media"
                        frameBorder="0"
                        allowFullScreen>
                    </iframe>*/}
                    <video
                        src={videoUrl}
                        title="Video"
                        className="w-full object-cover h-full"
                        autoPlay
                        muted
                        loop
                        controls
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

            <div
                className="container mx-auto px-4 sm:px-8 lg:px-16 py-12 flex flex-col lg:flex-row items-start justify-between space-y-8 lg:space-y-0">
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


    )
        ;
};

export default Home;
