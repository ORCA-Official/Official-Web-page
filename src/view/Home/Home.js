// ** React Imports
import React, {useEffect, useRef, useState} from 'react';

// ** Custom Imports
import Hero from "../../components/home/HeroSection";
import OurService from "../../components/home/OurService";
import About from "../../components/home/About";
import Project from "../../components/home/Project";
import FooterBlack from "../../components/core/FooterBlack";
import Navbar from "../../components/core/Navbar";

// ** Styles Imports
import '../../assets/css/scroller.css';

// ** WhatsApp Chat Button Imports
import whatsappIcon from "../../assets/images/whatsapp.png";


const Home = () => {
    const main = useRef();
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

    const handleWhatsAppClick = () => {
        const phoneNumber = "+94787491942"; // Replace with your WhatsApp number
        const message = "Hello! I would like to inquire about your services."; // Pre-filled message
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

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
                        {/*<Testimonial />*/}
                    </div>
                    <div className="box box-e gradient-purple" data-speed="0.8">
                        <FooterBlack/>
                    </div>
                </div>
            </div>

            {/* WhatsApp Floating Button */}
            <button
                onClick={handleWhatsAppClick}
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    backgroundColor: '#25D366',
                    borderRadius: '50%',
                    width: '60px',
                    height: '60px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                    cursor: 'pointer',
                    zIndex: 1000
                }}
            >
                <img src={whatsappIcon} alt="WhatsApp" style={{width: '40px', height: '40px'}}/>
            </button>
        </>
    );
};

export default Home;
