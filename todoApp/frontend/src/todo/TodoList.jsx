import React from "react";
import '../css/TodoList.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCheck, faUndo } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { MarkAsDone, MarkAsPending, Remove } from "./TodoActions";

function TodoList(props){
    const renderRows = () => {
        const list = props.list || []
        console.log(list)
        return list.map(todo => (
                    <tr key={todo._id}>
                        <td  className={todo.done ? 'markAsDone': 'markAsFalse'}>{todo.description}</td>
                        <td className="tdAction">
                            <span>
                                <FontAwesomeIcon icon={faTrash}  onClick={() => props.Remove(todo)}/>
                            </span>
                            <span >
                                <FontAwesomeIcon icon={faCheck} onClick={() => props.MarkAsDone(todo)}/>
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faUndo}  onClick={() => props.MarkAsPending(todo)}/>
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

const mapStateToProps = state => ({list: state.todo.list})
const mapDispatchToProps = dispatch => bindActionCreators({MarkAsDone, MarkAsPending, Remove}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)