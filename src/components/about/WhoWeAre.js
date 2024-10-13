import React from "react";
import PageTitles from "../core/PageTitles";
import I from "../../assets/images/aboutBG.png";

const WhoWeAre = () => {

    const backgroundStyle = {
        backgroundImage: `url(${I})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
    };

    return (
        <div className={`w-full bg-black bg-cover bg-center h-screen`} style={backgroundStyle}>

            <PageTitles
                dark={true}            // Use `true` if you want the dark mode
                title="About Us"
                bgtitle="Who we are"
            />

            {/* Paragraph - Company description */}

            <div className="pt-6 pl-20 ">
                <p className="mt-20 text-lg md:text-xl font-light text-gray-300 pr-20 max-w-7xl relative z-10">
                    At Orca Tech Solutions, we are passionate about leveraging the power of technology to drive
                    innovation and solve complex business challenges. With a team of skilled software engineers,
                    we specialize in delivering tailored digital solutions that empower businesses to thrive in a
                    rapidly evolving digital landscape.
                </p>

                <p className="mt-8 text-lg md:text-xl font-light text-gray-300 pr-20 max-w-7xl relative z-10">
                    Founded on the principles of excellence, creativity, and collaboration, we pride ourselves on
                    our ability to transform ideas into reality. Whether it's custom software development, cloud
                    solutions, or mobile app development, we work closely with our clients to ensure that every
                    solution is designed with precision and tailored to their unique needs.
                </p>
            </div>

            {/* Start Your Project Button */}
            <div>
                <button className="m-20 mt-10 px-6 py-3 text-lg  text-white bg-transparent border border-white rounded hover:bg-white hover:text-gray-900 transition duration-300">
                    Start Your Project
                </button>
            </div>
        </div>
    )
}

export default WhoWeAre;
