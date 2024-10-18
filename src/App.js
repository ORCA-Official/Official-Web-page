import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';
import About from "./view/Home/About";
import Home from "./view/Home/Home";
import Project from "./view/project/Project";
import Contact from "./components/home/Contact";
import Loader from "./components/core/Loader";
import VisitorCounter from './components/core/VisitorCounter'; // Import the VisitorCounter

const TRACKING_ID = "G-1TCX62QTRC"; // Replace with your actual tracking ID
ReactGA.initialize(TRACKING_ID);

const App = () => {
    const [loading, setLoading] = useState(true);
    const location = useLocation(); // Get the current location

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        // Track page views
        ReactGA.pageview(location.pathname + location.search);
    }, [location]); // Add location as a dependency

    if (loading) {
        return <Loader />;
    }

    return (
        <div>
            <VisitorCounter /> {/* Include VisitorCounter here */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/project" element={<Project />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/*" element={<Home />} />
            </Routes>
        </div>
    );
};

const MainApp = () => (
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

export default MainApp;
