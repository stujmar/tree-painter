import React, { useState, useEffect } from 'react';
import { selectHour } from '../../redux/hourSlice';
import { useSelector } from 'react-redux';

const Star = ({starData}) => {
    const [opacity, setOpacity] = useState(1);
    let hour = useSelector(selectHour);

    useEffect(() => {
        setOpacity(hour <= 6 || hour >= 20 ?  1.0 : 0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
     },[hour])

    const handleStarClick = () => {
        console.log(starData);
    }

    return (
        <div 
            key={`${starData.x} + ${starData.y}`} 
            className="absolute w-1 h-1 focus:outline-none bg-white border transition duration-slow rounded-full"
            onClick={() => {handleStarClick()}}
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
