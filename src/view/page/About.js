import React from 'react';
import images from "../../images/aboutBG.png";
const About = () => {
    return(
        <>
        {/*<div className="relative h-screen w-full bg-black">
            <div className="absolute inset-0">
                <img
                    src={images}
                    alt="Background Image"
                    className="w-full h-full object-cover opacity-100"
                />

                <div className="relative flex flex-col items-center justify-center h-full text-center text-gray-800 space-y-4">
                    <h1 className="text-9xl font-extrabold opacity-20">
                        WHO WE ARE
                    </h1>
                </div>

                <div className="relative flex flex-col items-center justify-center h-full text-center text-gray-800 space-y-4">
                    <h2 className="text-4xl font-extrabold">
                        About us
                    </h2>
                </div>

            </div>
        </div>*/}

            <div className="min-h-screen flex flex-col items-center justify-center relative">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src={images}
                        alt="Background Image"
                        className="w-full h-full object-cover opacity-100"
                    />
                </div>

                {/* Content */}
                <div className="relative z-6 flex flex-col items-center justify-center h-full text-center text-white space-y-4">
                    <h1 className="text-9xl font-extrabold opacity-15">
                        WHO WE ARE
                    </h1>
                </div>

                <div className="absolute flex flex-col items-center justify-center h-full text-center text-white space-y-4">
                    <h2 className="text-4xl font-extrabold">
                        ABOUT US
                    </h2>
                </div>
            </div>

            <div>
                <div className="min-h-screen flex flex-col items-center justify-center relative bg-white">
                    {/* Content */}
                    <div className="relative z-6 flex flex-col items-center justify-center h-full text-center text-gray-600 space-y-4">
                        <h1 className="text-9xl font-extrabold opacity-15">
                            WHAT WE DO
                        </h1>
                    </div>

                    <div className="absolute flex flex-col items-center justify-center h-full text-center text-black space-y-4">
                        <h2 className="text-4xl font-extrabold">
                            OUR SERVICES
                        </h2>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About;