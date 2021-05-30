import { useState, useEffect, useRef } from 'react';
import { getTime, getDate } from '../../utils/dateTimeConverters';

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
        if (hour < 24) {  // If the time is less than 24 tick forward an hour.
            setHour(hour + 1) 
        } else { // Else we need to reset to 1:00am.
            setHour(1)
        }
        if (hour === 23) { // If we are about to tick over to 12:00am progress the day.
            if (day < 365) { // Most days of the year we just tick forward one day.
                setDay(day + 1);
            } else { // Except on New Year's Eve resest to the first day of the year.
                setDay(1); 
            }
        }

    }, 1000); // How many milliseconds it takes for an hour to pass in game.
    return <div className="flex md:flex-col w-max">
    <div>{getDate(day)}</div>
    <div className="ml-2">{getTime(hour)}</div>
    </div>;
 }

export default Counter;