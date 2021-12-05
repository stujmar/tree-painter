import React from 'react';
// import { useState } from 'react';

const ToggleButton = ({ value, onClick }) => {

    const handleClick = () => {
        onClick();
    }

    return (
        <button type="button" className="focus:outline-none select-none" onClick={handleClick}>
        <div className="w-12 h-6 bg-green-700 shadow-lg rounded-full select-none">
            <div 
                style={{ 
                transform: `${value ? 'translateX(24px)' : 'translateX(0px)'}`,
                WebKitTransform: `${value ? 'translateX(24px)' : 'translateX(0px)'}`,
                background: `${value ? '#A3E635' : '#E4E4E7'}`
                }}
                className="w-6 h-6 focus:outline-none ease-in-out duration-200 shadow-lg transform rounded-full select-none"></div>
        </div>
        </button>
    )
}

export default ToggleButton;