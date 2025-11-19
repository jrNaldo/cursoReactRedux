import React, { useReducer, useState } from "react";
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

const initialState = {
    cart: [],
    products: [{}, {}],
    user: null,
    number: 0
}

function reducer(state, action){
    switch(action.type){
        case 'numberAdd2': 
            return {...state, number: state.number + 2}
        case 'login':
            return {...state, user: {name: action.payload}}
        case 'multiPor7':
            return {...state, number: state.number * 7}
        case 'dividirPor25':
            return {...state, number: state.number / 25}
        case 'aproximarNumero':
            return {...state, number: parseInt(state.number)}
        case 'addN':
            return {...state, number: state.number + action.payload}
        default: 
            return state
    }
}

const UseReducer = props => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [num, setNum] = useState(0)
    return(
        <div className="UseReducer">
            <PageTitle title='Hook UseReducer' subtitle='Uma outra forma de ter estado em componentes'/>
            <SectionTitle title='Exercício #01' />

            <div className="center">
                {state.user 
                    ? 
                    (<span className="text">{state.user.name}</span>): 
                    (<span className="text">Sem Usuario</span>) }

                <span className="text">{state.number}</span>
                <div>

                    <button className="btn" onClick={() => dispatch({type: 'login', payload: 'Naldo'})}>Login</button>

                    <button className="btn" onClick={() => dispatch({type: 'numberAdd2'})}>+2</button>

                    <button className="btn" onClick={() => dispatch({type: 'multiPor7'})}>*7</button>
                    
                    <button className="btn" onClick={() => dispatch({type: 'dividirPor25'})}>/25</button>

                    <button className="btn" onClick={() => dispatch({type: 'aproximarNumero'})}>Aproxima</button>

                    <button className="btn" onClick={() => dispatch({type: 'addN', payload: parseFloat(num)})}>{num}</button>
                </div>
                <input type="number" className="text" value={num} onChange={e => setNum(e.target.value)}/>
            </div>
        </div>
    )
}

export default UseReducer