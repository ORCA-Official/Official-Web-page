import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
        slidesToShow: 7,
        slidesToScroll:1,
        autoplay: true,
        autoplaySpeed: 0.1,
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
            <div className="container mx-auto px-8 lg:px-16 py-12">
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

                {/* OUR TECH STACK Section */}
                <div className="container mx-auto px-8 lg:px-16 py-12">
                    {/* OUR TECH STACK Section */}
                    <h2 className="text-3xl font-bold text-right mt-16 mb-8">OUR TECH STACK</h2>

                    <Slider {...settings}>
                        {techStack?.map((tech, index) => (
                            <div
                                key={index}
                                className="bg-pink-200 p-4  rounded-md text-center text-lg font-poppins font-bolds shadow-md hover:bg-amber-400">
                                {tech}
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    );
};

export default Service;
