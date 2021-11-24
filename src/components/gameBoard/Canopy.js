import React from 'react';

const Canopy = ({height, color, girth, isDead}) => {

    let size = 16 + (height *1.25);
    let isHidden = height === 0 ? "hidden" : "absolute" 

    return <>{isDead ? null : <div 
        style={{zIndex: 50, width: size, height: size, left: -((size-girth)/2), top: (5 - (size))}} 
        className={`rounded-full border-b-4 border-black border-opacity-10 ${color} ${isHidden}`}></div>}</>
}

export default Canopy;