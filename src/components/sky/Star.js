import React, { useState, useEffect } from 'react';
import { selectHour } from '../../redux/hourSlice';
import { useSelector } from 'react-redux';

const Star = ({starData}) => {
    const [opacity, setOpacity] = useState(1);
    let hour = useSelector(selectHour);

    useEffect(() => {
        console.log(hour, opacity);
        setOpacity(hour <= 6 || hour >= 20 ?  1.0 : 0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
     },[hour])

    return (
        <div 
            key={`${starData.x} + ${starData.y}`} 
            className="absolute w-1 h-1 bg-white border rounded-full"
            style={{
                left: `${starData.x}%`, 
                top: `${starData.y}%`, 
                opacity: opacity,
                zIndex: 90
            }}
            ></div>
    );
}

export default Star;
