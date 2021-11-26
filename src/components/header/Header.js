import React from 'react';

import TimeDisplay from './TimeDisplay';
import SpeedControls from './SpeedControls';
import SeasonControls from './SeasonControls';
import { selectMilestones, selectMode} from '../../redux/gameSlice';
import { useSelector } from 'react-redux';
import { selectDay } from '../../redux/daySlice';
import { getSeason } from '../../utils/getSeason';
import { selectSandboxMode, selectMessage } from '../../redux/gameSlice';

const Header = () => {
    let isSandbox = useSelector(selectSandboxMode);
    let isSpeedUnlocked = useSelector(selectMilestones).speed
    let isSiloUnlocked = useSelector(selectMilestones).silo
    const day = useSelector(selectDay);
    const mode = useSelector(selectMode);
    let message = useSelector(selectMessage);

    return (
        <header 
        className={`${getSeason(day).light} h-44 relative flex items-center justify-center text-lg font-sans text-white`}>
        <div className="w-96 text-center pt-12 md:pt-0 comfortaa">{message}</div>
            <div className="absolute comfortaa w-full bottom-0 sm:top-0 -4 sm:h-14">
                <div className={`f-full sm:w-max mx-auto h-full bg-white opacity-60 rounded-none sm:rounded-b-lg ${mode === "NO_MODE" ? " hidden" : " block"}`}>
                    <div className="p-1 sm:p-4 text-center"><span className={`font-bold ${getSeason(day).darkText}`}>{mode} MODE</span></div>
                </div>
            </div>
            <div className="absolute top-0 left-0 w-full">
            <div className="flex w-full justify-between p-3 comfortaa text-lg">
                <div className="flex md:flex-col w-max items-start"> {/* LEFT SECTION */}
                    <TimeDisplay />
                </div>
                <div className="flex flex-col items-end"> {/*RIGHT SECTION*/}
                    {isSandbox || isSpeedUnlocked ? <SpeedControls /> : null }
                    {isSandbox || isSiloUnlocked ? <SeasonControls /> : null}
                </div>
            </div>
        </div>    
      </header>
    )
}

export default Header;

