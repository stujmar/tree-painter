import React, {useEffect, useState, useRef} from 'react';

const GenerateStatic = ({height, width}) => {

    let tileCount = height * width;
    let [tiles, setTiles] = useState([]);

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
      console.log("here");
      for (let i = 0; i < tileCount; i++) {
        setTiles(<div key={i}>{Math.floor(Math.random() * 2)}</div>)
    }

    }, 1000);

    return <div className="flex flex-wrap bg-black text-green-400">
    {tiles}
    </div>;
};

export default GenerateStatic;