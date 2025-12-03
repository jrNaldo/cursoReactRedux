import React from 'react'
import Card from './Card'
import './Intervalo.css'
import { connect } from 'react-redux'
import {AlterarNumeroMinimo, AlterarNumeroMaximo} from '../store/actions/numeros'

function Intervalo(props){
    const {min, max} = props

    return (
        <Card title='Intervalo de numeros' red>
            <div className="Intervalo">
                <span>
                    <strong>Minimo: </strong>
                    <input 
                        type="number" 
                        value={min} 
                        onChange={e => props.setMin(+e.target.value)}
                        />
                </span>
                <span>
                    <strong>Maximo: </strong>
                    <input
                        type="number" 
                        value={max}
                        onChange={e => props.setMaximo(+e.target.value)}
                    />
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state) {
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

function mapDispatchToProp(dispatch) {
    return {
        setMin(novoNumero){
            // Action Creator
            const action = AlterarNumeroMinimo(novoNumero)
            dispatch(action)
        },
        setMaximo(novoNumero){
            const action = AlterarNumeroMaximo(novoNumero)
            dispatch(action)
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProp
)(Intervalo)