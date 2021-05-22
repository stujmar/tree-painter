import React, { useState, useEffect, useRef } from 'react';

const Counter = (props) => {
    let [count, setCount] = useState(1);

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
      if (count < 365) {
          setCount(count + 1);
      } else {
          setCount(1);
      }
    }, 1000);
  
    return <h1>{count}</h1>;
 }

export default Counter;