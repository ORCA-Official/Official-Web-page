import oa_dark from "../../assets/images/oa.png";
import React from "react";
import {FaFacebook, FaGithub, FaLinkedinIn, FaWhatsapp} from "react-icons/fa";

const FooterBlack = () => {
    return (
        <div className={'w-full bg-black px-10 py-6 text-gray-200 font-Lato'}>
            <div className={'flex gap-x-10 flex-wrap justify-between'}>
                <div className={'lg:order-none lg:block hidden'}>
                    <img src={oa_dark} className={'w-14'} alt=""/>
                </div>
                <div className={'lg:order-none order-3 lg:w-auto md:pb-0 pb-6'}>
                    <p className="text-sm font-semibold tracking-widest text-gray-200 uppercase">Company</p>

                    <ul className="mt-2 space-y-2 text-gray-200 text-sm">
                        <li>About</li>

                        <li>Team</li>

                        <li>Project</li>

                        <li>Career</li>

                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className={'lg:order-none order-4 lg:w-auto md:pb-0 pb-8'}>
                    <p className="text-md font-semibold tracking-widest text-gray-200 uppercase">Useful Links</p>

                    <ul className="mt-2 space-y-2 text-gray-200 text-sm">
                        <li>Privacy Policy</li>

                        <li>Terms Of Service</li>

                        <li>Cookie Policy</li>

                        <li>Cookie Settings</li>
                    </ul>
                </div>
                <div className={'lg:order-none order-2 lg:w-auto md:w-full lg:pb-0 pb-6'}>
                    <span className={'text-xl font-bold font-poppins'}>Subscribe to our Newsletter</span>
                    <p className={'text-sm mt-2 mb-4'}>Get the latest updates on tech trends, company news, and our latest projects delivered
                        <br className={'md:block hidden'} /> straight to your inbox.</p>
                    <div className={'border-white border h-max flex lg:w-max rounded-md overflow-hidden'}>
                        <input className={'bg-black p-2 lg:w-80 flex-grow'} type={'email'}/>
                        <span className={'bg-white text-black p-2 cursor-pointer'}>Subscribe</span>
                    </div>
                </div>
                <div className={'lg:order-none order-5 flex xl:flex-col xl:justify-between justify-center xl:pb-10 pb-4 xl:gap-x-0 gap-x-4 xl:w-auto w-full'}>
                    <FaLinkedinIn className={'text-gray-200 cursor-pointer'}/>
                    <FaGithub className={'text-gray-200 cursor-pointer'}/>
                    <FaFacebook className={'text-gray-200 cursor-pointer'}/>
                    <FaWhatsapp className={'text-gray-200 cursor-pointer'}/>
                </div>
            </div>
            <p className={'text-xs text-center'}>© 2024 Orca Tech Solutions. All Rights Reserved.</p>
        </div>
    )
}

export default FooterBlack