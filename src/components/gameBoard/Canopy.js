import React from 'react';

const Canopy = ({height, color, girth}) => {

    let size = 16 + (height *1.25);
    let isHidden = height === 0 ? "hidden" : "absolute" 

    return <div 
        style={{zIndex: 50, width: size, height: size, left: -((size-girth)/2), top: (5 - (size))}} 
        className={`rounded-full ${color} ${isHidden}`}></div>
}

export default Canopy;