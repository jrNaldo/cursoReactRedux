import { numberAdd2, multiPor7, dividirPor25, aproxima, addN } from './actions/number'
import { login } from './actions/user'
import {reducer} from './reducer'
const initialState = {
    cart: [],
    products: [{}, {}],
    user: null,
    number: 0
}

export {
    initialState, 
    numberAdd2,
    reducer, 
    multiPor7,
    dividirPor25,
    aproxima,
    addN,
    login
}