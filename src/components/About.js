import React from 'react';
import images from "../assets/images/image.png";


const About = () => {

    return (
        <>
            <div className="container mx-auto px-8 lg:px-16 py-12">
                <div   className="container mx-auto px-4 sm:px-8 lg:px-16 py-12 flex flex-col lg:flex-row items-start justify-between space-y-8 lg:space-y-0"> {/* Start with opacity 0 */}
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
                </div>
        </>
    );

}

export default About;
