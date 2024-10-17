
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from "./view/Home/About";
import Home from "./view/Home/Home";
import Project from "./view/project/Project";
import Contact from "./components/home/Contact";
import Loader from "./components/core/Loader";
import {useEffect, useState} from "react";


function App() {

    const [isLoading, setIsLoading] = useState(true); // Add loading state

    useEffect(() => {
        const handleLoad = () => {
            setIsLoading(false);
        };
        window.addEventListener('load', handleLoad);

        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    return (
        <>
            {isLoading ? (
                <Loader />
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
