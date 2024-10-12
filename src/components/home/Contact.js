import React from 'react';
/*import PageTitles from "../core/PageTitles";*/
import {HomeTitles} from "../core/HomeTitles";




const Contact = () => {
    return (
        <>
            {/*<PageTitles bgtitle={'Get In Touch'} title={'Contact Us'} />*/}
            <HomeTitles title={'CONTACT US'} number={4} reverse={true}/>

            <div className="relative text-center bg-black py-20 text-white min-h-screen flex flex-col items-center justify-center">
                {/* Background Title */}
                <h1 className="absolute inset-x-0 top-16 text-8xl font-bold text-white opacity-10">
                    GET IN TOUCH
                </h1>

                {/* Foreground Title */}
                <h2 className="relative z-10 text-4xl font-bold mb-16">CONTACT US</h2>

                {/* Contact Options */}
                <div className="relative z-10 mt-8 grid grid-cols-1 gap-8 md:grid-cols-3 justify-center">
                    {/* Chat Now Card */}
                    <div className="bg-black border border-gray-700 p-12 rounded-xl shadow-[0_0_15px_5px_rgba(255,255,255,0.2)] hover:shadow-[0_0_20px_8px_rgba(255,255,255,0.5)] transition-all transform hover:-translate-y-4 w-80">
                        <div className="text-6xl mb-6 text-white">
                            <i className="fas fa-comments text-white"></i> {/* Set icon color to white */}
                        </div>
                        <h3 className="text-2xl font-semibold mb-4">Chat Now</h3>

                        {/* Button */}
                        <button className="bg-white text-black font-medium py-2 px-4 rounded hover:bg-gray-300 transition">
                            Start Chat
                        </button>

                        <p className="text-gray-400 mb-6 mt-8">Quick Answers Anytime! We're Online To Help!</p>

                    </div>

                    {/* Email Us Card */}
                    <div className="bg-black border border-gray-700 p-12 rounded-xl shadow-[0_0_15px_5px_rgba(255,255,255,0.2)] hover:shadow-[0_0_20px_8px_rgba(255,255,255,0.5)] transition-all transform hover:-translate-y-4 w-80">
                        <div className="text-6xl mb-6 text-white">
                            <i className="fas fa-envelope text-white"></i> {/* Set icon color to white */}
                        </div>
                        <h3 className="text-2xl font-semibold mb-4">Email Us</h3>
                        {/* Button */}
                        <button className="bg-white text-black font-medium py-2 px-4 rounded hover:bg-gray-300 transition">
                            Send Email
                        </button>
                        <p className="text-gray-400 mb-6 mt-8">Get A Response Soon! Reach Us Anytime!</p>

                    </div>

                    {/* Call Us Card */}
                    <div className="bg-black border border-gray-700 p-12 rounded-xl shadow-[0_0_15px_5px_rgba(255,255,255,0.2)] hover:shadow-[0_0_20px_8px_rgba(255,255,255,0.5)] transition-all transform hover:-translate-y-4 w-80">
                        <div className="text-6xl mb-6 text-white">
                            <i className="fas fa-phone text-white"></i> {/* Set icon color to white */}
                        </div>
                        <h3 className="text-2xl font-semibold mb-4">Call Us</h3>

                        {/* Button */}
                        <button className="bg-white text-black font-medium py-2 px-4 rounded hover:bg-gray-300 transition">
                            Make a Call
                        </button>

                        <p className="text-gray-400 mb-6 mt-8">Talk To Our Team! We're Just A Call Away!</p>

                    </div>
                </div>
            </div>

        </>
    );
}

export default Contact;
