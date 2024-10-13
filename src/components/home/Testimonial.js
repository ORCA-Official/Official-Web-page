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

    // ** Testimonials Data Array **
    const testimonials = [
        {
            name: "KARA STRONG",
            role: "CEO Technara",
            feedback:
                "A car rental system can be built with HTML, CSS, JavaScript, and Bootstrap. The system allows users to browse available cars, book rentals, and manage bookings.",
            rating: 5,
        },
        {
            name: "Freelancer",
            role: "Tech Enthusiast",
            feedback:
                "A car rental system built with React and Node.js provides robust functionality, including user-friendly interfaces, dynamic data, and efficient backend services.",
            rating: 5,
        },
        {
            name: "Tech Leader",
            role: "Senior Developer",
            feedback:
                "Using a variety of frontend and backend technologies, I was able to streamline the car rental system and improve performance.",
            rating: 5,
        },
    ];

    return (
        <>
            <HomeTitles title={'Testimonial'} number={3} />

            {/* Slider Section */}
            <div className="slider-container mt-4">
                <Slider {...settings}>
                    {/* Map through the testimonials array */}
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="p-2 flex justify-center">
                            <div id="back" className="testimonial-card bg-black text-white p-8 rounded-lg shadow-lg w-full h-80 max-w-md">
                                <h3 className="text-xl font-bold sm:text-lg">{testimonial.name}</h3>
                                <p className="text-sm italic">{testimonial.role}</p>
                                <p className="mt-4 text-base sm:text-sm">{testimonial.feedback}</p>
                                <div className="mt-4">
                                    <span className="text-yellow-500">{'★'.repeat(testimonial.rating)}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
};

export default Testimonial;
