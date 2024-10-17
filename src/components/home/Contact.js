import React, {useEffect, useState} from 'react';
import Navbar from "../core/Navbar";
import PageTitles from "../core/PageTitles";
import FooterBlack from "../core/FooterBlack";

const Contact = () => {
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

    const handleWhatsAppClickContact = () => {
        const phoneNumber = "+94787491942"; // Replace with your WhatsApp number
        const message = "Hello! I would like to inquire about your services."; // Pre-filled message
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <div className={'bg-black'}>
            {/* <PageTitles bgtitle={'Get In Touch'} title={'Contact Us'}  dark={false}/>*/}
            <div
                className={`fixed top-0 left-0 px-10 w-full z-50 transition-transform duration-300 ${isNavbarVisible ? 'translate-y-0' : '-translate-y-[120%]'}`}>
                <Navbar/>
            </div>

            <div className={'pt-16'}>
                <PageTitles c bgtitle={'Get In Touch'} title={'Contact Us'} dark={true}/>
            </div>

            {/*<HomeTitles title={'CONTACT US'} number={4} reverse={true}/>*/}

            <div
                className="relative text-center bg-black pb-20 text-white min-h-screen flex flex-col items-center justify-center">

                {/* Contact Options */}
                <div className="relative z-10 mt-8 flex flex-wrap gap-20 px-10 justify-center">
                    {/* Chat Now Card */}
                    <div
                        className="bg-black border border-gray-700 p-12 rounded-xl shadow-[0_0_15px_5px_rgba(255,255,255,0.2)] hover:shadow-[0_0_20px_8px_rgba(255,255,255,0.5)] transition-all transform hover:-translate-y-4 w-80">
                        <div className="text-6xl mb-6 text-white">
                            <i className="fas fa-comments text-white"></i> {/* Set icon color to white */}
                        </div>
                        <h3 className="text-2xl font-semibold mb-4">Chat Now</h3>

                        {/* Button */}
                        <button
                            className="bg-white text-black font-medium py-2 px-4 rounded hover:bg-gray-300 transition"
                            onClick={handleWhatsAppClickContact}>
                            Start Chat
                        </button>

                        <p className="text-gray-400 mb-6 mt-8">Quick Answers Anytime! We're Online To Help!</p>

                    </div>

                    {/* Email Us Card */}
                    <div
                        className="bg-black border border-gray-700 p-12 rounded-xl shadow-[0_0_15px_5px_rgba(255,255,255,0.2)] hover:shadow-[0_0_20px_8px_rgba(255,255,255,0.5)] transition-all transform hover:-translate-y-4 w-80">
                        <div className="text-6xl mb-6 text-white">
                            <i className="fas fa-envelope text-white"></i> {/* Set icon color to white */}
                        </div>
                        <h3 className="text-2xl font-semibold mb-4">Email Us</h3>
                        {/* Button */}
                        <button
                            className="bg-white text-black font-medium py-2 px-4 rounded hover:bg-gray-300 transition"
                            onClick={() => {
                                const subjectPart = "Inquiry";
                                const autoSetPart = "Some additional info";
                                const email = 'orcaofficialse@gmail.com';
                                window.location.href = `mailto:${email}?subject=${encodeURIComponent(subjectPart + " - " + autoSetPart)}`;
                            }}
                        >
                            Send Email
                        </button>
                        <p className="text-gray-400 mb-6 mt-8">Get A Response Soon! Reach Us Anytime!</p>

                    </div>

                    {/* Call Us Card */}
                    <div
                        className="bg-black border border-gray-700 p-12 rounded-xl shadow-[0_0_15px_5px_rgba(255,255,255,0.2)] hover:shadow-[0_0_20px_8px_rgba(255,255,255,0.5)] transition-all transform hover:-translate-y-4 w-80">
                        <div className="text-6xl mb-6 text-white">
                            <i className="fas fa-phone text-white"></i> {/* Set icon color to white */}
                        </div>
                        <h3 className="text-2xl font-semibold mb-4">Call Us</h3>

                        {/* Button */}
                        <button
                            className="bg-white text-black font-medium py-2 px-4 rounded hover:bg-gray-300 transition"
                            onClick={() => window.location.href = 'tel:+94787491942'}
                        >
                            Make a Call
                        </button>

                        <p className="text-gray-400 mb-6 mt-8">Talk To Our Team! We're Just A Call Away!</p>

                    </div>
                </div>
            </div>

            <FooterBlack/>

        </div>
    );
}

export default Contact;
