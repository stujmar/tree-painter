import React from 'react';
import Sunset from './Sunset'

const Sky = ({ hour }) => {
    const clickSky = () => {
        console.log("Sky");
    }

    return (
        <button 
            onClick={clickSky}
            className="mx-auto lg:mr-auto bg-blue-400 w-96 relative focus:outline-none" style={{height: 100}}>
            <Sunset opacity={.25} />
        </button> 
    )   
}

export default Sky;
