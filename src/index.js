import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import "bootstrap/js/src/collapse.js";
// import "bootstrap/dist/js/bootstrap.min.js";

import '../node_modules/bootstrap/dist/js/bootstrap.js'

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


