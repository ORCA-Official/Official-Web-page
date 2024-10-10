import React from 'react';
import PageTitles from "../../components/core/PageTitles"
import WhoWeAre from "../../components/about/WhoWeAre";
import WhatWeDo from "../../components/about/WhatWeDo";

const About = () => {
    return (
        <div className="w-full">
            <WhoWeAre/>
            <WhatWeDo/>
        </div>
    )
}

export default About;
