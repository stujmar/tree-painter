import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectDay } from './redux/daySlice';
import {getSeason} from './utils/getSeason';
// import GenerateMatrix from './components/sky/GenerateMatrix';

import TimeControls from './components/header/TimeControls';
import ClockService from './components/header/ClockService';
import Game from './components/gameBoard/Game';
import StatusBar from './components/statusBar/StatusBar';
import GraphPanel from './components/debug/GraphPanel';
import { selectMode } from './redux/gameSlice';

const App = () => {
  const day = useSelector(selectDay);
  const mode = useSelector(selectMode);

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
      <header 
        className={`${getSeason(day).light} h-48 relative flex items-center justify-center text-lg font-sans text-white`}>
        <div className="w-96 text-center pt-12 md:pt-0 comfortaa">{message}</div>
            <div className="absolute comfortaa w-full bottom-0 sm:top-0 -4 sm:h-14">
                <div className="f-full sm:w-max mx-auto h-full bg-white opacity-60 sm:rounded-none sm:rounded-b-lg">
                    <div className="p-1 sm:p-4 text-center"><span className={`font-bold ${getSeason(day).darkText}`}>{mode} MODE</span></div>
                </div>
            </div>
        <div className="absolute top-0 left-0">
          <TimeControls />
        </div>
      </header>
      <StatusBar />
      <Game messageChange={(e) => handleMessageChange(e)} toggleGraph={toggleGraph} />
    </div>
  )
}

export default App;
