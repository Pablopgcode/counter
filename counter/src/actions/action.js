//aqui vinculamos las 'actions' con los métodos que utilizaremos en el componente correspondiente

import { DECREMENT, INCREMENT, INCREMENT_N_VALUES } from "../constants/action-types";

export const increment = () => ({
    type: INCREMENT,
})

export const decrement = () => ({
    type: DECREMENT,
})

export const incrementNValues = (number) => ({
    type: INCREMENT_N_VALUES,
    payload: number,
})



