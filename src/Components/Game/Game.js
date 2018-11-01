import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Game extends Component {
  render() {
    return (
      <div>
        <main>
          <h1>This is the start of the game!</h1>
          <li><NavLink to='/'>Home</NavLink></li>
        </main>
      </div>
    );
  }
}

export default Game;
