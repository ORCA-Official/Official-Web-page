import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectCard = ({ project, index }) => {
    return (
        <div
            className={`transition-all duration-300 ease-in-out h-max w-full flex-grow-0
            ${index < 2 ? "" : ""}`} // Remove border classes here
            style={{
                backgroundImage: `url(../../assets/images/carbackground01.png)`, // Update the image URL accordingly
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '20px',
                color: 'white',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)', // Text shadow for readability
            }}
        >
            <div className={"w-full h-full"}>
                {/* Project Title */}
                <div className={`w-full flex justify-between font-Lato items-center p-2`}>
                    <div className={"text-4xl font-bold mb-6 font-montserrat tracking-[0.2em]"}>
                        <span>{project.title}</span>
                    </div>
                </div>

                {/* Technology Stack */}
                <div className={"mt-1 flex flex-wrap gap-2"}>
                    {project.stack.map((tech, idx) => (
                        <span key={idx} className={"inline-flex items-center gap-2 border rounded-md border-white px-4 sm:px-6 py-2 text-sm sm:text-base"}>
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Project Description */}
                <div className={"pt-4 pb-2 md:text-lg text-white font-medium max-w-xl sm:max-w-3xl mb-8 leading-relaxed text-sm sm:text-base"}>
                    <p>{project.description}</p>
                </div>

                {/* GitHub and Live Website Links */}
                <div className="inline-flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-4">
                    {/* GitHub Link */}
                    <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-2"
                    >
                        <FaGithub size={32} /> {/* GitHub Icon */}
                    </a>

                    {/* Live Website Link */}
                    <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-white border-b border-white pb-1
                                hover:text-gray-300 transition-all duration-300 text-sm sm:text-base"
                    >
                        Live Website
                        <FaExternalLinkAlt className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
