import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectDay } from './redux/daySlice';
import {getSeason} from './utils/getSeason';
// import GenerateMatrix from './components/sky/GenerateMatrix';

import TimeControls from './components/header/TimeControls';
import ClockService from './components/header/ClockService';
import Game from './components/gameBoard/Game';
import StatusBar from './components/statusBar/StatusBar';
import Graph from './components/debug/Graph';

const App = () => {
  const day = useSelector(selectDay);

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
      {graph ? <Graph toggleGraph={toggleGraph}/> : <></>}
      <ClockService />
      <header 
        className={`${getSeason(day).light} h-48 flex items-center justify-center text-lg font-sans text-white`}>
        <div className="w-96 text-center pt-12 md:pt-0">{message}</div>
        <div className="absolute top-0 left-0">
          <TimeControls />
        </div>
      </header>
      <StatusBar />
      <Game messageChange={(e) => handleMessageChange(e)} toggleGraph={toggleGraph} />
      {/* <GenerateMatrix height={4} width={100} /> */}
    </div>
  )
}

export default App;
