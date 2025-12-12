import React from "react";
import '../css/app.css'
import Header from "../templates/Header";
import Footer from "../templates/Footer";
import MainRouter from "./MainRouter";

function App (props: any){
    return (
        <div className="App">
            <Header />
            <MainRouter />
            <Footer />
        </div>
    )
}

export default App