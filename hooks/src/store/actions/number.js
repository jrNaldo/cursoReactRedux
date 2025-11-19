export function numberAdd2(dispatch){
    dispatch({type: 'numberAdd2'})
}

export function multiPor7(dispatch){
    dispatch({type: 'multiPor7'})
}

export function dividirPor25(dispatch){
    dispatch({type: 'dividirPor25'})
}

export function aproxima(dispatch){
    dispatch({type: 'aproximarNumero'})
}

export function addN(dispatch, num){
    dispatch({type: 'addN', payload: parseFloat(num)})
}