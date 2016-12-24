import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import todoApp from './reducers';
import { getTodos } from './actions/apiActions';
import App from './components/App';

let store = createStore(
  todoApp,
  applyMiddleware(
    thunkMiddleware
  )
);

store.dispatch(getTodos()).then(() =>
  console.log(store.getState())
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
