import React from 'react';
import Sunset from './Sunset'

const Sky = ({ hour }) => {
    const clickSky = () => {
        console.log("Sky");
    }

    return (
        <button 
            onClick={clickSky}
            className="absolute z-0 mx-auto lg:mr-auto bg-blue-400 absolute w-full relative focus:outline-none" style={{height: 100}}>
            <Sunset opacity={.25} />
        </button> 
    )   
}

export default Sky;
