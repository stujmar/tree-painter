import React from 'react';
import { useSelector } from 'react-redux';
import { selectSandboxMode } from '../../redux/gameSlice';

import SeasonControls from './SeasonControls';
import SpeedControls from './SpeedControls';
import TimeDisplay from './TimeDisplay';

const Temp = () => {
    let isSandbox = useSelector(selectSandboxMode);

    return (
        <div className="absolute top-0 left-0">
            <div className="flex w-screen justify-between p-3 comfortaa text-lg">
                <div className="flex md:flex-col w-max items-start"> {/* LEFT SECTION */}
                    <TimeDisplay />
                </div>
                <div className="flex flex-col items-end"> {/*RIGHT SECTION*/}
                        {isSandbox ? <SpeedControls /> : null }
                        {isSandbox ? <SeasonControls /> : null}
                </div>
            </div>
        </div>    
    )
}

export default Temp;
