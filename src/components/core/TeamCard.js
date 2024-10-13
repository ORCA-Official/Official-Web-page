import React from 'react';



const TeamCard = ({ img, name, details }) => {

    const backgroundStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100%',
    };

    return (
        <div className={'min-w-56 h-72 flex flex-col justify-between pb-6 rounded-md'} style={backgroundStyle}>
            <div className="flex-grow"></div>
            <div>
                <h3 className="text-center mt-3 text-3xl font-bold text-white">{name}</h3>
                <div className="text-center text-sm leading-6 text-gray-300">{details}</div>
            </div>
        </div>
    )
}

export default TeamCard;
