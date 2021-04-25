import React from 'react';
import AcornIcon from './AcornIcon';

const StatusBar = ({seeds, water, stars,}) => {

    return (
        <div className="w-full bg-green-200">
            <div className="flex max-w-7xl mx-auto justify-center items-top py-1">
                <AcornIcon amount={seeds} />
                <div className="px-1 pt-1">{`:${seeds}`}</div>
                <div className="px-1 pt-1">{`water:${water}`}</div>
                <div className="px-1 pt-1">{`stars:${stars}`}</div>
            </div>
        </div>
    )
}

export default StatusBar;