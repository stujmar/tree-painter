import React from 'react';
import AcornIcon from './AcornIcon';
import StarIcon from './StarIcon';
import WaterIcon from './WaterIcon';
import {useSelector} from 'react-redux';
import {selectDay} from '../../redux/daySlice';
import {getSeason} from '../../utils/getSeason';

const StatusBar = ({seeds, water, stars,}) => {
    let day = useSelector(selectDay);

    return (
        <div className={`w-full ${getSeason(day).dark}`}>
            <div className="grid grid-cols-3 max-w-7xl mx-auto justify-center items-top py-1 w-max">
                <AcornIcon amount={seeds} />
                <WaterIcon amount={water} />
                <StarIcon amount={stars} />
            </div>
        </div>
    )
}

export default StatusBar;
