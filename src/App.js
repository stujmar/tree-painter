import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectDay } from './redux/daySlice';
import {getSeason} from './utils/getSeason';
import { generateStatic } from './utils/generateStatic';

import TimeControls from './components/header/TimeControls';
import ClockService from './components/header/ClockService';
import Game from './components/gameBoard/Game';
import Graph from './components/debug/Graph';

const App = () => {

  const [test, setTest] = useState("");
  useEffect(() => {
    setTest(generateStatic(2,4));
  },[])
  const day = useSelector(selectDay);

  const [ message, setMessage ] = useState("");
  const [ graph, setGraph ] = useState(false);
  // const [ season, setSeason ] = useState("SPRING");

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
      <header className={`${getSeason(day).light} h-48 flex items-center justify-center text-lg font-sans text-white`}>
        <div className="w-96 text-center pt-12 md:pt-0">{message}</div>
        <div className="absolute top-0 left-0">
          <TimeControls />
        </div>
      </header>
      <Game messageChange={(e) => handleMessageChange(e)} toggleGraph={toggleGraph} />
      {test}
    </div>
  )
}

export default App;
