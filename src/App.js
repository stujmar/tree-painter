import React, { useState } from 'react';

import ClockService from './components/header/ClockService';
import Game from './components/gameBoard/Game';
import StatusBar from './components/statusBar/StatusBar';
import GraphPanel from './components/debug/GraphPanel';
import Header from './components/header/Header';

const App = () => {
  const [ message, setMessage ] = useState("");
  const [ graph, setGraph ] = useState(false);

  const handleMessageChange = (payload) => {
    setMessage(payload);
  }

  const toggleGraph = () => {
    setGraph(!graph);
  }


  return (
    <div className="App">
      {graph ? <GraphPanel toggleGraph={toggleGraph}/> : <></>}
      <ClockService />
      <Header message={message} />
      <StatusBar />
      <Game messageChange={(e) => handleMessageChange(e)} toggleGraph={toggleGraph} />
    </div>
  )
}

export default App;
