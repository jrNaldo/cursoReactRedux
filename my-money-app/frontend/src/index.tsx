import React from "react";
import ReactDOM from 'react-dom'
import App from "./main/app";
import { createRoot } from "react-dom/client";

const cont = document.getElementById('root')!
const root = createRoot(cont)

root.render(
    <App/>
)