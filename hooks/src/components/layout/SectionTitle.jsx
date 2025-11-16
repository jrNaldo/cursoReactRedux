import React from "react";
import './SectionTitle.css';

const SectionTitle = props => {
    return (
        <div className="SectionCont">
            <h2 className="SectionTitle">{props.title}</h2>
        </div>
    )
}

export default SectionTitle