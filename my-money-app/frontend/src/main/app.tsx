import React from "react";
import '../css/app.css'
import Header from "../templates/Header";
import SideBar from "../templates/sideBar";
import Footer from "../templates/Footer";

function App (props: any){
    return (
        <div className="App">
            <Header />
            <SideBar />
            <Footer />
        </div>
    )
}

export default App