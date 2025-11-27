import React from "react";
import ReactDOM from 'react-dom'
import {createRoot} from 'react-dom/client'
import App from './main/App';
const path = document.getElementById('root')
const root = createRoot(path)

root.render(
    <App/>
)
