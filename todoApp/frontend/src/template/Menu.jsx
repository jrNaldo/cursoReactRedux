import React from "react";
import { Link } from "react-router-dom";
import '../css/Menu.css'

export default props => {
    return (
        <div className="Menu">
            <ul>
                <li>
                    <Link to='/'>Todo</Link>
                </li>
                <li>
                    <Link to='/About'>Sobre</Link>
                </li>
            </ul>
        </div>
    )
}