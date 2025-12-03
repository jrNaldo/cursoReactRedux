import { NUM_MAX_ALTERADO, NUM_MIN_ALTERADO } from "../actions/actionsTypes"
const initalValue = {min: 1, max: 10}

export default function setReducer(state = initalValue, action) {
        switch(action.type) {
            case NUM_MIN_ALTERADO:
                return {
                    ...state,
                    min: action.payload
                }
            case NUM_MAX_ALTERADO:
                return {
                    ...state,
                    max: action.payload
                }
            default: 
                return state
                
        }
}
