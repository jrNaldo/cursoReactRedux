import React from "react";
import '../css/ValueBox.css'

interface IValueBoxProps {
    cor?: string
    value: string
    text: string
}

function ValueBox(props: IValueBoxProps){
    return (
        <div className={props.cor || 'red'}>
            <div className="inner">
                <h3>{props.value}</h3>
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default ValueBox