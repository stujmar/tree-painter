import { useEffect, useRef, useState } from 'react';
import { coinFlip } from '../../utils/coinFlip';

const GenerateStatic = ({ isPaused }) => {

        const [row, setRow] = useState([]);

        useEffect(() => {
            updateGrid();
            // eslint-disable-next-line react-hooks/exhaustive-deps
        },[])

        function renderPixel(i) {
            return <div key={i} className={`${coinFlip() ? 'bg-gray-800 rounded' : 'bg-white'} h-1 w-1`}></div>
        }

        function updateGrid(){
            let array = [];
            let parentDimensions = document.getElementById('static');
            for (let i = 0; i < (Math.floor(parentDimensions.clientWidth/4) * Math.floor(parentDimensions.clientHeight/4)); i++) {
                // setRow([...row, <div key={i} className="bg-white h-2 w-2"></div>])
                array.push(renderPixel(i));
            }
            setRow(array);
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
            updateGrid();
        }, 250);
    return (
        <>
        
        <div id="static" className="h-full w-full z-50 absolute justify-center top-0">

            {isPaused ? <div className="relative flex flex-wrap items-start bg-white justify-center overflow-hidden">
            <div style={{position: "absolute", left: "50%"}}>
                <div className="font-bold text-red-600 top-8 text-blend-difference z-30 bg-black px-1 pb-1 text-4xl" style={{position: "relative", left: "-50%", textStroke: "2px white"}}>
                    PAUSED
                </div>
            </div>
            {row}
            </div> : <></>}

        </div> 

        </>
    )
}

export default GenerateStatic;