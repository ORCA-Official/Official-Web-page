import React from 'react';

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import About from "./view/Home/About";
import Home from "./view/Home/Home";
import Project from "./view/project/Project";
import Contact from "./components/home/Contact";

function App() {


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/project" element={<Project/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/*" element={<Home/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
