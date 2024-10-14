import React from 'react';
import { HomeTitles } from '../core/HomeTitles'; // Custom title component
import ProjectCard from '../project/ProjectCard'; // ProjectCard component

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import {Mousewheel, Pagination} from 'swiper/modules';

// Import utils ProjectDetails
import {projectDetails} from "../../utils/projectDetails";

const Project = () => {

    return (
        <div className={'bg-black pb-10'}>
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
                touchRatio={1} // Control the sensitivity of touch scroll (higher values make it more responsive)
                touchStartPreventDefault={false} // Allow smooth scroll with touch input
                touchReleaseOnEdges={true} // Enable releasing on edges for better scroll experience
                modules={[Pagination, Mousewheel]}
                className="mySwiper"
                style={{height: '100vh','--swiper-pagination-color': '#fff','--swiper-pagination-bullet-inactive-color': '#dadada'}}
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
    );
}

export default Project;
