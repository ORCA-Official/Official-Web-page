import React from 'react';
import images from "../../images/image.png"

const Home = () => {
    const services = [
        'Full-Stack Web Development',
        'Mobile App Development',
        'Desktop Application Development',
        'Cloud Integration & Deployment',
    ];

    const techStack = [
        // Add your tech stack items here
        'React',
        'Node.js',
        'Python',
        'Java',
        'C++',
    ];
    return (
        <>
            <div className="relative h-screen w-full bg-black">
                <div className="absolute inset-0">
                    <img
                        src={images}
                        alt="Background"
                        className="w-full h-full object-cover opacity-50"
                    />
                </div>


                <div
                    className="relative flex flex-col items-center justify-center h-screen w-full text-center text-white space-y-4">
                    <h1 className="text-8xl font-bold flex space-x-32">
                        <span className="tracking-[1.5em]">O</span>
                        <span className="tracking-[1.5em]">R</span>
                        <span className="tracking-[1.5em]">C</span>
                        <span className="tracking-[1.5em]">A</span>
                    </h1>

                    <p className="text-lg">Building Digital Solutions for the Future.</p>


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
                className="flex flex-col lg:flex-row items-start justify-between px-8 lg:px-16 py-12 space-y-8 lg:space-y-0">

                {/* Left Section - Number and Text */}
                <div className="lg:w-1/2 flex flex-col justify-start space-y-4">
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
                    <h2 className="text-3xl font-bold text-right mb-4">ABOUT US</h2>
                    <img
                        src={images}
                        alt="About Us"
                        className="w-full h-auto object-cover rounded-lg shadow-md pr-10 ring-gray-200"
                    />
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <h2 className="text-3xl font-bold text-left pl-10 mb-4">OUR SERVICES</h2>
                <ul className="grid grid-cols-2 gap-4">
                    {services.map((service, index) => (
                        <li key={index} className="flex items-center">
                            <span className="text-xl mr-4">0{index + 1}.</span>

                            <p className="text-lg">{service}</p>
                        </li>
                    ))}
                </ul>

                <h2 className="text-3xl font-bold text-center mt-16 mb-8">OUR TECH STACK</h2>
                <div className="flex justify-center">
                    <div className="flex space-x-4">
                        {techStack.map((tech, index) => (
                            <div key={index} className="w-16 h-16 bg-pink-300 rounded-full"></div>
                        ))}
                    </div>
                </div>
            </div>


        </>

    )
        ;
};

export default Home;
