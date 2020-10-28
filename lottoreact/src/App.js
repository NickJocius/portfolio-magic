import React, { Component } from 'react';
import Header from './components/Header';
import Lottery from './/components/Lottery';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Lottery />
        <Lottery title="Mini Jackpot" maxNum={20} maxBalls={4} />
      </div>
    )
  }
}

