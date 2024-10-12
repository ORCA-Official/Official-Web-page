// ** React Imports
import React, {useEffect, useRef, useState} from 'react';

// ** GSAP Imports
import gsap from 'gsap-trial';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';
import { useGSAP } from '@gsap/react';

// ** Custom Imports
import Hero from "../../components/home/HeroSection";
import OurService from "../../components/home/OurService";
import About from "../../components/home/About";
import Project from "../../components/home/Project";
import Testimonial from "../../components/home/Testimonial";
import Footer from "../../components/core/Footer";
import Navbar from "../../components/core/Navbar";

// ** Styles Imports
import '../../assets/css/scroller.css';
import Contact from "../../components/home/Contact";

// ** GSAP Configs
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);
gsap.config({ trialWarn: false });
const Home = () => {
    const main = useRef();
    //const smoother = useRef();

    const [scrollPosition, setScrollPosition] = useState(0);
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPosition = window.pageYOffset;
            if (currentScrollPosition > scrollPosition && currentScrollPosition > 100) {
                setIsNavbarVisible(false);
            } else {
                setIsNavbarVisible(true);
            }
            setScrollPosition(currentScrollPosition);
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPosition]);

    /*useGSAP(
        () => {
            // Initialize ScrollSmoother
            smoother.current = ScrollSmoother.create({
                wrapper: '#smooth-wrapper',
                content: '#smooth-content',
                smooth: 10,
                effects: true,
            });

            // Create the effect where second section comes in place of the first update
            gsap.fromTo(".box-b", {
                y: '100%',  // Start off the screen at the bottom
                opacity: 0, // Start invisible
            }, {
                y: '0%',    // Move to its normal position
                opacity: 1, // Fade in
                scrollTrigger: {
                    trigger: '.box-b',
                    start: 'top top',      // Start when .box-b reaches the top
                    end: '+=100%',         // Continue for the height of the section
                    scrub: true,           // Smooth transition
                    pin: true,             // Pin this section during the transition
                    anticipatePin: 1,      // Anticipate the pinning for smoothness
                }
            });

            // Fade out the first section as the second comes in
            gsap.to(".box-a", {
                opacity: 0,              // Fade out the first section
                scrollTrigger: {
                    trigger: '.box-b',    // Triggered by the second section
                    start: 'top top',     // Start fading out when .box-b reaches the top
                    end: 'bottom top',    // End the fade-out when .box-b takes its place
                    scrub: true,          // Smooth transition
                }
            });


            // Create the effect where third section comes in place of the second
            gsap.fromTo(".box-c", {
                y: '100%',  // Start off the screen at the bottom
                opacity: 1, // Start invisible

            }, {
                y: '0%',    // Move to its normal position
                opacity: 1, // Fade in
                scrollTrigger: {
                    trigger: '.box-c',
                    start: 'top top',      // Start when .box-c reaches the top
                    end: '+=100%',         // Continue for the height of the section
                    scrub: true,           // Smooth transition
                    pin: true,             // Pin this section during the transition
                    anticipatePin: 1,      // Anticipate the pinning for smoothness
                }
            });

            // Create the effect where Fourth section comes in place of the third
            gsap.fromTo(".box-d", {
                y: '100%',  // Start off the screen at the bottom
                opacity: 1, // Start invisible
            }, {
                y: '0%',    // Move to its normal position
                opacity: 1, // Fade in
                scrollTrigger: {
                    trigger: '.box-d',
                    start: 'top top',      // Start when .box-c reaches the top
                    end: '+=100%',         // Continue for the height of the section
                    scrub: true,           // Smooth transition
                    pin: true,             // Pin this section during the transition
                    anticipatePin: 1,      // Anticipate the pinning for smoothness
                }
            });

            //create the effect where Fifth section comes in place of the fourth
            gsap.fromTo(".box-e", {
                y: '100%',  // Start off the screen at the bottom
                opacity: 1, // Start invisible
            }, {
                y: '0%',    // Move to its normal position
                opacity: 1, // Fade in
                scrollTrigger: {
                    trigger: '.box-e',
                    start: 'top top',      // Start when .box-c reaches the top
                    end: '+=100%',         // Continue for the height of the section
                    scrub: true,           // Smooth transition
                    pin: true,             // Pin this section during the transition
                    anticipatePin: 1,      // Anticipate the pinning for smoothness
                }
            });

            //create the effect where Sixth section comes in place of the fifth
            gsap.fromTo(".box-f", {
                y: '100%',  // Start off the screen at the bottom
                opacity: 1, // Start invisible
            }, {
                y: '0%',    // Move to its normal position
                opacity: 1, // Fade in
                scrollTrigger: {
                    trigger: '.box-f',
                    start: 'top top',
                    end: '+=50%',          // Reduce the scroll distance
                    scrub: true,           // Smooth transition
                    pin: false,            // Disable pinning to avoid affecting the footer
                    anticipatePin: 1,
                }
            });


            gsap.config({ trialWarn: false });



        },
        { scope: main }
    );*/

    return (
        <>

            {/* Navbar with dynamic visibility */}
            <div
                className={`fixed top-0 left-0 px-10 w-full z-50 transition-transform duration-300 ${isNavbarVisible ? 'translate-y-0' : '-translate-y-[120%]'}`}>
                <Navbar/>
            </div>

            {/* Smooth scrolling content */}
            <div id="smooth-wrapper" ref={main}>
                <div id="smooth-content">
                    <div className="box box-a gradient-blue" data-speed="0.5">
                        <Hero/>
                    </div>
                    <div className="box box-b gradient-orange" data-speed="0.8">
                        <About/>
                    </div>
                    <div className="box box-c gradient-purple" data-speed="0.8">
                        <OurService/>
                    </div>
                    <div className="box box-d gradient-purple" data-speed="0.8">
                        <Project/>
                    </div>
                    <div className="box box-e gradient-purple" data-speed="0.8">
                        <Testimonial/>
                    </div>
                    <div className="box box-e gradient-purple" data-speed="0.8">
                        <Contact/>
                    </div>
                    <div className="box box-f gradient-purple" data-speed="1.8">
                        <Footer/>
                    </div>
                    <div className="line"></div>
                </div>
            </div>
        </>
    );
};

export default Home;
