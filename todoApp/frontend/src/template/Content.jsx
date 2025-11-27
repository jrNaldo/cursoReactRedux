import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../about/About";
import Todo from "../todo/Todo";

export default props => {
    return (
        <div>
            <Routes>
                <Route path="/todo" element={<Todo/>}></Route>
                <Route path="/about" element={<About/>}></Route>
            </Routes>
        </div>
    )
}