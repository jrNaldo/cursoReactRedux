import React, {Component} from "react";
import '../css/todoForm.css'
import { connect } from "react-redux";
import { add, changeDescription, search } from "./TodoActions";
import { bindActionCreators } from "redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";

class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    keyHandler (e) {
        const {add, description, search} = this.props
        if(e.key === 'Enter'){
            add(description)
        }
    }
    
    componentWillMount() {
        this.props.search()
    }
    
    render() {
        const {add, description, search} = this.props
        return (
            <div role="form" className="todoForm">
                <input 
                    id="description" 
                    className="form-control" 
                    placeholder="Adicione uma tarefa" 
                    onKeyUp={this.keyHandler}
                    value={description} 
                    onChange={this.props.changeDescription}
                />
                <FontAwesomeIcon icon={faPlus} className='primary' onClick={() => add(description)}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faSearch} className="primary" onClick={() => search()}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({description: state.todo.description})
const mapDispatchToProps = dispatch => bindActionCreators({changeDescription,search, add}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)