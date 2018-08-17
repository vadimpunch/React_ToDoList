import React, { Component } from 'react';
import './styles.css';
import Header from '../Layout/Header/index';
import ToDoList from '../Layout/ToDoList'
import Btn from "../../components/Btn/index";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <ToDoList/><Btn/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
