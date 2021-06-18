import { useEffect, useRef, useState } from 'react';
import { coinFlip } from '../../utils/coinFlip';

const GenerateStatic = ({ isPaused }) => {

        const [row, setRow] = useState([]);

        useEffect(() => {
            console.log('onload');
            let array = []
            let parentDimensions = document.getElementById('static');
            for (let i = 0; i < (Math.floor(parentDimensions.clientWidth/8) * Math.floor(parentDimensions.clientHeight/8)); i++) {
                // setRow([...row, <div key={i} className="bg-white h-2 w-2"></div>])
                array.push(<div key={i} className={`${coinFlip() ? 'bg-black' : 'bg-white'} h-2 w-2`}></div>);
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
            let array = []
            let parentDimensions = document.getElementById('static');
            for (let i = 0; i < (Math.floor(parentDimensions.clientWidth/8) * Math.floor(parentDimensions.clientHeight/7)); i++) {
                // setRow([...row, <div key={i} className="bg-white h-2 w-2"></div>])
                array.push(<div key={i} className={`${coinFlip() ? 'bg-black' : 'bg-white'} h-2 w-2`}></div>);
            }
            setRow(array);

        }, 200);
    return (
        <>
        
        <div id="static" className="h-full w-full z-50 absolute justify-center top-0">

            {isPaused ? <div className="relative flex flex-wrap items-start bg-black justify-center overflow-hidden">
            <div style={{position: "absolute", left: "50%"}}>
                <div className="font-bold text-red-600 top-4 text-blend-difference z-30 text-6xl" style={{position: "relative", left: "-50%", textStroke: "2px white"}}>
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