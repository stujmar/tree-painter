import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TreePainter from './components/seed/TreePainter';
import { selectSeason, setSeason } from './redux/seasonSlice';
import { incrementDay } from './redux/daySlice';
import TimeControls from './components/view/TimeControls';
import ClockService from './components/service/ClockService';

const App = () => {
  const activeSeason = useSelector(selectSeason);
  const dispatch = useDispatch();

  const [ message, setMessage ] = useState("");
  // const [ season, setSeason ] = useState("SPRING");

  const handleMessageChange = (payload) => {
    setMessage(payload);
  }


  // const getSeason = () => {
  //   switch(season) {
  //     case "SPRING":
  //       return "bg-green-400";
  //     case "SUMMER":
  //       return "bg-yellow-400";
  //     case "FALL":
  //       return "bg-orange-400";
  //     case "WINTER":
  //       return "bg-blue-400";
  //     default:
  //       // code block
  //   }
  // };

  const logSeason = () => {
    console.log(activeSeason);
  };

  const winter = () => {
    dispatch(setSeason("WINTER"));
  };
  const fall = () => {
    dispatch(incrementDay());
  };
/*
  useEffect(() => {
    getSeason();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[season]);

  const changeSeason = (_season) => {
    setSeason(_season);
    console.log(_season, "from app level");
  }
*/
  return (
    <div className="App">
      <ClockService />
      {/* <header className={`${getSeason()} h-48 flex items-center justify-center text-lg font-sans text-white`}> */}
      <header className={`bg-green-400 h-48 flex items-center justify-center text-lg font-sans text-white`}>
        <div className="w-96 text-center pt-12 md:pt-0">{message}</div>
        <div className="absolute top-0 left-0">
          {/* <Counter changeSeason={changeSeason} /> */}
          <TimeControls />
        </div>
      </header>
      <TreePainter messageChange={(e) => handleMessageChange(e)}/>
      <button onClick={logSeason}>Log Season</button>
      <button onClick={winter}>winter</button>
      <button onClick={fall}>tick</button>
    </div>
  )
}

export default App;
