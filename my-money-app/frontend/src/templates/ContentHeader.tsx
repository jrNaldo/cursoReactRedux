import React from "react";
import '../css/Componente.css'

interface IContentHeader {
    title: string
    small: string
}

function ContentHeader(props: IContentHeader) {
    return (
        <section className="ContentHeader">
            <h1>{props.title} <small>{props.small}</small></h1>
        </section>
    )
}

export default ContentHeader