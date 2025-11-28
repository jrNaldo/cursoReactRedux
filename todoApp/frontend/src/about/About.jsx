import React from "react";
import PageHeader from "../template/PageHeader";
import '../css/About.css'

export default props => {
    return (
        <div className="About">
            <PageHeader name='Sobre' small='Nós'/>
            <h2>Nossa Historia</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, expedita!</p>
            <h2>Missão e Visão</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, distinctio.</p>
            <h2>Imprensa</h2>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
    )
}