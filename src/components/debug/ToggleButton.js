import React from 'react';
// import { useState } from 'react';

const ToggleButton = ({ value, onClick }) => {

    const handleClick = () => {
        onClick();
    }

    return (
        <button type="button" className="focus:outline-none" onClick={handleClick}>
        <div className="w-16 h-8 bg-green-700 shadow-lg rounded-full">
            <div 
                style={{ transform: `${value ? 'translateX(32px)' : 'translateX(0)'}`,
                background: `${value ? '#A3E635' : '#E4E4E7'}` }}
                className="w-8 h-8 focus:outline-none ease-in-out duration-200 shadow-lg transform rounded-full"></div>
        </div>
        </button>
    )
}

export default ToggleButton;