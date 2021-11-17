import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectSandboxMode, updateResource } from '../../redux/gameSlice';
import { selectMode } from '../../redux/gameSlice';
import { selectHour } from '../../redux/hourSlice';
import { removeStarById } from '../../redux/skySlice';

const Star = ({starData}) => {

    const dispatch = useDispatch();

    const [opacity, setOpacity] = useState(1);

    let isSandbox = useSelector(selectSandboxMode);
    let mode = useSelector(selectMode);
    let hour = useSelector(selectHour);

    useEffect(() => {
        setOpacity(hour <= 4 || hour >= 18 ?  1.0 : 0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
     },[hour])

    const handleStarClick = () => {
        if(mode === 'CHOPPING') {
            dispatch(removeStarById(starData.id));
            if (!isSandbox) {
                dispatch(updateResource({type: "stars", amount: 1}));
            }
        }
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
