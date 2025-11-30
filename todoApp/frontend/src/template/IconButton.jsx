import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome,faPlus} from '@fortawesome/free-solid-svg-icons'
import If from "./If";

export default props => {
    const iconSimbol = props.icon === 'faPlus';
    return (
        <If test ={!props.hide}>
            <button className={"btn btn-"+ props.style} onClick={props.onClick}>
                <FontAwesomeIcon icon={iconSimbol ? faPlus: faHome} />
            </button>
        </If>
    )
}
