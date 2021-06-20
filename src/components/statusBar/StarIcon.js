import React from 'react';

const StarIcon = ({amount, color}) => {
    return (
        <div className={`flex w-max items-start ${amount === 0 ? 'opacity-50' : 'opacity-100'}`}>
            <svg width="24" height="22" className={`${color} fill-current`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.9995 0L16.0133 7.45817L24 9.16676L18.494 15.4859L19.416 24L11.9995 20.4465L4.58397 24L5.50604 15.4859L0 9.16676L7.98665 7.45817L11.9995 0Z" />
            </svg>
            <div className={`ml-1 ${color} text-md font-medium`}>{`: ${amount}`}</div>
        </div>
    )
}

export default StarIcon;
