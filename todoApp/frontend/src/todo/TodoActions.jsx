const URL = 'http://localhost:3001/tarefas'

export const changeDescription = e => ({
    type: 'DESCRIPTION_CHANGED',
    payload: e.target.value
})

export const search = () => {
    const req = fetch(`${URL}?sort=-createdAt`)
    return {
        type: 'TODO_SEARCH',
        payload: req.then(resp => resp.json())
    }
}

export const add = description => {
    const req = fetch(URL, {
                    method:'POST',
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({description})
                })
    return dispatch => {
        req.then(resp => dispatch({type: 'DESCRIPTION_ADD', payload: resp.json()}))
            .then(resp => dispatch(search()))
    }
}

export const MarkAsDone = todo => {
    const req = fetch(`${URL}/${todo._id}`, {
                    method:'PUT',
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({done: true})
                })
    return dispatch => {
        req.then(resp => dispatch({type: 'TODO_MARK_AS_DONE', payload: resp.json()}))
            .then(resp => dispatch(search()))
    }
}

export const MarkAsPending = todo => {
    const req = fetch(`${URL}/${todo._id}`, {
        method: 'PUT',
        headers: ({"Content-Type": "application/json"}),
        body: JSON.stringify({done: false})
    })
    return dispatch => {
        req.then(resp => dispatch({type:'TODO_MARK_AS_PENDING', payload: resp.json()}))
            .then(resp => dispatch(search()))
    }
}

export const Remove = todo => {
    const req = fetch(`${URL}/${todo._id}`, {
        method: 'DELETE',
        headers: ({"Content-Type": "application/json"}),
    })
    return dispatch => {
        req.then(resp => dispatch(search()))
    }
}