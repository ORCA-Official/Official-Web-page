import React, {useEffect, useState} from 'react';
import { HomeTitles } from '../../components/core/HomeTitles'; // Custom title component
import ProjectCard from '../../components/project/ProjectCard';
import {Swiper, SwiperSlide} from "swiper/react";
import {Mousewheel, Pagination} from "swiper/modules";
import {projectDetails} from "../../utils/projectDetails";
import Navbar from "../../components/core/Navbar";
import FooterBlack from "../../components/core/FooterBlack"; // ProjectCard component

const Project = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPosition = window.pageYOffset;
            if (currentScrollPosition > scrollPosition && currentScrollPosition > 100) {
                setIsNavbarVisible(false);
            } else {
                setIsNavbarVisible(true);
            }
            setScrollPosition(currentScrollPosition);
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPosition]);

    return (
        /*<div className={'bg-black'}>
            <HomeTitles title={'Project'} number={2} reverse={true} dark={true} />

            {/!* Background section for project details *!/}
            <div style={backgroundStyle} className="relative text-white">
                <div className="container mx-auto px-4 sm:px-8 py-16">
                    {/!* Iterate through projects *!/}
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </div>*/
        <>
            <div
                className={`fixed top-0 left-0 px-10 w-full z-50 transition-transform duration-300 ${isNavbarVisible ? 'translate-y-0' : '-translate-y-[120%]'}`}>
                <Navbar/>
            </div>

            <div className={'bg-black pt-16'}>

                <HomeTitles title={'Project'} number={2} reverse={true} dark={true}/>

                {/* Swiper for vertical scrolling */}
                <Swiper
                    direction={'vertical'}
                    pagination={{
                        clickable: true,
                    }}
                    //mousewheel={true}
                    mousewheel={{
                        forceToAxis: true, // Force scroll to be vertical
                        releaseOnEdges: true, // Release scroll on edges
                        invert: false, // Invert the scroll direction
                        sensitivity: 0, // Adjust sensitivity of the scroll
                    }}
                    modules={[Pagination, Mousewheel]}
                    className="mySwiper"
                    style={{height: '100vh'}} // Ensure it takes full height
                >
                    {/* Iterate through projects */}
                    {projectDetails.map((project, index) => (
                        <SwiperSlide key={index}>
                            {/* Set dynamic background style for each project */}
                            <div
                                style={{
                                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.90), rgba(0, 0, 0, 0.90)), url(${project.backgroundImage})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    minHeight: '100vh',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                                className="relative text-white"
                            >
                                {/* Render project card */}
                                <ProjectCard project={project} index={index}/>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <FooterBlack/>
        </>
    );
}

export default Project;
