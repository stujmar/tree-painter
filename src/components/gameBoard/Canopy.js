import React from 'react';

const Canopy = ({age, color}) => {
    switch(age) {
        case 0:
            return <></>;
        case 1:
            return <div style={{zIndex: 50}} className={`rounded-full -ml-2 -mb-1 h-6 w-6 ${color}`}></div>
        case 2:
            return <div style={{zIndex: 50}} className={`rounded-full -ml-2 -mb-1 h-7 w-7 ${color}`}></div>
        case 3:
            return <div style={{zIndex: 50}} className={`rounded-full -ml-2 -mb-1 h-8 w-8 ${color}`}></div>
        case 4:
            return <div style={{zIndex: 50}} className={`rounded-full -ml-2 -mb-1 h-9 w-9 ${color}`}></div>
        default:
            return <div style={{zIndex: 50}} className={`rounded-full -ml-2 -mb-1 h-10 w-10 ${color}`}></div>
    }
}

export default Canopy;