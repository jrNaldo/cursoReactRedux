import { NUM_MAX_ALTERADO, NUM_MIN_ALTERADO } from "./actionsTypes"

export function AlterarNumeroMinimo(novoNumero) {
    return {
        type: NUM_MIN_ALTERADO,
        payload: novoNumero
    }
}

export function AlterarNumeroMaximo(novoNumero) {
    return {
        type: NUM_MAX_ALTERADO,
        payload: novoNumero
    }
}
