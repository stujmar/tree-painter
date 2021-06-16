import React, { useState } from 'react';

const Static = () => {
    const [ grid, setGrid ] = useState(false);
    let skyDimensions = document.getElementById('static');
    
    if (!!skyDimensions && !grid) {
        let array = []
        for ( let i = 0; i < skyDimensions.clientWidth; i++ ) {
        // for ( let i = 0; i < (Math.floor(skyDimensions.clientWidth/10) * Math.floor(skyDimensions.clientHeight/10)); i++ ) {
        array.push({id: i})
        }
        // console.log(skyDimensions.clientWidth);
        setGrid(array.map((square) => {
            Math.floor(Math.random() * 2)
            return <div className={`h-3 w-3 transition-colors ${Math.floor(Math.random() * 2) === 0 ? "bg-black" : "bg-white"}`} key={square.id}></div>
        }))
        setTimeout(() => {
            setGrid(false)
        },2000)
    }

    return (
    <div id="static" className="top-0 h-full w-full absolute z-100 flex flex-wrap justify-center bg-black transition-colors">
        <div style={{position: "absolute", left: "50%"}}>
            <div className="font-bold text-red-500 top-6 text-4xl" style={{position: "relative", left: "-50%"}}>
            PAUSED
            </div>
        </div>
        {grid}
    </div>
    )
};

export default Static