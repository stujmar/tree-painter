import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTime, getDate } from '../../utils/dateTimeConverters';
import { selectDay } from '../../redux/daySlice';
import { selectHour } from '../../redux/hourSlice';
import { setSpeed, selectSpeed } from '../../redux/clockSlice';
import SeasonControls from './SeasonControls';
import { selectSandboxMode } from '../../redux/gameSlice';
const TimeControls = () => {
    const dispatch = useDispatch();

    const day = useSelector(selectDay);
    const hour = useSelector(selectHour);
    const speed = useSelector(selectSpeed);

    let isSandbox = useSelector(selectSandboxMode);
    let stop = 123456789;


    const changeSpeed = (_speed) => {
        setSpeed(_speed);
        dispatch(setSpeed(_speed));
    }

    return (
        <div className="absolute top-0 left-0">
        <div className="flex w-screen justify-between p-3 comfortaa text-lg">
            <div className="flex md:flex-col w-max items-start"> {/* LEFT SECTION */}
                <div>{getDate(day)}</div>
                <div className="ml-2 md:ml-0">{getTime(hour)}</div>
            </div>
            <div className="flex flex-col items-end"> {/*RIGHT SECTION*/}
                    <div className="flex items-start"> {/*SPEED CONTROLS*/}
                        <button className="focus:outline-none" type="button" onClick={() => changeSpeed(stop)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {/* <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={speed === stop ? 3 : 1} d="M6 18L18 6M6 6l12 12" /> */}
                            <line strokeLinecap="round" strokeLinejoin="round" strokeWidth={speed === stop ? 3 : 1} x1="9" y1="5" x2="9" y2="18" />
                            <line strokeLinecap="round" strokeLinejoin="round" strokeWidth={speed === stop ? 3 : 1} x1="17" y1="5" x2="17" y2="18" />
                        </svg>
                        </button>
                        <button className="focus:outline-none" type="button" onClick={() => changeSpeed(1000)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={speed === 1000 ? 3 : 1} d="M9 5l7 7-7 7" />
                        </svg>
                        </button>
                        <button className={`${speed === 500 ? "font-bold": "font-normal"} focus:outline-none`} type="button" onClick={() => changeSpeed(500)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={speed === 500 ? 3 : 1} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                    {isSandbox ? <SeasonControls /> : null}
            </div>
        </div>
        </div>    
    )
}

export default TimeControls;
