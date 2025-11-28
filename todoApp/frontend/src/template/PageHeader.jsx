import React from "react";
import '../css/PageHeader.css'

export default props => {
    return (
        <header className="page-header">
            <h2>{props.name} <small>{props.small}</small></h2>
        </header>
    )
}