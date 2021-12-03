import React, { useEffect, useState } from 'react';

import ClockService from './components/header/ClockService';
import Game from './components/gameBoard/Game';
import StatusBar from './components/statusBar/StatusBar';
import GraphPanel from './components/debug/GraphPanel';
import Header from './components/header/Header';
import MessageModal from './components/gameBoard/MessageModal';
import { useSelector, useDispatch } from 'react-redux';
import { conditionsToBeMet, getMilestones } from './utils/settings';
import { setMilestone, selectMode, selectStore, toggleStore } from './redux/gameSlice';
import { selectItems } from './redux/itemSlice';
import Store from './components/gameBoard/store/Store';

const App = () => {
  const dispatch = useDispatch();
  const [ message, setMessage ] = useState("");
  const [ graph, setGraph ] = useState(false);

  let gameMode = useSelector(selectMode);
  let trees = useSelector(selectItems);
  let isStoreActive = useSelector(selectStore)

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

  const handleStoreToggle = () => {
    dispatch(toggleStore);
  }


  return (
    <div className="relative">
      {isStoreActive && <Store toggleStore={handleStoreToggle} />}
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
