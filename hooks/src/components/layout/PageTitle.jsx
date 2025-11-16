import React from "react";
import './PageTitle.css'
const PageTitle =  props => {
    return (
        <div className="Card">
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
        
    )
}

export default PageTitle