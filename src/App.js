import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TreePainter from './components/seed/TreePainter';
import { selectDay } from './redux/daySlice';
import {getSeason} from './utils/getSeason';
import TimeControls from './components/view/TimeControls';
import ClockService from './components/service/ClockService';

const App = () => {
  const day = useSelector(selectDay);

  const [ message, setMessage ] = useState("");
  // const [ season, setSeason ] = useState("SPRING");

  const handleMessageChange = (payload) => {
    setMessage(payload);
  }


  return (
    <div className="App">
      <ClockService />
      <header className={`${getSeason(day).light} h-48 flex items-center justify-center text-lg font-sans text-white`}>
        <div className="w-96 text-center pt-12 md:pt-0">{message}</div>
        <div className="absolute top-0 left-0">
          <TimeControls />
        </div>
      </header>
      <TreePainter messageChange={(e) => handleMessageChange(e)}/>
    </div>
  )
}

export default App;
