import React from "react";
import PageTitles from "../core/PageTitles";
import I from "../../assets/images/aboutBG.png";
import {motion, useInView} from "framer-motion";

const WhoWeAre = () => {

    const p1_ref = React.useRef(null);
    const p2_ref = React.useRef(null);
    const btnRef = React.useRef(null);

    // ** Framer Motion's useInView Hook
    const isInView = useInView(p1_ref, { once: false, margin: '-100px' });
    const isInView1 = useInView(p2_ref, { once: false, margin: '-100px' });
    const isInView2 = useInView(btnRef, { once: false, margin: '-100px' });

    const backgroundStyle = {
        backgroundImage: `url(${I})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight: '100%',
    };

    // Animation variants for Framer Motion
    const variants = {
        hidden: { x: -100, opacity: 0 },
        visible: { x: 0, opacity: 1 },
    };

    return (
        <div className={`overflow-hidden w-full bg-black bg-cover bg-center md:h-screen h-max pt-16`} style={backgroundStyle}>

            <PageTitles
                dark={true}            // Use `true` if you want the dark mode
                title="About Us"
                bgtitle="Who we are"
            />

            {/* Paragraph - Company description */}

            <div className="pt-6 pl-12 ">
                <motion.p
                    ref={p1_ref}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={variants}
                    transition={{duration: 0.5, ease: "easeOut", delay:0.3}}
                    className="md:mt-20 mt-4 text-sm md:text-xl font-light text-gray-300 pr-20 max-w-7xl relative z-10">
                    At Orca Tech Solutions, we are passionate about leveraging the power of technology to drive
                    innovation and solve complex business challenges. With a team of skilled software engineers,
                    we specialize in delivering tailored digital solutions that empower businesses to thrive in a
                    rapidly evolving digital landscape.
                </motion.p>

                <motion.p
                    ref={p2_ref}
                    initial="hidden"
                    animate={isInView1 ? "visible" : "hidden"}
                    variants={variants}
                    transition={{duration: 0.5, ease: "easeOut", delay:0.5}}
                    className="mt-8 text-sm md:text-xl font-light text-gray-300 pr-20 max-w-7xl relative z-10">
                    Founded on the principles of excellence, creativity, and collaboration, we pride ourselves on
                    our ability to transform ideas into reality. Whether it's custom software development, cloud
                    solutions, or mobile app development, we work closely with our clients to ensure that every
                    solution is designed with precision and tailored to their unique needs.
                </motion.p>
            </div>

            {/* Start Your Project Button */}
            <motion.div
                ref={btnRef}
                initial="hidden"
                animate={isInView2 ? "visible" : "hidden"}
                variants={variants}
                transition={{duration: 0.5, ease: "easeOut", delay:0.7}}
            >
                <button className="m-20 ml-12 mt-10 px-4 py-2 text-sm  text-white bg-transparent border border-white rounded hover:bg-white hover:text-gray-900 transition duration-300">
                    Start Your Project
                </button>
            </motion.div>
        </div>
    )
}

export default WhoWeAre;
