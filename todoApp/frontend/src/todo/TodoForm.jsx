import React from "react";
import '../css/todoForm.css'
import IconButton from "../template/IconButton";
export default props => {
    return (
        <div role="form" className="todoForm">
            <input 
                id="description" 
                className="form-control" 
                placeholder="Adicione uma tarefa" 
                onChange={props.handleChange}
                value={props.description} 
            />
            <IconButton icon='faPlus' style='primary' onClick={props.handleAdd}></IconButton>
        </div>
    )
}