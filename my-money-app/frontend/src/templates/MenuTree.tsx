import React, { useState } from "react";

interface IMenuTreeProps{
    label: string
    children?: any
}

function MenuTree(props: IMenuTreeProps){
    const [aberto, setAberto] = useState(true)
    return (
        <li onClick={() => setAberto(!aberto)}>
            <a>{props.label}</a>
            {aberto ? props.children: false}
        </li>
    )
}

export default MenuTree