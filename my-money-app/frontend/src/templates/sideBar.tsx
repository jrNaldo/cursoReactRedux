import React from "react";
import Menu from "./Menu";
import '../css/sideBar.css'

function SideBar(props: any){
    return (
        <aside className="mainSideBar">
            <section className="sideBar">
                <Menu/>
            </section>
        </aside>
    )
}

export default SideBar