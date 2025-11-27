import React from "react";
import Content from "../template/Content";
import Menu from "../template/Menu";
import { BrowserRouter } from "react-router-dom";

export default props => {
    return (
        <BrowserRouter>
            <Menu/>
            <Content/>
        </BrowserRouter>
    )
}