import React from "react";
import ReactDOM from 'react-dom'
import { createRoot } from "react-dom/client";
// import { configureStore } from "@reduxjs/toolkit";
// import { Provider } from "react-redux";

import App from "./main/app";
// import reducers from './main/reducers'

// const store = configureStore({reducer: reducers})

const cont = document.getElementById('root')!
const root = createRoot(cont)

root.render(
    // <Provider store={store}>
        <App/>
    // </Provider>
)