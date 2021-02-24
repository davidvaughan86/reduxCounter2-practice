import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'react-dom'
import {Provider} from 'react-redux'
import rootReducer from './reducers/rootReducer'
const REDUX_DEV_TOOLS =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(); // connect redux developer tools

  const store = createStore(rootReducer, REDUX_DEV_TOOLS)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
    <App />
    </Provider>
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
