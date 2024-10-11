import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import java from '../assets/images/java.png';
import react from '../assets/images/react.png';
import node from '../assets/images/nodejs.png';
import mysql from '../assets/images/mysql.png';
import mongodb from '../assets/images/mongodb.png';
import spring from '../assets/images/spring.png';
import c from '../assets/images/c.png';
import firebase from '../assets/images/firebase.png';
import Services from "./core/Services";

const OurService = () => {
    /*const services = [
        'Full-Stack Web Development',
        'Mobile App Development',
        'Desktop Application Development',
        'Cloud Integration & Deployment',
    ];*/

    const techStack = [
        <img src={react} alt="Java" style={{ width: '60px', height: '60px' }} />,
        <img src={node} alt="Java" style={{ width: '60px', height: '60px' }} />,
        <img src={mysql} alt="Java" style={{ width: '60px', height: '60px' }} />,
        <img src={java} alt="Java" style={{ width: '60px', height: '60px' }} />,
        <img src={mongodb} alt="Java" style={{ width: '60px', height: '60px' }} />,
        <img src={spring} alt="Java" style={{ width: '60px', height: '60px' }} />,
        <img src={c} alt="Java" style={{ width: '60px', height: '60px' }} />,
        <img src={firebase} alt="Java" style={{ width: '60px', height: '60px' }} />,
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
                    {/*<ul className="grid grid-cols-2 gap-x-14 gap-y-2 pl-10">
                        {services?.map((service, index) => (
                            <li key={index} className="flex items-center">
                                <span className="text-md mr-4">0{index + 1}.</span>
                                 Conditionally applying border-t only for the first two items
                                <p className={`text-md  py-2 w-full ${index < 2 ? 'border-t' : ''}`}>
                                    {service}
                                </p>
                            </li>
                        ))}
                    </ul>*/}

                    <div className={'w-full flex gap-x-10 gap-y-8 md:gap-y-0 md:flex-nowrap flex-wrap'}>

                        <div className={'md:w-2/5 w-full'}>
                            <p className={'text-md md:text-lg text-gray-700 font-poppins'}>At Orca Tech Solutions, we
                                offer a wide range of software engineering services designed to help businesses of all
                                sizes achieve their goals. Our expertise spans across web development, mobile
                                development, and standalone application development, delivering robust and scalable
                                solutions.</p>
                        </div>
                        <div className={'md:w-3/5 w-full '}>
                            <Services/>
                        </div>
                    </div>

                </div>

                {/* OUR TECH STACK Section */}
                <div className="container mx-auto py-12">
                    {/* OUR TECH STACK Section */}
                    <h2 className="px-8 lg:px-16 text-3xl font-bold text-right mt-16 mb-8">OUR TECH STACK</h2>

                    <Slider {...settings}>
                        {techStack?.map((tech, index) => (
                            <div key={index} className={'p-2 px-2'}>
                                {/*<div className={'w-full bg-amber-200 rounded-full text-center py-4 text-2xl'}>*/}
                                <div className={'w-full rounded-full text-center py-4 text-2xl flex items-center justify-center'}>
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

export default OurService;
