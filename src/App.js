import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Main from './components/main';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Navbar />
        {/* Navbar contains the links to route us around the page */}
        <Main />
        {/* Main will display the components referred to by our routes */}
      </div>
    );
  }
}

export default App;
