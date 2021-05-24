import React from 'react';
import AcornIcon from './AcornIcon';
import StarIcon from './StarIcon';
import WaterIcon from './WaterIcon';

const StatusBar = ({seeds, water, stars,}) => {

    return (
        <div className="w-full bg-green-200">
            <div className="grid grid-cols-3 max-w-7xl mx-auto justify-center items-top py-1 w-max">
                <AcornIcon amount={seeds} />
                <WaterIcon amount={water} />
                <StarIcon amount={stars} />
            </div>
        </div>
    )
}

export default StatusBar;