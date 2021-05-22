import { useState, useEffect, useRef } from 'react';
import smartConverter from '../../utils/smartConverter';

const Counter = (props) => {
    let [count, setCount] = useState(Math.floor(Math.random() * (366 - 1) + 1));

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
    }, 5000);
    return smartConverter(count);
 }

export default Counter;