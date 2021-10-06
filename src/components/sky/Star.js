import React, { useState, useEffect } from 'react';
import { selectHour } from '../../redux/hourSlice';
import { useSelector } from 'react-redux';

const Star = ({starData}) => {
    const [opacity, setOpacity] = useState(1);
    let hour = useSelector(selectHour);

    useEffect(() => {
        setOpacity(hour <= 6 || hour >= 20 ?  1 : 0);
     },[hour])

    return (
        <div 
            key={`${starData.x} + ${starData.y}`} 
            className="absolute"
            style={{
                left: `${starData.x}%`, 
                top: `${starData.y}%`, 
                opacity: opacity,
            }}
            ></div>
    );
}

export default Star;
