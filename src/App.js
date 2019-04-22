import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import AddTask from './components/AddTask'
import DisplayTask from './components/DisplayTask'


class App extends Component {

  render() {
    return (
      <div className="container">
        <Header />
        <AddTask />
        <DisplayTask />

      </div>
    );
  }
}

export default App;
