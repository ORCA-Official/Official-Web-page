import React from 'react';
import PageTitles from "../../components/core/PageTitles"
import WhoWeAre from "../../components/about/WhoWeAre";
import WhatWeDo from "../../components/about/WhatWeDo";
import MindsBehind from "../../components/about/MindsBehind";

const About = () => {
    return (
        <div className="w-full">
            <WhoWeAre/>
            <WhatWeDo/>
            <MindsBehind/>
        </div>
    )
}

export default About;
