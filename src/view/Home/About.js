import React, {useEffect, useState} from "react";
import MindsBehind from "../../components/about/MindsBehind";
import WhatWeDo from "../../components/about/WhatWeDo";
import WhoWeAre from "../../components/about/WhoWeAre";
import Navbar from "../../components/core/Navbar";
import FooterBlack from "../../components/core/FooterBlack";

const About = () => {
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
    return (
        <>
            <div
                className={`fixed top-0 left-0 px-10 w-full z-50 transition-transform duration-300 ${isNavbarVisible ? 'translate-y-0' : '-translate-y-[120%]'}`}>
                <Navbar/>
            </div>

            <div>
                <WhoWeAre/>
                <WhatWeDo/>
                <MindsBehind/>
                <FooterBlack/>
            </div>
        </>
    )
}

export default About;
