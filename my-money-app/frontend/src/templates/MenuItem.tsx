import React from "react";
import '../css/Menu.css'
import { Link } from "react-router-dom";

interface IMenuItensProps{
    path: string
    label: string
}

function MenuItem(props: IMenuItensProps){
    return (
        <li>
            <Link to={props.path} >{props.label}</Link>
        </li>
    )
}

export default MenuItem