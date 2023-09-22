import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import App from './components/container/App.jsx';
import {reducer} from './reducers';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <div>
    <h1>React Redux Thunk Example</h1>
    <p>
      This is an example of using Async Actions with the <strong>redux-thunk</strong> module.
    </p>
    <Provider store={store}>
      <App />
    </Provider>
  </div>,
  document.querySelector('main')
);
