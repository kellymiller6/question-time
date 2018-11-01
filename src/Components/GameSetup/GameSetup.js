import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class GameSetup extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <h1>Choose your adventure!</h1>
          <h4>Pick your category, difficulty, and question type.</h4>
          <li><Link to='/start'>Ready GO!</Link></li>
        </main>
      </div>
    );
  }
}

export default GameSetup;
