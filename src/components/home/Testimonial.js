import React from 'react';
import '../../assets/css/styles.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { HomeTitles } from '../core/HomeTitles';

const Testimonial = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "10px",
        slidesToShow: 3,
        slidesToScroll: 0.1,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        focusOnSelect: true,
        cssEase: "ease",
        responsive: [
            {
                breakpoint: 1024, // Tablets and below
                settings: {
                    slidesToShow: 1,
                    centerPadding: "25%",
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
        <>
            <HomeTitles title={'Testimonial'} number={3} />

            {/* Slider Section */}
            <div className="slider-container pt-8">
                <Slider {...settings}>
                    <div className="p-2 flex justify-center">
                        <div id="back"
                             className="testimonial-card bg-black text-white p-8 rounded-lg shadow-lg w-full h-80 max-w-md">
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
                    <div className="p-2 flex justify-center">
                        <div id="back"
                             className="testimonial-card bg-black text-white p-8 rounded-lg shadow-lg w-full h-80 max-w-md">
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
                    <div className="p-2 flex justify-center">
                        <div id="back"
                             className="testimonial-card bg-black text-white p-8 rounded-lg shadow-lg w-full h-80 max-w-md">
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
                    <div className="p-2 flex justify-center">
                        <div id="back"
                             className="testimonial-card bg-black text-white p-8 rounded-lg shadow-lg w-full h-80 max-w-md">
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
                    <div className="p-2 flex justify-center">
                        <div id="back"
                             className="testimonial-card bg-black text-white p-8 rounded-lg shadow-lg w-full h-80 max-w-md">
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
                    <div className="p-2 flex justify-center">
                        <div id="back"
                             className="testimonial-card bg-black text-white p-8 rounded-lg shadow-lg w-full h-80 max-w-md">
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
        </>
    );
};

export default Testimonial;
