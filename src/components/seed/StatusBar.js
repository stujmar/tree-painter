import React from 'react';

const StatusBar = ({seeds, water, stars,}) => {

    return (
        <div className="flex w-full bg-green-200">
            <div>{`seeds:${seeds}`}</div>
            <div>{`water:${water}`}</div>
            <div>{`stars:${stars}`}</div>
        </div>
    )
}

export default StatusBar;