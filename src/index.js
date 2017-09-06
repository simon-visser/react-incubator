// React main library
import React from 'react';
// React DOM manipulation stuff
import ReactDOM from 'react-dom';
// Routing classes
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Our own css
import './index.css';
// The app container
import App from './App';
// Included with the create-react-app command. Unsure of function. --SV
import registerServiceWorker from './registerServiceWorker';

// temp
import Navbar from './components/navbar';
import About from './components/about';
// temp

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
registerServiceWorker();
