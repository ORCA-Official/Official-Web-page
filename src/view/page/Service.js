import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import java from '../../assets/images/java.png';
import react from '../../assets/images/react.png';
import node from '../../assets/images/nodejs.png';
import mysql from '../../assets/images/mysql.png';
import mongodb from '../../assets/images/mongodb.png';
import spring from '../../assets/images/spring.png';
import c from '../../assets/images/c.png';
import firebase from '../../assets/images/firebase.png';


const Service = () => {
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
        'Spring Boot',
        'MySQL',
        'MongoDB',
        'Firebase',
    ];

    // Carousel settings
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 7, // Adjust this number based on your design needs
        slidesToScroll: 0.1,
        autoplay: true,
        autoplaySpeed: 1,
        cssEase: "ease",

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],


    };

    return (
        <>
            <div className="container mx-auto py-12">

                <div className={'px-8 lg:px-16'}>
                    {/* OUR SERVICES Section */}
                    <h2 className="text-3xl font-bold text-left mb-5">OUR SERVICES</h2>
                    <ul className="grid grid-cols-2 gap-x-14 gap-y-2 pl-10">
                        {services?.map((service, index) => (
                            <li key={index} className="flex items-center">
                                <span className="text-md mr-4">0{index + 1}.</span>
                                {/* Conditionally applying border-t only for the first two items */}
                                <p className={`text-md border-b border-gray-400 py-2 w-full ${index < 2 ? 'border-t' : ''}`}>
                                    {service}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* OUR TECH STACK Section */}
                <div className="container mx-auto py-12">
                    {/* OUR TECH STACK Section */}
                    <h2 className="px-8 lg:px-16 text-3xl font-bold text-right mt-16 mb-8">OUR TECH STACK</h2>

                    <Slider {...settings}>
                        {techStack?.map((tech, index) => (
                            <div className={'p-2 px-2'}>
                                <div className={'w-full bg-amber-200 rounded-full text-center py-4 text-2xl'}>
                                    {tech}
                                </div>
                            </div>

                        ))}
                    </Slider>
                </div>
            </div>
        </>
    );
};

export default Service;
