import React from "react";
import '../css/TodoList.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCheck, faUndo } from "@fortawesome/free-solid-svg-icons";

export default props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
                    <tr key={todo._id}>
                        <td  className={todo.done ? 'markAsDone': 'markAsFalse'}>{todo.description}</td>
                        <td className="tdAction">
                            <span>
                                <FontAwesomeIcon icon={faTrash}  onClick={() => props.handleRemove(todo)}/>
                            </span>
                            <span >
                                <FontAwesomeIcon icon={faCheck} onClick={() => props.handleMarkAsDone(todo)}/>
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faUndo}  onClick={() => props.handleMarkAsPending(todo)}/>
                            </span>
                        </td>
                    </tr>
        ))
        
    }

    return (
        <table className="table"> 
            <thead>
                <tr>
                    <th>Descrição</th> 
                    <th>Ações</th> 
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}