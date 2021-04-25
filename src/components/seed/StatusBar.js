import React from 'react';

const StatusBar = ({seeds, water, stars,}) => {

    return (
        <div className="w-full bg-green-200">
            <div className="flex max-w-7xl mx-auto justify-center">
                <div className="px-1">{`seeds:${seeds}`}</div>
                <div className="px-1">{`water:${water}`}</div>
                <div className="px-1">{`stars:${stars}`}</div>
            </div>
        </div>
    )
}

export default StatusBar;