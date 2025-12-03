import {combineReducers} from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import setReducer from './reducers/numerosReducer'


const reducers = combineReducers({ numeros: setReducer })

function storeConfig() {
    return configureStore({reducer: reducers})
}

export default storeConfig