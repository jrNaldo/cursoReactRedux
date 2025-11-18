import React from "react";
import { Routes, Route } from "react-router-dom";
import './Content.css'

import Home from "../../views/examples/Home";
import NotFound from "../../views/examples/404";
import UseState from "../../views/examples/UseState";
import UseEffect from "../../views/examples/UseEffect";
import UseRef from "../../views/examples/UseRef";
import UseMemo from "../../views/examples/UseMemo";
import UseCallback from "../../views/examples/UseCallback";
import UseContext from "../../views/examples/UseContext";

const Content = props => {
    return (
        <main className="Content">
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="*" element={<NotFound/>}/>
                <Route path="/usestate" element={<UseState/>}></Route>
                <Route path="/useeffect" element={<UseEffect/>}></Route>
                <Route path="/useref" element={<UseRef/>}></Route>
                <Route path="/usememo" element={<UseMemo/>}></Route>
                <Route path="/usecallback" element={<UseCallback/>}></Route>
                <Route path="/usecontext" element={<UseContext/>}></Route>
            </Routes>
        </main>
    )
}

export default Content