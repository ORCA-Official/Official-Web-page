import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const services = [
        'Full-Stack Web Development',
        'Mobile App Development',
        'Desktop Application Development',
        'Cloud Integration & Deployment',
    ];

    const techStack = [
        'React',
        'Node.js',
        'Spring',
        'Java',
        'C++',
    ];

    useEffect(() => {
        const serviceSection = document.querySelector('#service-section');

        gsap.set(serviceSection, { opacity: 0, y: 100 }); // Set initial state

        const trigger = ScrollTrigger.create({
            trigger: serviceSection,
            start: 'top 80%', // Start when the top of the section hits 80% of the viewport
            end: 'top 30%', // End when the top of the section hits 30% of the viewport
            onEnter: () => {
                gsap.to(serviceSection, { opacity: 1, y: 0, duration: 1 });
            },
            onLeaveBack: () => {
                gsap.to(serviceSection, { opacity: 0, y: 100, duration: 1 });
            },
        });

        return () => {
            trigger.kill(); // Cleanup the ScrollTrigger on component unmount
        };
    }, []);

    return (
        <>
            <div className="container mx-auto px-8 lg:px-16 py-12">
                {/* Other sections can be added here if needed */}
            </div>
            <div id="service-section" className="container mx-auto px-8 lg:px-16 py-12">
                {/* OUR SERVICES Section */}
                <h2 className="text-3xl font-bold text-left mb-5">OUR SERVICES</h2>
                <ul className="grid grid-cols-2 gap-x-14 gap-y-2 pl-10">
                    {services?.map((service, index) => (
                        <li key={index} className="flex items-center">
                            <span className="text-md mr-4">0{index + 1}.</span>
                            {/* Fix the missing backticks for className */}
                            <p className={`text-md border-b border-gray-400 py-2 w-full ${index < 2 ? 'border-t' : ''}`}>
                                {service}
                            </p>
                        </li>
                    ))}
                </ul>

                {/* OUR TECH STACK Section */}
                <h2 className="text-3xl font-bold text-right mt-16 mb-8">OUR TECH STACK</h2>
                <div className="flex justify-center">
                    <div className="flex flex-wrap justify-center gap-6">
                        {techStack?.map((tech, index) => (
                            <div key={index} className="bg-pink-300 p-4 rounded-md text-center">
                                {tech}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
