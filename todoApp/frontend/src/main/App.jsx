import React from "react";
import Content from "../template/Content";
import Menu from "../template/Menu";
import { BrowserRouter } from "react-router-dom";
import '../css/App.css'

export default props => {
    return (
        <div className="App">
            <BrowserRouter>
                <Menu/>
                <Content/>
            </BrowserRouter>
        </div>
    )
}