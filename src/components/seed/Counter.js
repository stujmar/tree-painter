import { useState, useEffect, useRef } from 'react';
import { getTime, getDate } from '../../utils/dateTimeConverters';

const Counter = () => {
    // let [count, setCount] = useState(Math.floor(Math.random() * (366 - 1) + 1));
    let [speed, setSpeed] = useState(1000);
    let [hour, setHour] = useState(1);
    let [day, setDay] = useState(Math.floor(Math.random() * (366 - 1) + 1));
    let stop = 123456789;

    const changeSpeed = (_speed) => {
      setSpeed(_speed);
    }


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

    }, speed); // How many milliseconds it takes for an hour to pass in game.
    return (
    <div className="flex w-screen justify-between px-4 py-2">
      <div className="flex md:flex-col w-max items-start">
        <div>{getDate(day)}</div>
        <div className="ml-2 md:ml-0">{getTime(hour)}</div>
      </div>
      <div className="flex  items-start">
          <button className="focus:outline-none" type="button" onClick={() => changeSpeed(stop)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={speed === stop ? 3 : 1} d="M6 18L18 6M6 6l12 12" />
          </svg>
          </button>
          <button className="focus:outline-none" type="button" onClick={() => changeSpeed(1000)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={speed === 1000 ? 3 : 1} d="M9 5l7 7-7 7" />
          </svg>
          </button>
          <button className={`${speed === 500 ? "font-bold": "font-normal"} focus:outline-none`} type="button" onClick={() => changeSpeed(500)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={speed === 500 ? 3 : 1} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
          </button>
      </div>
    </div>
      )
 }

export default Counter;
