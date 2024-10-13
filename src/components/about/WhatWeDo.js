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
            <Services/>

        </div>
    )
}

export default WhatWeDo;