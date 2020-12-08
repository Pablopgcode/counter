import React from 'react'
import ReactDOM from 'react-dom'
import Parent from './Parent'
import store from './store/store.js'
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Parent />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


