import React from 'react';
import img1 from "../../assets/images/people.jpg";



const TeamCard = ({ img, name, details }) => (
    <article className="relative flex flex-col justify-end overflow-hidden rounded-2xl p-8 pb-6 max-w-xs md:max-w-sm lg:max-w-md w-full h-full mx-auto mt-40 bg-gray-800">
        <img src={img} alt={name} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
        <h3 className="z-10 text-center mt-3 text-3xl font-bold text-white">{name}</h3>
        <div className="z-10 text-center text-sm leading-6 text-gray-300">{details}</div>
    </article>
);

export default TeamCard;
