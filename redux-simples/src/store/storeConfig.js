import {combineReducers} from 'redux'
import { configureStore } from '@reduxjs/toolkit'


const reducers = combineReducers({
    numeros: function(state, action) {
        return {
            min: 100, 
            max: 100000
        }
    }
})

function storeConfig() {
    return configureStore({reducer: reducers})
}

export default storeConfig