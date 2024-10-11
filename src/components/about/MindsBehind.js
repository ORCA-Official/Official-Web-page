import React from "react";
import PageTitles from "../core/PageTitles";
import TeamCard from "../core/TeamCard";
import I from "../../assets/images/aboutBG.png";
import People from "../../assets/images/people.jpg";
import img1 from "../../assets/images/people.jpg";

const MindsBehind = () => {
    const teamMembers = [
        { img: img1, name: 'John Doe', details: 'Software Engineer' },
        { img: img1, name: 'John Doe', details: 'Software Engineer' },
        { img: img1, name: 'John Doe', details: 'Software Engineer' },
        { img: img1, name: 'John Doe', details: 'Software Engineer' }
        // You can add more team members here
    ];

    const backgroundStyle = {
        backgroundImage: `url(${I})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
    };
    //Background Image

    return (
        <div className={`w-full bg-black bg-cover bg-center h-screen`} style={backgroundStyle}>

            <PageTitles
                dark={true}            // Use `true` if you want the dark mode
                title="OUR TEAM"
                bgtitle="MINDS BEHIND"
            />

            <div className="container mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2">
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
