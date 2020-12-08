import { INCREMENT } from "../constants/action-types";
import { DECREMENT } from "../constants/action-types";

export const increment = () => ({
    type: 'INCREMENT',
})

export const decrement = () => ({
    type: 'DECREMENT',
})

