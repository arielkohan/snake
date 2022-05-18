import React from 'react';
import './App.css';
import { GameUI } from './game-ui/GameUi';

function App() {
  return (
    <div className="App">
      <h1>Snake game</h1>
      <GameUI></GameUI>
    </div>
  );
}

export default App;
