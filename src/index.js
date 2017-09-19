// React main library
import React from 'react';
// React DOM manipulation stuff
import ReactDOM from 'react-dom';
// Routing classes
import { BrowserRouter } from 'react-router-dom';
// Our own css
import './index.css';
// The app container
import App from './App';
// Included with the create-react-app command. Unsure of function. --SV
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,awe
  document.getElementById('root'),
);
registerServiceWorker();
