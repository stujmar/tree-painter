import React from 'react';

import TimeControls from './TimeControls';
import { selectMode} from '../../redux/gameSlice';
import { useSelector } from 'react-redux';
import { selectDay } from '../../redux/daySlice';
import { getSeason } from '../../utils/getSeason';

const Header = ({message}) => {
    const day = useSelector(selectDay);
    const mode = useSelector(selectMode);

    return (
        <header 
        className={`${getSeason(day).light} h-48 relative flex items-center justify-center text-lg font-sans text-white`}>
        <div className="w-96 text-center pt-12 md:pt-0 comfortaa">{message}</div>
            <div className="absolute comfortaa w-full bottom-0 sm:top-0 -4 sm:h-14">
                <div className="f-full sm:w-max mx-auto h-full bg-white opacity-60 sm:rounded-none sm:rounded-b-lg">
                    <div className="p-1 sm:p-4 text-center"><span className={`font-bold ${getSeason(day).darkText}`}>{mode} MODE</span></div>
                </div>
            </div>
          <TimeControls />
      </header>
    )
}

export default Header;

