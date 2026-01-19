import React from "react";
import ReactDOM from 'react-dom'
import { createRoot } from "react-dom/client";

import App from "./main/app";
import { Provider } from "react-redux";
import { store } from "./main/store";

const cont = document.getElementById('root')!
const root = createRoot(cont)

root.render(
    <Provider store={store}>
        <App />
    </Provider>
)