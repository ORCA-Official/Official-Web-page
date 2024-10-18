import React from 'react';
import '../../assets/css/loader.css';

const Loader: React.FC = () => {
    return (
        <div className="loader-container">
            <svg className="loader-svg" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
                <text x="50%" y="80" textAnchor="middle" className="loader-text" filter="url(#glow)">
                    <tspan className="animate-draw-o">O</tspan>
                    <tspan className="animate-draw-a">A</tspan>
                </text>
            </svg>
        </div>
    );
};

export default Loader;
