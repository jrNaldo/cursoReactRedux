import React from "react";
import ReactDOM from 'react-dom'
import {createRoot} from 'react-dom/client'
import App from './main/App';
import { applyMiddleware , configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import '../src/css/global.css'
import reducers from "./main/reducers";
import promise from 'redux-promise'
import multi from 'redux-multi'
import { thunk } from "redux-thunk";


const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(thunk, multi, promise)(configureStore)({reducer: reducers, devTools})
const path = document.getElementById('root')
const root = createRoot(path)

root.render(
    <Provider store={store}>
        <App/>
    </Provider>
)
