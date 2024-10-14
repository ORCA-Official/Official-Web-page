import React from 'react';
import {FaFacebook, FaGithub, FaLinkedinIn, FaWhatsapp} from "react-icons/fa";

const Footer = () => {
    return (
        /*<>
            <div className="relative py-10 pt-50 bg-gray-50 dark:bg-black sm:pt-16 lg:pt-10">
                <div className="px-22 mx-auto sm:px-6 lg:px-4 max-w-6xl">
                    <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
                        <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8 lg:pl-6">  {/!* Added lg:pl-6 to move left *!/}
                            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">ORCA</p>

                            <ul className="absolute right-8 flex flex-col space-y-6 sm:space-y-8 md:space-y-10 lg:top-[10%]">
                                <li>
                                    <a href="#" title="" className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-gray-600 focus:bg-gray-600">
                                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                            <path
                                                d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
                                            ></path>
                                        </svg>
                                    </a>
                                </li>

                                <li>
                                    <a href="#" title="" className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-gray-600">
                                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                                        </svg>
                                    </a>
                                </li>

                                <li>
                                    <a href="#" title="" className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-gray-600">
                                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                                            <circle cx="16.806" cy="7.207" r="1.078"></circle>
                                            <path
                                                d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"
                                            ></path>
                                        </svg>
                                    </a>
                                </li>

                                <li>
                                    <a href="#" title="" className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-gray-600 focus:bg-gray-600">
                                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                                            ></path>
                                        </svg>
                                    </a>
                                </li>
                            </ul>

                        </div>

                        <div>
                            <p className="text-sm font-semibold tracking-widest text-gray-300 uppercase">Company</p>

                            <ul className="mt-2 space-y-4">
                                <li>
                                    <a href="#" title="" className="flex text-base text-gray-400 transition-all duration-200 hover:text-gray-600"> About </a>
                                </li>

                                <li>
                                    <a href="#" title="" className="flex text-base text-gray-400 transition-all duration-200 hover:text-gray-600 focus:text-gray-600"> Team </a>
                                </li>

                                <li>
                                    <a href="#" title="" className="flex text-base text-gray-400 transition-all duration-200 hover:text-gray-600 focus:text-gray-600"> Project </a>
                                </li>

                                <li>
                                    <a href="#" title="" className="flex text-base text-gray-400 transition-all duration-200 hover:text-gray-600 focus:text-gray-600"> Career </a>
                                </li>

                                <li>
                                    <a href="#" title="" className="flex text-base text-gray-400 transition-all duration-200 hover:text-gray-600 focus:text-gray-600"> Contact Us </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="text-sm font-semibold tracking-widest text-gray-300 uppercase">Useful Links</p>

                            <ul className="mt-6 space-y-4">
                                <li>
                                    <a href="#" title="" className="flex text-base text-gray-400 transition-all duration-200 hover:text-gray-600 focus:text-gray-600"> Privacy Policy </a>
                                </li>

                                <li>
                                    <a href="#" title="" className="flex text-base text-gray-400 transition-all duration-200 hover:text-gray-600 focus:text-gray-600"> Terms & Service</a>
                                </li>

                                <li>
                                    <a href="#" title="" className="flex text-base text-gray-400 transition-all duration-200 hover:text-gray-600 focus:text-gray-600"> Cookie Policy </a>
                                </li>

                                <li>
                                    <a href="#" title="" className="flex text-base text-gray-400 transition-all duration-200 hover:text-gray-600 focus:text-gray-600"> Cookie Settings </a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
                            <p className="text-sm font-semibold tracking-widest text-gray-300 uppercase">Subscribe to newsletter</p>

                            <form action="#" method="POST" className="mt-6">
                                <div>
                                    <label htmlFor="email" className="sr-only">Email</label>
                                    <input type="email" name="email" id="email" placeholder="Enter your email" className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                                </div>

                                <button type="submit" className="inline-flex items-center justify-center px-6 py-4 mt-3 font-semibold text-white transition-all duration-200 bg-black rounded-md hover:bg-gray-600 focus:bg-gray-600">Email Us</button>
                            </form>
                        </div>
                    </div>

                    <hr className="mt-16 mb-10 border-gray-200" />

                    <p className="text-sm text-center text-gray-300">© 2024 ORCA Tech Solutions. All Rights Reserved</p>
                </div>
            </div>
        </>*/

        <footer className="bg-black text-surface dark:text-white text-center lg:text-left">
            <div className="container mx-auto p-6 lg:p-10">
                <div className="flex flex-col lg:flex-row lg:justify-between gap-10">

                    {/* Newsletter Section (First on small screens, last on large screens) */}
                    <div className="order-1 lg:order-4 w-full lg:w-auto">
                        <h5 className="mb-4 font-bold uppercase">Subscribe to our newsletter</h5>
                        <p className="text-white mb-4 p-4 bg-gray-900">
                            Get the latest updates on tech trends, company news, and our latest projects delivered straight to your inbox.
                        </p>
                        <div className="relative w-full max-w-lg mx-auto lg:mx-0">
                            <input
                                className="w-full py-3 px-4 text-black border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                                type="email"
                                name="email"
                                placeholder="Enter Email"
                                required
                            />
                            <button
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 py-2 px-4 bg-gray-900 text-white rounded-full hover:bg-gray-800">
                                Submit
                            </button>
                        </div>
                    </div>

                    {/* ORCA Section */}
                    <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start">
                        <h5 className="mb-4 font-bold uppercase">ORCA</h5>
                    </div>

                    {/* Company Links */}
                    <div className="order-3 lg:order-2 flex flex-col items-center lg:items-start">
                        <h5 className="mb-4 font-bold uppercase">Company</h5>
                        <ul>
                            <li><a href="#" className="text-white hover:underline">About Us</a></li>
                            <li><a href="#" className="text-white hover:underline">Teams</a></li>
                            <li><a href="#" className="text-white hover:underline">Projects</a></li>
                            <li><a href="#" className="text-white hover:underline">Careers</a></li>
                            <li><a href="#" className="text-white hover:underline">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Useful Links */}
                    <div className="order-4 lg:order-3 flex flex-col items-center lg:items-start">
                        <h5 className="mb-4 font-bold uppercase">Useful Links</h5>
                        <ul>
                            <li><a href="#" className="text-white hover:underline">Privacy Policy</a></li>
                            <li><a href="#" className="text-white hover:underline">Terms of Service</a></li>
                            <li><a href="#" className="text-white hover:underline">Cookie Policy</a></li>
                            <li><a href="#" className="text-white hover:underline">Cookie Settings</a></li>
                        </ul>
                    </div>

                    {/* Social Media Icons */}
                    <div className="order-5 lg:order-5 flex justify-center lg:justify-start space-x-4">
                        <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full hover:bg-gray-600">
                            <FaLinkedinIn className="text-white" />
                        </a>
                        <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full hover:bg-gray-600">
                            <FaGithub className="text-white" />
                        </a>
                        <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full hover:bg-gray-600">
                            <FaFacebook className="text-white" />
                        </a>
                        <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full hover:bg-gray-600">
                            <FaWhatsapp className="text-white" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="bg-black/10 p-4 text-white text-center">
                © 2023 Copyright:
                <a href="https://tw-elements.com/" className="text-white hover:underline">TW Elements</a>
            </div>
        </footer>



    );
}

export default Footer;
