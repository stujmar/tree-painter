import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectSpeed } from '../../redux/clockSlice';
import { selectDay, resetDay, incrementDay } from '../../redux/daySlice';
import { selectHour, resetHour, incrementHour } from '../../redux/hourSlice';

const ClockService = () => {
        // let [count, setCount] = useState(Math.floor(Math.random() * (366 - 1) + 1));
        const dispatch = useDispatch();
        let speed = useSelector(selectSpeed);
        let hour = useSelector(selectHour);
        let day = useSelector(selectDay);

        // let [day, setDay] = useState(Math.floor(Math.random() * (366 - 1) + 1));

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
                dispatch(incrementHour());
            } else { // Else we need to reset to 1:00am.
                dispatch(resetHour());
            }
            if (hour === 23) { // If we are about to tick over to 12:00am progress the day.
                if (day < 365) { // Most days of the year we just tick forward one day.
                    dispatch(incrementDay());
                } else { // Except on New Year's Eve resest to the first day of the year.
                    dispatch(resetDay()); 
                }
            }
    
        }, speed); // How many milliseconds it takes for an hour to pass in game.
    return (<></>)
}

export default ClockService;