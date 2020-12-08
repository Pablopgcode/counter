import { INCREMENT } from "../constants/action-types";
import { DECREMENT } from "../constants/action-types";


const initialState = {
    value: 0
};
  
const reducer = (state = initialState, action) => {
    if (action.type === INCREMENT) {
        return state.value += 1;
    }

    if (action.type === DECREMENT) {
        return state.value -= 1;
    }

    return state;

};
  
export default reducer;
