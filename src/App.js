import React, { useCallback, useEffect, useState } from 'react';

import ClockService from './components/header/ClockService';
import Game from './components/gameBoard/Game';
import StatusBar from './components/statusBar/StatusBar';
import GraphPanel from './components/debug/GraphPanel';
import Header from './components/header/Header';
import MessageModal from './components/gameBoard/MessageModal';
import { useSelector, useDispatch } from 'react-redux';
import { selectMode, selectStore, setMessage, toggleStore, toggleToolTip } from './redux/gameSlice';
import Store from './components/gameBoard/store/Store';
import { selectSpeed, setSpeed } from './redux/clockSlice';
import ToolTips from './tooltips/ToolTips';

const App = () => {
  const dispatch = useDispatch();
  const [ graph, setGraph ] = useState(false);
  let isToolTipActive = useSelector(state => state.game.isToolTipActive);

  let gameMode = useSelector(selectMode);
  let isStoreActive = useSelector(selectStore);
  let speed = useSelector(selectSpeed);

  // useEffect(() => {
  //   conditionsToBeMet.forEach(condition => {
  //     if (getMilestones(condition)) {
  //       dispatch(setMilestone(condition));
  //     }
  //   })
  // }, [dispatch, trees]);

  useEffect(() => {
    if (graph) {
      dispatch(setSpeed(123456789));
    } else {
      dispatch(setSpeed(1000));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[graph]);

  const toggleGraph = () => {
    setGraph(!graph);
  }

  const handleStoreToggle = () => {
    dispatch(toggleStore);
  }

  const keyPress = useCallback(
    (e) => {
      if (e.key === " " ) {
        speed !== 123456789 ? dispatch(setSpeed(123456789)) : dispatch(setSpeed(1000))
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [speed]
  );

  const handleToolTipClose = () => {
    dispatch(setMessage("Let's start planting!"))
    dispatch(toggleToolTip(false));
  }

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <div className="relative">
      {isToolTipActive ? <ToolTips onClose={handleToolTipClose} /> : null}
      {isStoreActive && <Store toggleStore={handleStoreToggle} />}
      {graph ? <GraphPanel toggleGraph={toggleGraph}/> : <></>}
      <ClockService />
      {gameMode === "NO_MODE" ? <MessageModal /> : null}
      <Header />
      <StatusBar />
      <Game toggleGraph={toggleGraph} />
    </div>
  )
}

export default App;
