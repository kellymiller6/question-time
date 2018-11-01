import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class GameSetup extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <h1>Choose your adventure!</h1>
          <h4>Pick your category, difficulty, and question type.</h4>
          <li><NavLink to='/start'>Ready GO!</NavLink></li>
        </main>
      </div>
    );
  }
}

export default GameSetup;
