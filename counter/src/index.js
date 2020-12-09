import React from 'react'
import ReactDOM from 'react-dom'
import Parent from './Parent'
import store from './store/store.js'
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';  //css en componentes no. En index lo inyecta a toda la app

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> 
      <Parent />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


//En redux se utiliza el Provider para utilizar el 'store'