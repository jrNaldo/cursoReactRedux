import React from "react";
import '../css/todoForm.css'
import IconButton from "../template/IconButton";
export default props => {
    const keyHandler = (e) => {
        if(e.key === 'Enter'){
            props.handleAdd()
        }
    }
    return (
        <div role="form" className="todoForm">
            <input 
                id="description" 
                className="form-control" 
                placeholder="Adicione uma tarefa" 
                onChange={props.handleChange}
                onKeyUp={keyHandler}
                value={props.description} 
            />
            <IconButton icon='faPlus' style='primary' onClick={props.handleAdd}></IconButton>
        </div>
    )
}