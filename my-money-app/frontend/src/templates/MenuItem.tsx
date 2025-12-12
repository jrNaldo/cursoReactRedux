import React from "react";
import '../css/Menu.css'

interface IMenuItensProps{
    path: string
    label: string
}

function MenuItem(props: IMenuItensProps){
    return (
        <li>
            <a href={props.path} >{props.label}</a>
        </li>
    )
}

export default MenuItem