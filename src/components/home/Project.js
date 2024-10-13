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
 /*   const backgroundStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.90), rgba(0, 0, 0, 0.90)), url(${projectDetails[0].backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
    };*/

    // Example projects array
   /* const projects = [
        {
            title: "CAR RENTAL SYSTEM",
            stack: ["HTML", "CSS", "JavaScript", "Spring Boot", "JWT", "Bootstrap"],
            description: "A car rental system built with HTML/CSS, JavaScript, and Bootstrap front-end for responsive " +
                "design. The backend uses Spring Boot with JWT for secure authentication. Allows users to easily browse " +
                "cars, view details, and manage bookings with admin handling car listings and bookings.",
            githubLink: "https://github.com/your-car-rental-repo",
            liveLink: "https://car-rental-live.com",
            backgroundImage: require('../../assets/images/carbackground01.png'),
        },
        {
            title: "CAR RENTAL SYSTEM 2",
            stack: ["HTML", "CSS", "JavaScript", "Spring Boot", "JWT", "Bootstrap"],
            description: "A modern blog platform using Next.js, Auth.js, MongoDB, and Firebase. Features real-time " +
                "updates, secure JWT authentication, and a responsive UI with Tailwind CSS. Hosted on Google Cloud, " +
                "integrated with Google APIs. Powered by Prisma ORM for efficient data management..",
            githubLink: "https://github.com/your-car-rental-repo",
            liveLink: "https://car-rental-live.com",
            backgroundImage: require('../../assets/images/blogapp.png'),
        },
        // Add more projects if needed
    ];*/

    return (
        <div className={'bg-black'}>
            <HomeTitles title={'Project'} number={2} reverse={true} dark={true}/>

            {/* Swiper for vertical scrolling */}
            <Swiper
                direction={'vertical'}
                pagination={{
                    clickable: true,
                }}
                mousewheel={true}
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
    );
}

export default Project;
