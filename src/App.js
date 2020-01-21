import React, { Component } from 'react';
import * as Minesweeper from '../minesweeper';
import './App.css';

class App extends Component {
  constructor() {
    super();
    const board = new Minesweeper.Board(9, 10);
    this.state = { board: board };
  }
  restartGame = () => {};
  updateGame = () => {};

  render() {
    return <div className="App"></div>;
  }
}

export default App;
