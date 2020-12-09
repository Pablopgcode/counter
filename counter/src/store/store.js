import { createStore } from "redux";
import reducer from "../reducers/reducer.js";

const store = createStore(reducer);

export default store;

//creamos el 'store' global de la aplicación y lo vinculamos siempre con el reducer