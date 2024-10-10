import React from "react";
import PageTitles from "../core/PageTitles";
import I from "../../assets/images/aboutBG.png";

const MindsBehind = () => {

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
                title="OUR TEAM"
                bgtitle="MINDS BEHIND"
            />

        </div>
    )
}

export default MindsBehind;
