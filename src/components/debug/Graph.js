import React, { useEffect, useState } from 'react';
import { getSeason } from '../../utils/getSeason';

const Graph = ({resetGame, trees}) => {
  const [verticalLines, setVerticalLines] = useState([]);
  const [horizontalLines, setHorizontalLines] = useState([]);
  const [xCount, setXCount] = useState(10);
  const [yCount, setYCount] = useState(10);
  const [lockAxis, setLockAxis] = useState(true);
  const [dots, setDots] = useState([]);

  const getHorizontalLines = (density) => {
    density = density >= 1 ? (density) : 1;
    let grid_array = [...Array(parseInt(density))]
    grid_array.pop();
    setHorizontalLines(grid_array.map((_element, index) => {
      return <div 
        key={index} 
        style={{top: getPercentage(index + 1, density)}}
        className="border-t-2 border-amber-600 absolute w-full"></div>
    }));
  };

  const getVerticalLines = (density) => {
    density = density >= 1 ? density : 1;
    let grid_array = [...Array(parseInt(density))]
    grid_array.pop();
     setVerticalLines(grid_array.map((_element, index) => {
      return <div 
        key={index} 
        style={{left: getPercentage(index + 1, density)}}
        className="border-r-2 border-amber-600 absolute h-full"
        ></div>
    }))
  }
  useEffect(() => {
    if (trees.length > 0) {
      setDots(trees.map((tree) => {
        let treeStyle = getSeason(tree.birthday);
        return <div key={`dot_${tree.id}`} className={`h-4 w-4 rounded-full border-2 ${treeStyle.canopy} ${treeStyle.border} absolute shadow`} style={{top: `${tree.y}%`, left: `${tree.x}%`}}></div>
      }))
    }
    }, [trees]);
  

  useEffect(() => {
    getHorizontalLines(yCount);
    getVerticalLines(xCount);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[xCount, yCount]);

  function getPercentage(current, total) {
    let value = current === 0 ? 0 : ((current) / total);
    if (value === 0) {
      return '0%';
    }
    return `${value * 100}%`;
  }

  function handleInputs(e) {
    const { name, value } = e.target;
    if (name === 'x' && value <= 100) {
      setXCount(value);
    } else if (name === 'y'  && value <= 100) {
      setYCount(value);
    } else if (name === 'xy'  && value <= 100) {
      setXCount(value);
      setYCount(value);
    }
  }

  function toggleLock() {
    setLockAxis(!lockAxis);
  }

  function reset() {
    setXCount(10);
    setYCount(10);
  }

  function handleResetGame() {
    setDots([]);
    resetGame();
  }

  return (
    <div>
    <div className="w-80 sm:w-96 mx-auto mb-2 comfortaa font-bold text-amber-100">
      trees: {trees.length}
    </div>
      <div className="w-80 sm:w-96 h-80 sm:h-96 bg-amber-100 mx-auto text-center relative shadow-lg">
        {verticalLines}
        {horizontalLines}
        {dots}
      </div>
      <div className="w-80 sm:w-96 mx-auto mt-4 flex">
      {lockAxis ? <>
        <div className="bg-amber-100 focus:outline-none text-amber-800 font-bold text-right rounded-l px-1">X/Y</div>
          <input 
            type="number"
            min="1" max="100"
            name="xy"
            value={xCount} onChange={(e) => handleInputs(e)}
            className="bg-amber-100 focus:outline-none text-amber-800 font-bold text-right pr-2 rounded-r"/>
          <div className="flex ml-auto gap-2">
            <button 
              onClick={reset}
              className="bg-amber-100 focus:outline-none block  text-amber-800 font-bold text-right rounded px-1"
              >reset</button>
            <button 
              onClick={toggleLock}
              className="bg-amber-100 focus:outline-none block  text-amber-800 font-bold text-right rounded px-1"
              >{lockAxis ? "unlock" : "lock"}</button>
        </div></>
      : 
      <><div className="bg-amber-100 focus:outline-none text-amber-800 font-bold text-right rounded-l px-1">X</div>
        <input 
          type="number"
          min="1" max="100"
          name="x"
          value={xCount} onChange={(e) => handleInputs(e)}
          className="bg-amber-100 focus:outline-none text-amber-800 w-24 font-bold text-right rounded-r pr-2"/>
        <div className="ml-2 bg-amber-100 focus:outline-none text-amber-800 font-bold text-right rounded-l px-1">Y</div>
        <input 
          type="number"
          min="1" max="100"
          name="y"
          value={yCount} onChange={(e) => handleInputs(e)}
          className="bg-amber-100 focus:outline-none text-amber-800 w-24 font-bold text-right rounded-r pr-2"/>
        <div className="flex ml-auto gap-2">
            <button 
              onClick={reset}
              className="bg-amber-100 focus:outline-none block  text-amber-800 font-bold text-right rounded px-1"
              >reset</button>
            <button 
              onClick={toggleLock}
              className="bg-amber-100 focus:outline-none block  text-amber-800 font-bold text-right rounded px-1"
              >{lockAxis ? "unlock" : "lock"}</button>
        </div></>}
      </div>
      <button 
                    type="button"
                    aria-label="Reset button"
                    className="border-4 mt-4 block mx-auto bg-green-600 hover:bg-green-700 rounded-lg font-medium text-white border-white px-2 z-10 shadow focus:outline-none"
                    onClick={handleResetGame}
                >RESET GAME</button>
    </div>
  );
}

export default Graph;
