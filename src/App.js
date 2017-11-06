import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainForm from './components/MainForm.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainForm />
      </div>
    );
  }
}

export default App;
