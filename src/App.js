import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <textarea rows="3"></textarea>
        <div className="counter">0</div>
      </div>
    );
  }
}

export default App;
