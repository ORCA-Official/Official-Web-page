import React from 'react';
import './styles.css';
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
    };

    return (
        <div className="testimonial-section bg-white py-12">
            {/* Header Section */}
            <div className="container mx-auto px-4 sm:px-8 lg:px-16 flex flex-col lg:flex-row items-start justify-between space-y-8 lg:space-y-0">
                <div className="lg:w-1/2 space-y-4">
                    <h1 className="text-6xl font-bold font-kumar text-gray-300">/3.</h1>
                </div>
                <div className="lg:w-1/3 flex flex-col space-y-4 items-end">
                    <h2 className="text-3xl font-bold text-right pt-2 mb-4">TESTIMONIALS</h2>
                </div>
            </div>

            {/* Slider Section */}
            <div className="slider-container mt-4"> {/* Reduced top margin */}
                <Slider {...settings}>
                    <div className="p-2 flex justify-center"> {/* Reduced padding */}
                        <div className="testimonial-card bg-black text-white p-8 rounded-lg shadow-lg w-full h-80 max-w-md">
                            <h3 className="text-xl font-bold">KARA STRONG</h3>
                            <p className="text-sm italic">CEO Technara</p>
                            <p className="mt-4 text-base">
                                A car rental system can be built with HTML, CSS, JavaScript, and Bootstrap.
                                The system allows users to browse available cars, book rentals, and manage bookings.
                            </p>
                            <div className="mt-4">
                                <span className="text-yellow-500">★★★★★</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 flex justify-center"> {/* Reduced padding */}
                        <div className="testimonial-card bg-black text-white p-8 rounded-lg shadow-lg w-full h-80 max-w-md">
                            <h3 className="text-lg font-bold">Freelancer</h3>
                            <p className="text-sm italic">Tech Enthusiast</p>
                            <p className="mt-4">
                                A car rental system built with React and Node.js provides robust functionality,
                                including user-friendly interfaces, dynamic data, and efficient backend services.
                            </p>
                            <div className="mt-4">
                                <span className="text-yellow-500">★★★★★</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 flex justify-center"> {/* Reduced padding */}
                        <div className="testimonial-card bg-black text-white p-8 rounded-lg shadow-lg w-full h-80 max-w-md">
                            <h3 className="text-lg font-bold">Tech Leader</h3>
                            <p className="text-sm italic">Senior Developer</p>
                            <p className="mt-4">
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
