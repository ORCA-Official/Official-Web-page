import React, {useEffect} from 'react';

import java from '../../assets/images/java.png';
import react from '../../assets/images/react.png';
import node from '../../assets/images/nodejs.png';
import mysql from '../../assets/images/mysql.png';
import mongodb from '../../assets/images/mongodb.png';
import spring from '../../assets/images/spring.png';
import c from '../../assets/images/c.png';
import firebase from '../../assets/images/firebase.png';
import Services from "../core/Services";

import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll';

// Tech stack images
const techStack = [
    { src: react, alt: 'React' },
    { src: node, alt: 'Node.js' },
    { src: mysql, alt: 'MySQL' },
    { src: java, alt: 'Java' },
    { src: mongodb, alt: 'MongoDB' },
    { src: spring, alt: 'Spring' },
    { src: c, alt: 'C' },
    { src: firebase, alt: 'firebase' },
    { src: react, alt: 'React' },
    { src: node, alt: 'Node.js' },
    { src: mysql, alt: 'MySQL' },
    { src: java, alt: 'Java' },
    { src: mongodb, alt: 'MongoDB' },
    { src: spring, alt: 'Spring' },
    { src: c, alt: 'C' },
    { src: firebase, alt: 'firebase' },
];

const OurService = () => {

    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true },
        [AutoScroll({active:true, speed: 3, stopOnInteraction: false })]
    );

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.plugins()?.autoScroll?.play();
    }, [emblaApi]);

    return (
        <>
            <div className="container mx-auto py-12">

                <div className={'px-8 lg:px-16'}>
                    {/* OUR SERVICES Section */}
                    <h2 className="text-3xl font-bold text-left mb-5">OUR SERVICES</h2>

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

                    <div className="embla w-full py-8">
                        <div className="embla__viewport overflow-hidden" ref={emblaRef}>
                            <div className="embla__container flex">
                                {techStack.map((tech, index) => (
                                    <div
                                        className="embla__slide flex-shrink-0 w-48 flex justify-center items-center px-4 py-2"
                                        key={index}
                                    >
                                        <img src={tech.src} alt={tech.alt} className="w-16 h-16"/>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default OurService;
