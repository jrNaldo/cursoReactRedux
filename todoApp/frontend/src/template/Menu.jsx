import React from "react";
import { Link } from "react-router-dom";

export default props => {
    return (
        <div>
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