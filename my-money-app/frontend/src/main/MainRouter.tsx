import React from "react";
import Router from "./routes";
import SideBar from "../templates/sideBar";
import { BrowserRouter } from "react-router-dom";

function MainRouter(props: any){
    return (
        <BrowserRouter>
            <Router/>
            <SideBar/>
        </BrowserRouter>
    )
}
export default MainRouter