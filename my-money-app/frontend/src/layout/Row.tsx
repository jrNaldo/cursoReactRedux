import React from "react";

interface IRowProps {
    children: any
}

function Row(props: IRowProps){
    return(
        <div className="row">
            {props.children}
        </div>
    )
}

export default Row