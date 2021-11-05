import React, { useEffect, useState, useRef } from 'react';

const GenerateMatrix = ({height, width}) => {

    // let tileCount = height * width;
    const [ rowCount, setRowCount ] = useState(0);
    let [tiles, setTiles] = useState([]);

    function makeRow(){
      let row = [];
      for (let i = 0; i < rowCount; i++) {
        row.push(<div key={i}>{Math.floor(Math.random() * 2)}</div>);
      }
      setTiles(row);
    }

    useEffect(() => {
      let matrix = document.getElementById('matrix');
      let matrixWidth = !!matrix ? matrix.clientWidth : "";
      setRowCount(Math.floor(matrixWidth/9));
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    useEffect(() => {
      makeRow();
    })
    
    function useInterval(callback, delay) {
        const savedCallback = useRef();
      
        // Remember the latest callback.
        useEffect(() => {
          savedCallback.current = callback;
        }, [callback]);
      
        // Set up the interval.
        useEffect(() => {
          function tick() {
            savedCallback.current();
          }
          if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
          }
        }, [delay]);
    }
    useInterval(() => {
    }, 1000);

    return <div id="matrix" className="flex flex-wrap justify-center bg-black text-green-400 w-full">
    {tiles}
    </div>;
};


export default GenerateMatrix;