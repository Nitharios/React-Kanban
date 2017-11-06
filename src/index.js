/*
  Entry pont into the application
*/

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './lib/store';
import App from './containers/App';
import registerServiceWorker from './lib/registerServiceWorker';

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();