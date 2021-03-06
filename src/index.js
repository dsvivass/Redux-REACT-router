import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import allReducers from './reducers';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import { BrowserRouter } from "react-router-dom";

const store = createStore(allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);