import React from 'react';

const Star = ({starData}) => {
    return (
        <div 
            key={`${starData.x} + ${starData.y}`} 
            className="absolute"
            style={{
                left: `${starData.x}%`, 
                top: `${starData.y}%`, 
            }}
            ></div>
    );
}

export default Star;
