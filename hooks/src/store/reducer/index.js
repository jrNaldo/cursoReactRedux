export function reducer(state, action){
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
            return {...state, number: Math.floor(state.number)}
        case 'addN':
            return {...state, number: state.number + action.payload}
        default: 
            return state
    }
}