import { useEffect, useRef } from 'react';

const GenerateStatic = () => {

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
            console.log('tlock');
        }, 500);
    return (
        <div id="static" className="h-full w-full border border-red-600 z-50 absolute top-0">

        </div>
    )
}

export default GenerateStatic;