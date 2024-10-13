import React from "react";
import PageTitles from "../core/PageTitles";
import Services from "../core/Services";
const WhatWeDo = () => {
    return (
        <div>
            <PageTitles
                dark={false}            // Use `true` if you want the dark mode
                title="OUR SERVICES"
                bgtitle="what we do"
            />

            <div className={'w-full flex gap-x-10 gap-y-8 md:gap-y-0 md:flex-nowrap flex-wrap px-8 my-12'}>

                <div className={'md:w-2/5 w-full'}>
                    <p className={'text-md md:text-lg text-gray-700 font-poppins'}>At Orca Tech Solutions, we
                        offer a wide range of software engineering services designed to help businesses of all
                        sizes achieve their goals. Our expertise spans across web development, mobile
                        development, and standalone application development, delivering robust and scalable
                        solutions.</p>
                </div>
                <div className={'md:w-3/5 w-full '}>
                    <Services/>
                </div>
            </div>

        </div>
    )
}

export default WhatWeDo;