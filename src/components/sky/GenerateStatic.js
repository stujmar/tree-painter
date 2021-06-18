import { useEffect, useRef, useState } from 'react';
import { coinFlip } from '../../utils/coinFlip';

const GenerateStatic = () => {

        const [row, setRow] = useState([]);

        useEffect(() => {
            setRow(<div className="bg-white h-2 w-2"></div>)
        },[])

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
            coinFlip() ? console.log('tick') : console.log('tock');
        }, 500);
    return (
        <div id="static" className="h-full w-full border border-red-600 z-50 absolute top-0">
            {row}
        </div>
    )
}

export default GenerateStatic;