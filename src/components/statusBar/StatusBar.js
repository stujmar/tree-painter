import React from 'react';
import AcornIcon from './AcornIcon';
import StarIcon from './StarIcon';
import WaterIcon from './WaterIcon';
import {useSelector} from 'react-redux';
import {selectResources} from '../../redux/gameSlice';
import {selectDay} from '../../redux/daySlice';
import {getSeason} from '../../utils/getSeason';

const StatusBar = () => {
    let day = useSelector(selectDay);
    let { seeds, water, stars} = useSelector(selectResources);

    const addAcorn = () => {
        console.log("Acorn Added");
    }

    return (
        <div className={`w-full comfortaa ${getSeason(day).dark}`}>
            {/* <div className="grid grid-cols-3 max-w-7xl mx-auto justify-start items-top py-1 w-max"> */}
            <div className="flex pl-3 mx-auto justify-start items-top py-1 justify-start gap-3">
                <button className="focus:outline-none" onClick={() => addAcorn()}><AcornIcon amount={seeds} color={getSeason(day).text} /></button>
                <WaterIcon amount={water} color={getSeason(day).text}/>
                <StarIcon amount={stars} color={getSeason(day).text}/>
            </div>
        </div>
    )
}

export default StatusBar;
