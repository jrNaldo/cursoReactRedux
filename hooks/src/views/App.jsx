import React from "react";
import {BrowserRouter} from 'react-router-dom'
import './App.css'
import Menu from "../components/layout/Menu";
import Content from "../components/layout/Content";

const App = props => {
    return (
        <div className="App">
            <BrowserRouter>
                <Menu ></Menu>
                <Content></Content>
            </BrowserRouter>
        </div>
    )
}

export default App