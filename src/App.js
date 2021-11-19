import React, { useState } from 'react';

import ClockService from './components/header/ClockService';
import Game from './components/gameBoard/Game';
import StatusBar from './components/statusBar/StatusBar';
import GraphPanel from './components/debug/GraphPanel';
import Header from './components/header/Header';
import MessageModal from './components/gameBoard/MessageModal';
import { useSelector } from 'react-redux';
import { selectMode } from './redux/gameSlice';

const App = () => {
  const [ message, setMessage ] = useState("");
  const [ graph, setGraph ] = useState(false);
  let gameMode = useSelector(selectMode);

  const handleMessageChange = (payload) => {
    setMessage(payload);
  }

  const toggleGraph = () => {
    setGraph(!graph);
  }


  return (
    <div className="App relative">
      {graph ? <GraphPanel toggleGraph={toggleGraph}/> : <></>}
      <ClockService />
      {gameMode === "NO_MODE" ? <MessageModal /> : null}
      <Header message={message} />
      <StatusBar />
      <Game messageChange={(e) => handleMessageChange(e)} toggleGraph={toggleGraph} />
    </div>
  )
}

export default App;
