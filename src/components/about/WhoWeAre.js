import React from "react";
import PageTitles from "../core/PageTitles";
import I from "../../assets/images/image.png";

const WhoWeAre = () => {
    return (
        <div className={`w-full bg-black bg-cover bg-center h-screen`}>

            <PageTitles
                dark={true}            // Use `true` if you want the dark mode
                title="About Us"
                bgtitle="Who we are"
            />

            {/* Paragraph - Company description */}

            <div className="mt-60">
                <p className="text-lg md:text-xl font-light text-gray-300 max-w-4xl relative z-10">
                    At Orca Tech Solutions, we are passionate about leveraging the power of technology to drive
                    innovation and solve complex business challenges. With a team of skilled software engineers,
                    we specialize in delivering tailored digital solutions that empower businesses to thrive in a
                    rapidly evolving digital landscape.
                </p>

                <p className="text-lg md:text-xl font-light text-gray-300 max-w-4xl relative z-10">
                    Founded on the principles of excellence, creativity, and collaboration, we pride ourselves on
                    our ability to transform ideas into reality. Whether it's custom software development, cloud
                    solutions, or mobile app development, we work closely with our clients to ensure that every
                    solution is designed with precision and tailored to their unique needs.
                </p>
            </div>

        </div>

    )
}

export default WhoWeAre;
