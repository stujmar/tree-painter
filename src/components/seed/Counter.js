import { useState, useEffect, useRef } from 'react';
import { getTime, getDate } from '../../utils/converters';

const Counter = () => {
    // let [count, setCount] = useState(Math.floor(Math.random() * (366 - 1) + 1));
    let [hour, setHour] = useState(1);
    let [day, setDay] = useState(Math.floor(Math.random() * (366 - 1) + 1));

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
        if (hour < 24) {
            setHour(hour + 1) 
        } else {
            setHour(1)
            if (day < 365) {
                setDay(day + 1);
            } else {
                setDay(1);
            }
        }
    }, 500);
    return <div className="grid grid-rows-2 w-max">
    <div>{getDate(day)}</div>
    <div>{getTime(hour)}</div>
    </div>;
 }

export default Counter;