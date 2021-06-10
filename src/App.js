import React, { useEffect, useState } from 'react';
import Counter from './components/seed/Counter';
import { useSelector, useDispatch } from 'react-redux';
import TreePainter from './components/seed/TreePainter';
import { selectSeason } from './redux/seasonSlice';

const App = () => {
  const activeSeason = useSelector(selectSeason);
  const dispatch = useDispatch();

  const [ message, setMessage ] = useState("");
  const [ season, setSeason ] = useState("SPRING");

  const handleMessageChange = (payload) => {
    setMessage(payload);
  }


  const getSeason = () => {
    switch(season) {
      case "SPRING":
        return "bg-green-400";
      case "SUMMER":
        return "bg-yellow-400";
      case "FALL":
        return "bg-orange-400";
      case "WINTER":
        return "bg-blue-400";
      default:
        // code block
    }
  };

  const logSeason = () => {
    console.log(activeSeason);
  };

  const winter = () => {
    dispatch(setSeason("WINTER"));
  };
  const fall = () => {
    dispatch(setSeason("FALL"));
  };

  useEffect(() => {
    getSeason();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[season]);

  const changeSeason = (_season) => {
    setSeason(_season);
    console.log(_season, "from app level");
  }

  return (
    <div className="App">
      <header className={`${getSeason()} h-48 flex items-center justify-center text-lg font-sans text-white`}>
        <div className="w-96 text-center pt-12 md:pt-0">{message}</div>
        <div className="absolute top-0 left-0">
          <Counter changeSeason={changeSeason} />
        </div>
      </header>
      <TreePainter messageChange={(e) => handleMessageChange(e)}/>
      <button onClick={logSeason}>Log Season</button>
      {/* <button onClick={winter}>winter</button>
      <button onClick={fall}>fall</button> */}
    </div>
  )
}

export default App;
