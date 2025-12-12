import React from "react";
import '../css/Componente.css'

interface IContentProps{
    children: any
}

function Content(props: IContentProps){
    return(
        <section className="Content">
            {props.children}
        </section>
    )
}

export default Content