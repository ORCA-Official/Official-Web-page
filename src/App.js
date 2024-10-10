/*

import './App.css';
import Home from "./view/page/Home";

function App() {
  return (
     <>
       <Home/>
     </>
  );
}

export default App;
*/


import React, { useRef } from 'react';
import gsap from 'gsap-trial';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';
import { useGSAP } from '@gsap/react';
import Home from "./view/page/Home";
import Service from "./components/Service";
import About from "./components/About";
import './assets/css/scroller.css';
import Project from "./view/page/Project";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

function App() {
    const main = useRef();
    const smoother = useRef();

    useGSAP(
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


        },
        { scope: main }
    );

    return (
        <div id="smooth-wrapper" ref={main}>
            <div id="smooth-content">
                <div className="box box-a gradient-blue" data-speed="0.5">
                    <Home/>
                </div>
                <div className="box box-b gradient-orange" data-speed="0.8">
                    <About/>
                </div>
                <div className="box box-c gradient-purple" data-speed="0.8">
                    <Service/>
                </div>
                <div className="box box-d gradient-purple" data-speed="0.8">
                    <Project/>
                </div>
                <div className="line"></div>
            </div>
        </div>
    );
}

export default App;
