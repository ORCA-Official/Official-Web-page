import React, { useEffect, useState } from 'react';

const VisitorCounter = () => {
    const [visitorCount, setVisitorCount] = useState(0);

    useEffect(() => {
        // Get the current count from local storage
        const count = localStorage.getItem('visitorCount');
        const hasVisited = localStorage.getItem('hasVisited');

        // If the user has not visited before, increment the count
        if (!hasVisited) {
            const newCount = count ? parseInt(count) + 1 : 1;
            setVisitorCount(newCount);
            localStorage.setItem('visitorCount', newCount);
            localStorage.setItem('hasVisited', true); // Mark the user as visited
        } else {
            setVisitorCount(count);
        }
    }, []);

    return (
        <div>
            <h2>Visitor Count: {visitorCount}</h2>
        </div>
    );
};

export default VisitorCounter;
