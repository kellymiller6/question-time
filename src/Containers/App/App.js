import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import GameSetup from '../../Components/GameSetup/GameSetup.js';
import Game from '../../Components/Game/Game.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
        </header>
        <main>
          <Route exact path='/' component={GameSetup}/>
          <Route path='/start' component={Game}/>
        </main>
      </div>
    );
  }
}


export default App;
