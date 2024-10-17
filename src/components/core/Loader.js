import React from 'react';
import '../../assets/css/loader.css';

const Loader: React.FC = () => {
    return (
        <div className="loader-container">
            <svg width="200" height="100" viewBox="0 0 200 100">
                <defs>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
                <text x="10" y="80" fontSize="80" fontWeight="bold" fill="none" stroke="#ffffff" strokeWidth="2" filter="url(#glow)">
                    <tspan className="animate-draw-o">O</tspan>
                    <tspan x="75" className="animate-draw-a">A</tspan>
                </text>
            </svg>
        </div>
    );
};

export default Loader;
