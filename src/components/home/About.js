import React from 'react';
import images from "../../assets/images/image.png";
import {HomeTitles} from "../core/HomeTitles";
import {motion, useInView} from "framer-motion";


const About = () => {

    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: false, margin: '-100px' });

    // Animation variants for Framer Motion
    const variants = {
        hidden: { x: -100, opacity: 0 },
        visible: { x: 0, opacity: 1 },
    };

    return (
        <>
            <HomeTitles title={'About Us'} number={1} />

            <div className="container mx-auto px-8 lg:px-16 py-12">
                <div className="flex flex-col lg:flex-row items-start justify-between space-y-8 lg:space-y-0">
                    <div className="lg:w-1/2 space-y-4">
                        <motion.p
                            ref={ref}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            variants={variants}
                            transition={{duration: 0.5, ease: "easeOut", delay:0.3}}
                            className="text-md md:text-lg text-gray-700 font-poppins">
                            At Orca Tech Solutions, we specialize in creating innovative software solutions tailored to meet
                            the unique needs of businesses. With a focus on excellence, collaboration, and cutting-edge
                            technology, we help companies streamline operations, improve efficiency, and stay ahead in the
                            digital age.
                        </motion.p>
                    </div>

                    <div className="lg:w-1/3 flex flex-col space-y-4 items-end">
                        <img
                            src={images}
                            alt="About Us"
                            className="w-full h-auto object-cover rounded-lg shadow-md ring-gray-200"
                        />
                    </div>
                </div>
            </div>
        </>
    );

}

export default About;
