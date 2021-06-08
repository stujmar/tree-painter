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
      <div className="flex flex-col"> {/*RIGHT SECTION*/}

        <div className="flex  items-start"> {/*SPEED CONTROLS*/}
            <button className="focus:outline-none" type="button" onClick={() => changeSpeed(stop)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {/* <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={speed === stop ? 3 : 1} d="M6 18L18 6M6 6l12 12" /> */}
              <line strokeLinecap="round" strokeLinejoin="round" strokeWidth={speed === stop ? 3 : 1} x1="9" y1="5" x2="9" y2="18" />
              <line strokeLinecap="round" strokeLinejoin="round" strokeWidth={speed === stop ? 3 : 1} x1="17" y1="5" x2="17" y2="18" />
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

        <div className="mt-2"> {/* SEASON CONTROLS */}
          <svg className="hover:opacity-75" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.8021 6.41649C15.5165 5.36816 13.8827 4.73283 12.1057 4.70952C7.84315 4.65456 4.47156 8.07266 4.39328 12.1669C4.34998 14.4034 5.28843 16.4651 6.83309 17.899C7.49008 18.5177 8.27199 19.0314 9.16797 19.3994C13.1175 21.0207 17.5208 19.0872 19.0929 15.2561C20.4102 12.0462 19.3727 8.46735 16.8021 6.41649Z" fill="white"/>
            <path d="M24 11.9896C23.2331 11.286 22.4137 10.6765 21.5052 10.2077C22.2255 9.38667 22.7868 8.45242 23.2564 7.43823C22.1597 7.04437 21.0556 6.78125 19.9223 6.73129C20.2762 5.69878 20.4411 4.62214 20.4902 3.50553C19.4343 3.553 18.4143 3.70204 17.4367 4.01513C17.3368 2.86022 17.0653 1.59289 16.7222 0.967561C15.6972 1.45051 14.7487 2.03171 13.9219 2.77861C13.3881 1.68116 12.5854 0.482115 11.99 0C11.2606 0.797696 10.6285 1.65118 10.1539 2.60126C9.377 1.95011 8.50267 1.43302 7.56422 0.997537C7.24447 1.52628 6.95885 2.93599 6.85643 4.11505C5.79224 3.73285 4.67726 3.55716 3.52814 3.50637C3.42905 4.14336 3.72715 5.64965 4.1027 6.8004C3.07099 6.88617 2.06925 7.14096 1.07918 7.50484C1.32149 8.18763 2.02679 9.27926 2.69794 10.1044C1.70869 10.5849 0.825203 11.2335 0 11.9888C0.542919 12.5949 1.82527 13.4576 2.82534 13.9564C2.11339 14.7757 1.55631 15.6975 1.10083 16.6983C2.06592 17.0489 3.03685 17.2904 4.03692 17.3786C3.70883 18.3812 3.55145 19.417 3.51065 20.4853C4.68142 20.437 5.80556 20.2547 6.88974 19.8633C6.95219 21.0016 7.21615 22.0965 7.61835 23.1732C8.56679 22.731 9.44279 22.2023 10.228 21.5345C10.6985 22.4346 11.3005 23.2448 11.9992 24C12.7636 23.1707 13.4131 22.2805 13.8994 21.2763C14.787 22.0516 16.2509 23.0166 16.813 23.1299C17.1835 22.1073 17.435 21.0665 17.5041 19.9907C18.5933 20.3121 19.9922 20.5636 20.4885 20.4678C20.4435 19.4037 20.287 18.3662 19.9573 17.3645C21.0389 17.2779 22.4978 16.9739 23.2797 16.6192C22.7959 15.5892 22.2122 14.64 21.4603 13.8081C22.3821 13.3094 23.4621 12.5616 24 11.9896ZM19.8632 15.5734C18.1187 19.8225 13.2349 21.9675 8.8549 20.1689C7.86149 19.7609 6.99382 19.1913 6.26521 18.5044C4.55236 16.914 3.51232 14.6275 3.55978 12.147C3.64721 7.60643 7.38686 3.81529 12.1141 3.8769C14.0851 3.90272 15.8962 4.60799 17.3226 5.77039C20.1746 8.04441 21.3245 12.0137 19.8632 15.5734Z" fill="white"/>
          </svg>

        </div>

      </div>
    </div>
      )
 }

export default Counter;
