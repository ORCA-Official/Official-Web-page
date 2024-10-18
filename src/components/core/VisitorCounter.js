import React, { useEffect, useState } from 'react';

const VisitorCounter = () => {
    const [visitorCount, setVisitorCount] = useState(0);

    useEffect(() => {
        // Get the current count from local storage
        const count = localStorage.getItem('visitorCount');

        // Increment the count every time the component is mounted
        const newCount = count ? parseInt(count) + 1 : 1;
        setVisitorCount(newCount);
        localStorage.setItem('visitorCount', newCount);
    }, []);

    return (
        <div className={'hidden'}>
            <h2>Visitor Count: {visitorCount}</h2>
        </div>
    );
};

export default VisitorCounter;
