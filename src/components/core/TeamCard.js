import React from 'react';

const TeamCard = ({ img, name, details }) => {
    return (

        <div className="relative container mx-auto mt-40 px-4 text-center">
            <div className="flex flex-wrap justify-center gap-8 mt-20">

                {/* Team Member 1 */}
                <div className="flex flex-row max-w-xs">
                    <article className="relative flex flex-col justify-end overflow-hidden rounded-2xl p-4 pb-8 pt-40 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <img src={img} alt={name} className="absolute inset-0 h-full w-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                        <h3 className="z-10 mt-4 text-3xl font-bold text-white">{name}</h3>
                        <p className="z-10 text-sm leading-6 text-gray-300">{details}</p>
                    </article>
                </div>

            </div>
        </div>
    );
}

export default TeamCard;
;