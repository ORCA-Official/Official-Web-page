import React from 'react';
import './Style.css';
import carbackground from '../../images/carbackground01.png';
import {FaExternalLinkAlt, FaGithub} from 'react-icons/fa';


const Project = () => {
    const backgroundStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.90), rgba(0, 0, 0, 0.90)), url(${carbackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
    };

    return (
        <div>
            {/* Section with Number and Projects Header */}
            <div className="w-full bg-black">
                <div className="container mx-auto px-4 sm:px-8 lg:px-16 py-12 flex flex-col lg:flex-row items-start justify-between space-y-8 lg:space-y-0">
                    <div className="lg:w-1/2 space-y-4 lg:order-2">
                        <h1
                            className="text-6xl font-bold text-gray-300 text-right font-kumar">
                            /2.

                        </h1>

                    </div>

                    <div className="lg:w-1/3 flex flex-col space-y-4 items-start lg:order-1">
                        <h2 className="text-3xl font-bold text-white text-left pt-2 mb-4">PROJECTS</h2>
                    </div>
                </div>
            </div>

            {/* Background section for project details */}
            <div style={backgroundStyle} className="relative text-white">
                <div className="container mx-auto px-8 py-16">

                    {/* Project Title */}
                    <h1 className="text-4xl font-bold mb-6">CAR RENTAL SYSTEM</h1>

                    {/* Technology Stack */}
                    <div className="flex flex-wrap gap-4 mb-8">
                        {['HTML', 'CSS', 'JavaScript', 'Spring Boot', 'JWT', 'Bootstrap'].map((tech, index) => (
                            <span
                                key={index}
                                className="inline-flex items-center gap-2 border rounded-md border-white px-6 py-2">
            {tech}
        </span>
                        ))}
                    </div>



                    {/* Project Description */}
                    <p className="text-white font-medium max-w-3xl mb-8 leading-relaxed">
                        A car rental system built with HTML/CSS, JavaScript, and Bootstrap front-end for
                        responsive design. User interaction while the backend uses Spring Boot with JWT for
                        secure authentication. Allows users to easily browse cars, view details, and manage
                        bookings with admin handling car listings and bookings.
                    </p>

                    {/* Live Website Link */}
                    <div className="inline-flex items-center gap-6">
                        <a
                            href="https://github.com/your-github-repo" // Replace with your GitHub link
                            target="_blank" // Opens the link in a new tab
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-2"
                        >
                            <FaGithub size={32} /> {/* GitHub Icon Only */}
                        </a>

                        <a
                            href="#"
                            className="inline-flex items-center gap-2 text-white border-b border-white pb-1
          hover:text-gray-300 transition-all duration-300"
                        >
                            Live Website
                            <FaExternalLinkAlt className="w-4 h-4" />
                        </a>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Project;
