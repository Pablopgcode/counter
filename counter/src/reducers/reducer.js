import { INCREMENT, DECREMENT, INCREMENT_N_VALUES } from "../constants/action-types";


const initialState = { //estado inicial
    value: 0,
};
  
const reducer = (state = initialState, action) => {
    if (action.type === INCREMENT) {
        return {...state, value: state.value + 1}  //creamos objeto con todas las propiedades del estado
    }

    if (action.type === DECREMENT) {
        return {...state, value: state.value - 1}  //creamos objeto con todas las propiedades del estado
    }

    if (action.type === INCREMENT_N_VALUES){
        return {...state, value: state.value + action.payload}  //con los '...' creamos un nuevo objeto que será la copia del state 
    }                                                           //creamos 'value' y le pasamos el value del estado actual, le añadimos el payload

    return state;

};
  
export default reducer;
