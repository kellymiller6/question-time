import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Game extends Component {
  render() {
    return (
      <div>
        <main>
          <h1>This is the start of the game!</h1>
          <li><Link to='/'>Home</Link></li>
        </main>
      </div>
    );
  }
}

export default Game;
