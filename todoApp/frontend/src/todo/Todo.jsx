import React, { Component } from "react";
import PageHeader from "../template/PageHeader";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default class Todo extends Component{
    constructor(props) {
        super(props)

        this.state = {description: '', list: []}
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.refresh()
    }

    handleMarkAsDone(todo) {
        fetch(`http://localhost:3001/tarefas/${todo._id}`,{
            method: 'PUT',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                done: true
            })
        }).then(resp => this.refresh())
    }

    handleMarkAsPending(todo) {
        fetch(`http://localhost:3001/tarefas/${todo._id}`,{
            method: 'PUT',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                done: false
            })
        }).then(resp => this.refresh())
    }

    async handleAdd() {
        const description = this.state.description
        try{
            await fetch('http://localhost:3001/tarefas', {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({description})
             })
                .then(resp => this.refresh())
                .catch(e => console.log(e))
                    
            console.log("sucesso")  
        }catch(e){
            console.log(`Erro: ${e}`)
        }
    }
        
    handleChange(e) {
        this.setState({description: e.target.value})
    }

    handleRemove(todo) {
        fetch(`http://localhost:3001/tarefas/${todo._id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        }).then(resp => this.refresh())
    }
        
    async refresh() {
        const description = this.state.description
        try{
            const respostaServer = await fetch('http://localhost:3001/tarefas?sort=-createdAt')
            if(!respostaServer.ok) return console.log('Erro na resposta do server - ', respostaServer.status)

            const dados = await respostaServer.json()
            this.setState({description: '', list: dados})
            console.log(dados)
        }
        catch(e){
            console.log("Erro ", e)
        }
    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'/>
                <TodoForm description={this.state.description} handleAdd={this.handleAdd} handleChange={this.handleChange}/>
                <TodoList 
                    list={this.state.list} 
                    handleRemove={this.handleRemove} 
                    handleMarkAsDone={this.handleMarkAsDone} 
                    handleMarkAsPending={this.handleMarkAsPending}
                />
            </div>
        )
    }
}