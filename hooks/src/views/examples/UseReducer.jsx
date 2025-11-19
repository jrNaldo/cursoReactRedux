import React, { useReducer, useState } from "react";
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';
import { initialState,reducer, numberAdd2, multiPor7, dividirPor25, login, aproxima, addN } from "../../store";


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

                    <button className="btn" onClick={() => login(dispatch)}>Login</button>

                    <button className="btn" onClick={() => numberAdd2(dispatch)}>+2</button>

                    <button className="btn" onClick={() => multiPor7(dispatch)}>*7</button>
                    
                    <button className="btn" onClick={() => dividirPor25(dispatch)}>/25</button>

                    <button className="btn" onClick={() => aproxima(dispatch)}>Aproxima</button>

                    <button className="btn" onClick={() => addN(dispatch, num)}>{num}</button>
                </div>
                <input type="number" className="text" value={num} onChange={e => setNum(e.target.value)}/>
            </div>
        </div>
    )
}

export default UseReducer