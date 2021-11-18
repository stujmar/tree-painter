import React from 'react';
import { useState } from 'react';

const ToggleButton = () => {

    const [isToggled, setToggled] = useState(false);

    const handleClick = () => {
        console.log("clicking at least");
        setToggled(!isToggled);
    }

    return (
        <button type="button" className="focus:outline-none" onClick={handleClick}>
        <div className="w-16 h-8 bg-green-700 shadow-lg rounded-full">
            <div 
                style={{ transform: `${isToggled ? 'translateX(0)' : 'translateX(32px)'}`,
                background: `${isToggled ? '#E4E4E7' : '#A3E635'}` }}
                className="w-8 h-8 focus:outline-none ease-in-out duration-200 shadow-lg transform rounded-full"></div>
        </div>
        </button>
    )
}

export default ToggleButton;