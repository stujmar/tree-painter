import React, { useEffect, useState } from 'react';

import ClockService from './components/header/ClockService';
import Game from './components/gameBoard/Game';
import StatusBar from './components/statusBar/StatusBar';
import GraphPanel from './components/debug/GraphPanel';
import Header from './components/header/Header';
import MessageModal from './components/gameBoard/MessageModal';
import { useSelector, useDispatch } from 'react-redux';
import { conditionsToBeMet, getMilestones } from './utils/settings';
import { setMilestone, selectMode } from './redux/gameSlice';
import { selectTrees } from './redux/treeSlice';

const App = () => {
  const dispatch = useDispatch();
  const [ message, setMessage ] = useState("");
  const [ graph, setGraph ] = useState(false);

  let gameMode = useSelector(selectMode);
  let trees = useSelector(selectTrees);

  useEffect(() => {
    conditionsToBeMet.forEach(condition => {
      if (getMilestones(condition)) {
        dispatch(setMilestone(condition));
      }
    })
  }, [dispatch, trees]);


  const handleMessageChange = (payload) => {
    setMessage(payload);
  }

  const toggleGraph = () => {
    setGraph(!graph);
  }


  return (
    <div className="relative">
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
