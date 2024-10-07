import React from 'react';
import images from "../../images/image.png"
import Service from "./Service";

const Home = () => {
    return (
        <>
            <div className="container relative h-screen w-full bg-black">
                <div className="absolute inset-0">
                    <img
                        src={images}
                        alt="Background Image"
                        className="w-full h-full object-cover opacity-50"
                    />
                </div>

                <div className="relative flex flex-col items-center justify-center h-full text-center text-white space-y-4">
                    <h1 className="text-8xl font-bold space-x-80 space-y-24">
                        <span>O</span>
                        <span>R</span>
                        <span>C</span>
                        <span>A</span>
                    </h1>

                    <p className="text-lg">Building Digital Solutions for the Future.</p>

                    <div className="flex space-x-4">
                        <button className="px-6 py-2 bg-white text-black rounded-md shadow-md hover:bg-gray-200">
                            Start Your Project
                        </button>
                        <button className="px-6 py-2 border border-white text-white rounded-md hover:bg-white hover:text-black transition">
                            Explore Our Services
                            <span className="ml-2">→</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-8 lg:px-16 py-12 flex flex-col lg:flex-row items-start justify-between space-y-8 lg:space-y-0">
                {/* Left Section - Number and Text */}
                <div className="lg:w-1/2 space-y-4">
                    <h1 className="text-6xl font-bold text-gray-300">/1.</h1>
                    <p className="text-md text-gray-700 pl-10">
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

           <Service/>
        </>


    )
        ;
};

export default Home;
