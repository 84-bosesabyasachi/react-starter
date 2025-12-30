import React from 'react';
import './styles/app.scss';
//Additional imports can be added here
import Player from './components/Player';
import Song from './components/Song';

function App() {
  return (
    <div className="App">
      <Song />
      <Player />
    </div>
  );
}

export default App;
