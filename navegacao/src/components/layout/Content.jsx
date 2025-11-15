import React from "react";
import { Routes, Route } from "react-router-dom";
import './Content.css'

import Home from "../../views/examples/Home";
import About from "../../views/examples/About";
import Param from "../../views/examples/Param";
import NotFound from "../../views/examples/404";

const Content = props => {
    return (
        <main className="Content">
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Param/:id" element={<Param></Param>} />
                <Route path="/Param/:id" element={<Param></Param>} />
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </main>
    )
}

export default Content