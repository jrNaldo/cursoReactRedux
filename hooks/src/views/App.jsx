import React, { useState } from "react";
import {BrowserRouter} from 'react-router-dom'
import './App.css'
import Menu from "../components/layout/Menu";
import Content from "../components/layout/Content";
import { DataContext, data } from "../data/DataContext";
import Store from '../data/Store'

const App = props => {
    const [state, setState] = useState(data)

    return (
            <Store>
                <DataContext value={ {state, setState} }>
                    <div className="App">
                        <BrowserRouter>
                            <Menu ></Menu>
                            <Content></Content>
                    </BrowserRouter>
                    </div>
                </DataContext>
            </Store>
    )
}

export default App