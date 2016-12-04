import React from 'react';

import AppBody from './AppBody';

import logo from '../logo.svg';
import '../App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>React Todo</h1>
        </div>
        <AppBody />
      </div>
    );
  }
}

export default App;
