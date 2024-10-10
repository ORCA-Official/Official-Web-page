import React from 'react';
import images from "../../images/about/aboutBG.png";
import people from "../../images/about/people.jpg";
import PageTitles from "../../components/core/PageTitles"
import TeamCard from "../../components/core/TeamCard";
import Footer from "../../components/Footer";
const About = () => {
    return(
        <>
            {/*----------------------------- Page 1 -----------------------------*/}
            <div className="min-h-screen flex flex-col items-center justify-center relative">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src={images}
                        alt="Background Image"
                        className="w-full h-full object-cover opacity-100"
                    />
                </div>

                {/* Content */}
                {/*<div className="absolute -mt-80 flex flex-col items-center justify-center h-full text-center text-white space-y-4 z-50">
                    <h1 className="text-9xl font-extrabold opacity-15">
                        WHO WE ARE
                    </h1>
                </div>

                <div className="absolute -mt-80 flex flex-col items-center justify-center h-full text-center text-white space-y-4 z-50">
                    <h2 className="text-4xl font-extrabold">
                        ABOUT US
                    </h2>
                </div>*/}

                <div>
                    <PageTitles
                        dark={true}            // Use `true` if you want the dark mode
                        title="About Us"
                        bgtitle="Who we are"    // Background title
                    />
                </div>

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

                {/* Start Your Project Button */}
                <div className="z-50">
                    <button className="px-6 py-3 text-lg font-semibold text-white bg-transparent border border-white rounded hover:bg-white hover:text-gray-900 transition duration-300">
                        Start Your Project
                    </button>
                </div>

                {/*px-6 py-3 text-lg font-semibold text-white bg-transparent border border-white rounded hover:bg-white hover:text-gray-900 transition duration-300*/}

            </div>

            {/*----------------------------- Page 2 -----------------------------*/}
            <div>
               {/* <div className="min-h-screen flex flex-col items-center justify-center relative bg-white">
                     Content
                    <div className="relative -mt-80 flex flex-col items-center justify-center h-full text-center text-gray-600 space-y-4">
                        <h1 className="text-9xl font-extrabold opacity-15">
                            WHAT WE DO
                        </h1>
                    </div>

                    <div className="absolute -mt-80 flex flex-col items-center justify-center h-full text-center text-black space-y-4">
                        <h2 className="text-4xl font-extrabold">
                            OUR SERVICES
                        </h2>
                    </div>
                </div>*/}

                   <div>
                       <PageTitles
                           dark={false}            // Use `true` if you want the dark mode
                           title="OUR SERVICES"
                           bgtitle="Who we are"    // Background title
                       />
                   </div>

                {/* Service items */}

                {/*<div>
                    <TeamCard
                        img={people}
                        name="Dushan"
                        details="Who we are"
                    />
                </div>*/}
                <div className="relative flex-auto container mx-auto mt-40 px-4 text-center">
                    <div className="flex flex-wrap justify-center gap-8">
                        <TeamCard
                            img={people}
                            name="John Doe"
                            details="John is a software engineer with 10 years of experience."
                        />
            </div>
            </div>
            </div>

            {/*----------------------------- Page 3 -----------------------------*/}

            <div className="min-h-screen flex flex-col items-center justify-center relative">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src={images}
                        alt="Background"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Background text "MINDS BEHIND" */}
                <div className="absolute -mt-80 flex flex-col items-center justify-center h-full text-center text-white space-y-4">
                    <h1 className="text-9xl font-extrabold opacity-15">
                        MINDS BEHIND
                    </h1>
                </div>

                {/* Foreground text "OUR TEAM" */}
                <div className="absolute -mt-80 flex flex-col items-center justify-center h-full text-center text-white space-y-4">
                    <h2 className="text-4xl font-extrabold">
                        OUR TEAM
                    </h2>
                </div>

                {/* Team Members Section */}
                {/*<div className="relative container mx-auto mt-40 px-4 text-center">
                    <div className="flex flex-wrap justify-center gap-8 mt-20">

                         Team Member 1
                        <div className="flex-1 max-w-xs">
                            <article className="relative flex flex-col justify-end overflow-hidden rounded-2xl p-4 pb-8 pt-40 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <img src={people} alt="Team Member" className="absolute inset-0 h-full w-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                                <h3 className="z-10 mt-4 text-3xl font-bold text-white">Architecture</h3>
                                <p className="z-10 text-sm leading-6 text-gray-300">
                                    An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio velna vitae auctor integer.
                                </p>
                            </article>
                        </div>

                         Team Member 2
                        <div className="flex-1 max-w-xs">
                            <article className="relative flex flex-col justify-end overflow-hidden rounded-2xl p-4 pb-8 pt-40 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <img src={people} alt="Team Member" className="absolute inset-0 h-full w-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                                <h3 className="z-10 mt-4 text-3xl font-bold text-white">Culinary</h3>
                                <p className="z-10 text-sm leading-6 text-gray-300">
                                    An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio velna vitae auctor integer.
                                </p>
                            </article>
                        </div>

                         Team Member 3
                        <div className="flex-1 max-w-xs">
                            <article className="relative flex flex-col justify-end overflow-hidden rounded-2xl p-4 pb-8 pt-40 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <img src={people} alt="Team Member" className="absolute inset-0 h-full w-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                                <h3 className="z-10 mt-4 text-3xl font-bold text-white">Design</h3>
                                <p className="z-10 text-sm leading-6 text-gray-300">
                                    An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio velna vitae auctor integer.
                                </p>
                            </article>
                        </div>

                         Team Member 4
                        <div className="flex-1 max-w-xs">
                            <article className="relative flex flex-col justify-end overflow-hidden rounded-2xl p-4 pb-8 pt-40 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <img src={people} alt="Team Member" className="absolute inset-0 h-full w-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                                <h3 className="z-10 mt-4 text-3xl font-bold text-white">Strategy</h3>
                                <p className="z-10 text-sm leading-6 text-gray-300">
                                    An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio velna vitae auctor integer.
                                </p>
                            </article>
                        </div>

                    </div>
                </div>*/}

                <div className="relative flex-auto container mx-auto mt-40 px-4 text-center">
                    <div className="flex flex-wrap justify-center gap-8">
                        <TeamCard
                            img={people}
                            name="John Doe"
                            details="John is a software engineer with 10 years of experience."
                        />
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    )
}

export default About;