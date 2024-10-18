import React from "react";
import PageTitles from "../core/PageTitles";
import TeamCard from "../core/TeamCard";
import I from "../../assets/images/aboutBG.png";
import dushan from "../../assets/images/Dushan.png";
import ishan from "../../assets/images/Ishan.png";
import dilan from "../../assets/images/Dilan.png";
import chathuska from "../../assets/images/Chathushka.png";
import thinusha from "../../assets/images/Thinusha.png";
import rusiru from "../../assets/images/Rusiru.png";

const teamMembers = [
    { img: ishan, name: 'Ishan Dhananjana', details: 'Software Engineer' },
    { img: dushan, name: 'Dushan Malinda', details: 'Software Engineer' },
    { img: dilan, name: 'Tharindu Dilan', details: 'Software Engineer' },
    { img: chathuska, name: 'Chathushka Madumal', details: 'Software Engineer' },
    { img: thinusha, name: 'Thinusha Supun Dilhara ', details: 'Software Engineer' },
    { img: rusiru, name: 'Rusiru H. Dasanayaka', details: 'Software Engineer' }
    // You can add more team members here
];

const MindsBehind = () => {
    const backgroundStyle = {
        backgroundImage: `url(${I})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
    };
    //Background Image

    return (
        <div className={`w-full bg-black bg-cover bg-center min-h-screen`} style={backgroundStyle}>

            <PageTitles
                dark={true}            // Use `true` if you want the dark mode
                title="OUR TEAM"
                bgtitle="MINDS BEHIND"
            />

            <div className="px-24 pb-4">
                <div className="flex flex-wrap sm:gap-y-6 gap-y-4 gap-x-20 justify-center ">
                    {teamMembers.map((member, index) => (
                        <TeamCard
                            key={index}
                            img={member.img}
                            name={member.name}
                            details={member.details}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MindsBehind;
