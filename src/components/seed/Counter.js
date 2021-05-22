import React, { useState, useEffect, useRef } from 'react';
import { dateConverter } from '../../utils/dateConverter';

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
        // console.log(dateConverter(count));
        // console.log(typeof count);
      if (count < 365) {
          setCount(count + 1);
      } else {
          setCount(1);
      }
    }, 1000);
    
    return !!dateConverter(count) ? dateConverter(count) : count;
    
    // return <h1>{count}</h1>;
 }

export default Counter;