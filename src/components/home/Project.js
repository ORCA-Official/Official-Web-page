import React from 'react';
import carbackground from '../../assets/images/carbackground01.png'; // Background image
import { HomeTitles } from '../core/HomeTitles'; // Custom title component
import ProjectCard from '../project/ProjectCard'; // ProjectCard component

const Project = () => {
    const backgroundStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.90), rgba(0, 0, 0, 0.90)), url(${carbackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
    };

    // Example projects array
    const projects = [
        {
            title: "CAR RENTAL SYSTEM",
            stack: ["HTML", "CSS", "JavaScript", "Spring Boot", "JWT", "Bootstrap"],
            description: "A car rental system built with HTML/CSS, JavaScript, and Bootstrap front-end for responsive design. The backend uses Spring Boot with JWT for secure authentication. Allows users to easily browse cars, view details, and manage bookings with admin handling car listings and bookings.",
            githubLink: "https://github.com/your-car-rental-repo",
            liveLink: "https://car-rental-live.com",
        },
        // Add more projects if needed
    ];

    return (
        <div className={'bg-black'}>
            <HomeTitles title={'Project'} number={2} reverse={true} dark={true} />

            {/* Background section for project details */}
            <div style={backgroundStyle} className="relative text-white">
                <div className="container mx-auto px-4 sm:px-8 py-16">
                    {/* Iterate through projects */}
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Project;
