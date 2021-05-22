import React from 'react';
import Sunset from './Sunset'

const Sky = ({ hour }) => {
    return (
        <div className="mx-auto lg:mr-auto bg-blue-400 w-96 relative" style={{height: 100}}>
            <Sunset opacity={.5} />
        </div> 
    )   
}

export default Sky;