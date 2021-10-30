import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Graph = () => {
  const dispatch = useDispatch();
  const [verticalLines, setVerticalLines] = useState([]);
  const [horizontalLines, setHorizontalLines] = useState([]);
  const [xCount, setXCount] = useState(10);
  const [yCount, setYCount] = useState(10);

  const getHorizontalLines = (density) => {
    console.log("getting horizontal lines")
    setHorizontalLines([...Array(density - 1)].map((_element, index) => {
      return <div 
        key={index} 
        style={{top: getPercentage(index + 1, density)}}
        className="border-t-2 border-green-500 absolute w-full"></div>
    }));
  };

  const getVerticalLines = (density) => {
    setVerticalLines([...Array(density - 1)].map((_element, index) => {
      return <div 
        key={index} 
        style={{left: getPercentage(index + 1, density)}}
        className="border-r-2 border-red-500 absolute h-full"
        ></div>
    }));
    console.log(horizontalLines)
  };

  useEffect(() => {
    console.log("Graph component mounted");
    getHorizontalLines(yCount);
    getVerticalLines(xCount);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[xCount, yCount]);

  function getPercentage(current, total) {
    let value = current === 0 ? 0 : ((current) / total);
    console.log(total, current, `${value * 100}%`);
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
    }
    console.log(name, value);
  }

  return (
    <div>
      <div className="border-2 border-black w-96 h-96 bg-white mx-auto text-center relative">
        <div className="h-2 w-2 rounded-full bg-red-500 absolute" style={{top: '0%', left: '0%'}}></div>
        {/* <h1 className="mt-12">Graphs Go Here</h1> */}
        {verticalLines}
        {horizontalLines}
      </div>
      <div className="w-max mx-auto mt-4">
        X<input type="number" name="x" value={xCount} onChange={(e) => handleInputs(e)}/>
        Y<input type="number" name="y" value={yCount} onChange={(e) => handleInputs(e)}/>
      </div>
    </div>
  );
}

export default Graph;
