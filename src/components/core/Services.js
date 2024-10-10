// ** React Imports
import React, {useState} from "react";

// ** React Icon Imports
import { BsArrowDownRight } from "react-icons/bs";

// ** Service Data Imports
import {data} from '../../utils/services'

const Services = () => {
    return (
        <div className={'w-full'}>
            <div className={'flex flex-wrap justify-between'}>
                {data.map((service, index) => (
                    <ServiceCard service={service} index={index} />
                ))}
            </div>
        </div>
    )
}

export default Services


const ServiceCard = ({service, index}) => {

    const [clicked, setClicked] = useState(false);

    const expand = () => {
        setClicked(!clicked)
    }

    const arrowStyle = {
        transform: clicked ? 'rotate(45deg)' : 'rotate(0deg)',
        transition: 'transform 0.3s ease-in-out'
    };

    return (
        <div onClick={expand} className={`transition-all duration-300 ease-in-out h-max w-full flex-grow-0 border-b border-gray-400
            ${index < 2 ? 'border-y' : ''} 
            ${clicked ? 'max-h-96 opacity-100' : ' max-h-12 overflow-hidden'} cursor-pointer`}
        >
            <div className={'w-full h-full'}>
                <div className={`w-full flex justify-between font-Lato items-center p-2 ${clicked ? 'text-white bg-black' : 'hover:text-white hover:bg-black'}`}>
                    <div className={'text-xl'}>
                        <span className={'text-lg'}>{(index + 1).toString().padStart(2, '0')}. </span>
                        <span>{service.name}</span>
                    </div>

                    <BsArrowDownRight style={arrowStyle} />
                </div>

                <div className={`pl-8 py-4 transition-all duration-300 ease-in-out ${clicked ? 'opacity-100' : 'opacity-0'}`}>
                    <div className={'mt-1 flex flex-wrap gap-2'}>
                        {service.stack.map((text) => (
                            <span className={'px-1 py-0.5 border rounded-md border-black'}>{text}</span>
                        ))}
                    </div>

                    <div className={'pt-4 pb-2'}>
                        <p>{service.details}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}