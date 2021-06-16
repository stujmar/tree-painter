import React from 'react';

const Canopy = ({age}) => {
    switch(age) {
        case 0:
            return <></>;
        case 1:
            return <div className={`rounded-full -ml-2 -mb-1 h-6 w-6 bg-green-300`}></div>
        case 2:
            return <div className={`rounded-full -ml-2 -mb-1 h-7 w-7 bg-green-300`}></div>
        case 3:
            return <div className={`rounded-full -ml-2 -mb-1 h-8 w-8 bg-green-300`}></div>
        default:
            return <div className={`rounded-full -ml-2 -mb-1 h-9 w-9 bg-green-300`}></div>
    }
}

export default Canopy;