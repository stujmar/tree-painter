import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectTrees } from '../../redux/treeSlice';

const Graph = () => {
  // const dispatch = useDispatch();
  const [verticalLines, setVerticalLines] = useState([]);
  const [horizontalLines, setHorizontalLines] = useState([]);
  const [xCount, setXCount] = useState(10);
  const [yCount, setYCount] = useState(10);
  const [lockAxis, setLockAxis] = useState(true);
  const [dots, setDots] = useState([]);

  let trees = useSelector(selectTrees);

  const getHorizontalLines = (density) => {
    console.log("getting horizontal lines")
    setHorizontalLines([...Array(density - 1)].map((_element, index) => {
      return <div 
        key={index} 
        style={{top: getPercentage(index + 1, density)}}
        className="border-t-2 border-amber-600 absolute w-full"></div>
    }));
  };

  const getVerticalLines = (density) => {
    setVerticalLines([...Array(density - 1)].map((_element, index) => {
      return <div 
        key={index} 
        style={{left: getPercentage(index + 1, density)}}
        className="border-r-2 border-amber-600 absolute h-full"
        ></div>
    }));
  };

  useEffect(() => {
    console.log(trees)
    if (trees.length > 0) {
      setDots(trees.map((tree) => {
        return <div className="h-3 w-3 rounded-full bg-lime-600 absolute shadow-lg" style={{top: `${tree.y}%`, left: `${tree.x}%`}}></div>
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
    if (name === 'x') {
      setXCount(value);
    } else if (name === 'y') {
      setYCount(value);
    } else if (name === 'xy') {
      setXCount(value);
      setYCount(value);
    }
    console.log(name, value);
  }

  function toggleLock() {
    setLockAxis(!lockAxis);
  }

  return (
    <div>
      <div className="w-96 h-96 bg-amber-100 mx-auto text-center relative shadow-lg">
        {verticalLines}
        {horizontalLines}
        {dots}
      </div>
      {lockAxis ? 
        <div className="w-max mx-auto mt-4 flex">
        <div className="ml-2 bg-amber-100 focus:outline-none text-amber-800 font-bold text-right rounded-l px-1">X/Y</div>
        <input 
          type="number" 
          name="xy" 
          value={xCount} onChange={(e) => handleInputs(e)}
          className="bg-amber-100 focus:outline-none text-amber-800 font-bold text-right rounded-r"/>
      </div>
      :
      <div className="w-max mx-auto mt-4 flex">
        <div className="ml-2 bg-amber-100 focus:outline-none text-amber-800 font-bold text-right rounded-l px-1">X</div>
        <input 
          type="number" 
          name="x" 
          value={xCount} onChange={(e) => handleInputs(e)}
          className="bg-amber-100 focus:outline-none text-amber-800 font-bold text-right rounded-r"/>
        <div className="ml-2 bg-amber-100 focus:outline-none text-amber-800 font-bold text-right rounded-l px-1">Y</div>
        <input 
          type="number"
          name="y"
          value={yCount} onChange={(e) => handleInputs(e)}
          className="bg-amber-100 focus:outline-none text-amber-800 font-bold text-right rounded-r"/>
      </div>
      
      } 
      <div className="w-full">
      <button 
          onClick={toggleLock}
          className="bg-amber-100 focus:outline-none block mt-4 mx-auto text-amber-800 font-bold text-right rounded px-1"
          >{lockAxis ? "unlock" : "lock"}</button>
      </div>
    </div>
  );
}

export default Graph;
