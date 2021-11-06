import React from 'react';

const Canopy = ({height, color}) => {

    let size = 16 + height;
    let isHidden = height === 0 ? "hidden" : "absolute" 

    return <div 
        style={{zIndex: 50, width: size, height: size, left: -((size-16)/2), top: (3 - (size))}} 
        className={`rounded-full ${color} ${isHidden}`}></div>
    // switch(height) {
    //     case 0:
    //         return <></>;
    //     case 1:
    //         return <div style={{zIndex: 50}} className={`absolute rounded-full h-6 w-6 ${color}`}></div>
    //     case 2:
    //         return <div style={{zIndex: 50}} className={`absolute rounded-full h-7 w-7 ${color}`}></div>
    //     case 3:
    //         return <div style={{zIndex: 50}} className={`absolute rounded-full h-8 w-8 ${color}`}></div>
    //     case 4:
    //         return <div style={{zIndex: 50}} className={`absolute rounded-full h-9 w-9 ${color}`}></div>
    //     default:
    //         return <div style={{zIndex: 50}} className={`absolute rounded-full h-10 w-10 ${color}`}></div>
    // }
}

export default Canopy;