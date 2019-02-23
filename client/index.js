import React from 'react';
import ReactDOM from 'react-dom';
import NewbeeForum from './src/pages/index.js';
import { Provider } from 'react-redux';
import store from './src/store';

ReactDOM.render(
<Provider store={store}>
  <NewbeeForum />
</Provider>
, document.getElementById('root'));