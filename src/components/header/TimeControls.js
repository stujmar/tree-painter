import React from 'react';
import { useSelector } from 'react-redux';
import { getTime, getDate } from '../../utils/dateTimeConverters';
import { selectDay } from '../../redux/daySlice';
import { selectHour } from '../../redux/hourSlice';
import SeasonControls from './SeasonControls';
import { selectSandboxMode } from '../../redux/gameSlice';
import SpeedControls from './SpeedControls';
const TimeControls = () => {

    const day = useSelector(selectDay);
    const hour = useSelector(selectHour);

    let isSandbox = useSelector(selectSandboxMode);

    return (
        <div className="absolute top-0 left-0">
            <div className="flex w-screen justify-between p-3 comfortaa text-lg">
                <div className="flex md:flex-col w-max items-start"> {/* LEFT SECTION */}
                    <div>{getDate(day)}</div>
                    <div className="ml-2 md:ml-0">{getTime(hour)}</div>
                </div>
                <div className="flex flex-col items-end"> {/*RIGHT SECTION*/}
                        {isSandbox ? <SpeedControls /> : null }
                        {isSandbox ? <SeasonControls /> : null}
                </div>
            </div>
        </div>    
    )
}

export default TimeControls;
