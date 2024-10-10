import React from "react";

export const HomeTitles = ({reverse = false, dark = false, title, number}) => {
    return (
        <div className={`flex ${reverse ? 'flex-row-reverse' : 'flex-row'} justify-between px-8 pt-8 items-baseline 
                        ${dark ? 'text-white' : 'text-gray-900'}`}
        >
            <h1 className={'text-8xl font-bold font-kumar opacity-25'}>/{number}.</h1>
            <h2 className={'uppercase text-3xl font-bold font-montserrat'}>{title}</h2>
        </div>
    )
}
