import React from "react";
import MenuItem from "./MenuItem";
import '../css/Menu.css'
import MenuTree from "./MenuTree";

function Menu(props: any){
    return (
        <ul className="sideBarMenu mainUl">
            <MenuItem path='#' label='Dashboard'/>
            <MenuTree label="Cadastro">
                <MenuItem path='#' label='Ciclo de Pagamentos'/>
            </MenuTree>
        </ul>
    )
}

export default Menu