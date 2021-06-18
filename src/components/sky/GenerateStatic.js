import { useEffect, useRef, useState } from 'react';
import { coinFlip } from '../../utils/coinFlip';

const GenerateStatic = () => {

        const [row, setRow] = useState([]);

        useEffect(() => {
            console.log('onload');
            let array = []
            let parentDimensions = document.getElementById('static');
            for (let i = 0; i < Math.floor(parentDimensions.clientWidth/8); i++) {
                // setRow([...row, <div key={i} className="bg-white h-2 w-2"></div>])
                array.push(<div key={i} className="bg-white h-2 w-2"></div>);
            }
            setRow(array);
            // eslint-disable-next-line react-hooks/exhaustive-deps
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
            // coinFlip() ? console.log('tick') : console.log('tock');

        }, 500);
    return (
        <div id="static" className="h-full bg-black w-full border border-red-600 z-50 absolute justify-center top-0 flex flex-wrap">
            {row}
        </div>
    )
}

export default GenerateStatic;