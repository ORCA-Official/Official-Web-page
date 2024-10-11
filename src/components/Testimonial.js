import React from 'react';
import '../assets/css/styles.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const Testimonial = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 2,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1024, // Tablets and below
                settings: {
                    slidesToShow: 1,
                    centerPadding: "40px",
                },
            },
            {
                breakpoint: 600, // Small mobile devices
                settings: {
                    slidesToShow: 1,
                    centerPadding: "20px",
                },
            },
        ],
    };


    return (
        <div className="testimonial-section bg-white py-12">
            {/* Header Section */}
            <div className="container mx-auto px-4 sm:px-8 lg:px-16 flex flex-col lg:flex-row items-start justify-between space-y-8 lg:space-y-0">
                <div className="lg:w-1/2 space-y-4">
                    <h1 className="text-6xl font-bold font-kumar text-gray-300">/3.</h1>
                </div>
                <div className="lg:w-1/3 flex flex-col space-y-4 items-end">
                    <h2 className="text-3xl font-bold text-right pt-2 mb-4 sm:text-2xl">TESTIMONIALS</h2>
                </div>
            </div>

            {/* Slider Section */}
            <div className="slider-container mt-4">
                <Slider {...settings}>
                    <div className="p-2 flex justify-center"> {/* Reduced padding */}
                        <div id="back" className="testimonial-card bg-black text-white p-8 rounded-lg shadow-lg w-full h-80 max-w-md">
                            <h3 className="text-xl font-bold sm:text-lg">KARA STRONG</h3>
                            <p className="text-sm italic">CEO Technara</p>
                            <p className="mt-4 text-base sm:text-sm">
                                A car rental system can be built with HTML, CSS, JavaScript, and Bootstrap.
                                The system allows users to browse available cars, book rentals, and manage bookings.
                            </p>
                            <div className="mt-4">
                                <span className="text-yellow-500">★★★★★</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 flex justify-center"> {/* Reduced padding */}
                        <div id="back" className="testimonial-card bg-black text-white p-8 rounded-lg shadow-lg w-full h-80 max-w-md">
                            <h3 className="text-lg font-bold sm:text-base">Freelancer</h3>
                            <p className="text-sm italic">Tech Enthusiast</p>
                            <p className="mt-4 sm:text-sm">
                                A car rental system built with React and Node.js provides robust functionality,
                                including user-friendly interfaces, dynamic data, and efficient backend services.
                            </p>
                            <div className="mt-4">
                                <span className="text-yellow-500">★★★★★</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 flex justify-center"> {/* Reduced padding */}
                        <div id="back" className="testimonial-card bg-black text-white p-8 rounded-lg shadow-lg w-full h-80 max-w-md">
                            <h3 className="text-lg font-bold sm:text-base">Tech Leader</h3>
                            <p className="text-sm italic">Senior Developer</p>
                            <p className="mt-4 sm:text-sm">
                                Using a variety of frontend and backend technologies, I was able to streamline the
                                car rental system and improve performance.
                            </p>
                            <div className="mt-4">
                                <span className="text-yellow-500">★★★★★</span>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Testimonial;
