import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactGA from 'react-ga';
import About from "./view/Home/About";
import Home from "./view/Home/Home";
import Project from "./view/project/Project";
import Contact from "./components/home/Contact";
import Loader from "./components/core/Loader";
import VisitorCounter from './components/core/VisitorCounter'; // Import the VisitorCounter

const TRACKING_ID = "G-MSS7E945B5"; // Replace with your tracking ID
ReactGA.initialize(TRACKING_ID);

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <BrowserRouter>
            <VisitorCounter /> {/* Include VisitorCounter here */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/project" element={<Project />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/*" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
