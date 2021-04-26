import React from 'react';
import AcornIcon from './AcornIcon';
import WaterIcon from './WaterIcon';

const StatusBar = ({seeds, water, stars,}) => {

    return (
        <div className="w-full bg-green-200">
            <div className="flex max-w-7xl mx-auto justify-center items-top py-1">
                <AcornIcon amount={seeds} />
                <WaterIcon amount={water} />
                <div className="px-1 pt-1">{`stars:${stars}`}</div>
            </div>
        </div>
    )
}

export default StatusBar;