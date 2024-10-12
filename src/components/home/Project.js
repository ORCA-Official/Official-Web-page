import React from 'react';
import carbackground from '../../assets/images/carbackground01.png';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { HomeTitles } from '../core/HomeTitles';

const Project = () => {
    const backgroundStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.90), rgba(0, 0, 0, 0.90)), url(${carbackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
    };

    return (
        <div className={'bg-black'}>
            <HomeTitles title={'Project'} number={2} reverse={true} dark={true} />

            {/* Background section for project details */}
            <div style={backgroundStyle} className="relative text-white">
                <div className="container mx-auto px-4 sm:px-8 py-16">

                    {/* Project Title */}
                    <h1 className="text-4xl font-bold mb-6 font-montserrat tracking-[0.2em]">CAR RENTAL SYSTEM</h1>

                    {/* Technology Stack */}
                    <div className="flex flex-wrap gap-2 sm:gap-4 mb-8">
                        {['HTML', 'CSS', 'JavaScript', 'Spring Boot', 'JWT', 'Bootstrap'].map((tech, index) => (
                            <span
                                key={index}
                                className="inline-flex items-center gap-2 border rounded-md border-white px-4 sm:px-6 py-2 text-sm sm:text-base">
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Project Description */}
                    <p className="text-white font-medium max-w-xl sm:max-w-3xl mb-8 leading-relaxed text-sm sm:text-base">
                        A car rental system built with HTML/CSS, JavaScript, and Bootstrap front-end for responsive design.
                        The backend uses Spring Boot with JWT for secure authentication. Allows users to easily browse cars,
                        view details, and manage bookings with admin handling car listings and bookings.
                    </p>

                    {/* Live Website & GitHub Links */}
                    <div className="inline-flex flex-col sm:flex-row items-start sm:items-center gap-6">
                        <a
                            href="https://github.com/your-github-repo" // Replace with your GitHub link
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-2"
                        >
                            <FaGithub size={32} /> {/* GitHub Icon */}
                        </a>

                        <a
                            href="#"
                            className="inline-flex items-center gap-2 text-white border-b border-white pb-1
                                hover:text-gray-300 transition-all duration-300 text-sm sm:text-base"
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
