import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Main from './components/main';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Navbar />
        <Main />
      </div>
    );
  }
}

export default App;
