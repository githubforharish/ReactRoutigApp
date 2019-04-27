import React, { Component } from 'react';
//import logo from './logo.svg';
import logo from './sc5.png';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          Hello World
          <div>This is my first react program</div>
          <div>
            <ul>
                <li>One</li>
                <li>Two <ul><li>gg</li></ul></li>
            </ul>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
