import React, { Component } from 'react';

import './styles.css';
import  '../Layout/ToDoList/styles.css';
import  '../Layout/ToDoList/List/styles.css';
import Header from '../Layout/Header/index';
import ToDoList from '../Layout/ToDoList'
import Btn from "../../components/Btn/index";
import imgage from "../../components/image/ddd";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <ToDoList/>
          <Btn/>
          <imgage/>
          <img src="../../icons/deleteListElem.png"   alt=""/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
