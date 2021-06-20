import React from 'react';

const WaterIcon = ({amount, color}) => {
    return (
        <div className={`flex w-max items-start ${amount === 0 ? 'opacity-50' : 'opacity-100'}`}>
            <svg width="18" height="22" className={`${color} fill-current`} viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g >
                <path d="M18 16.1163C18 20.3909 14.1251 24.0208 8.96003 24C4.00662 23.9792 0 20.6517 0 16.5483C0 9.64411 9.00392 0 9.00392 0C9.00392 0 18 8.32865 18 16.1163Z" fill="white"/>
                </g>
            </svg>
            <div className={`ml-1 ${color} text-md font-medium`}>{`: ${amount}`}</div>
        </div>
    )
}

export default WaterIcon;
