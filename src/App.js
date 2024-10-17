import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from "./view/Home/About";
import Home from "./view/Home/Home";
import Project from "./view/project/Project";
import Contact from "./components/home/Contact";
import Loader from "./components/core/Loader";

function App() {
    // Correct use of useState outside of useEffect
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate an API call or data loading
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000); // 3 seconds to show full animation

        // Clean up the timer when the component unmounts
        return () => clearTimeout(timer);
    }, []); // Empty dependency array to run effect once when the component mounts

    return (
        <>
            {loading ? (
                <Loader/>
            ) : (
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/project" element={<Project/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="/*" element={<Home/>}/>
                    </Routes>
                </BrowserRouter>
            )}
        </>
    );
}

export default App;
