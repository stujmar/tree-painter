import React from 'react';
import Graph from './Graph';

import {useDispatch, useSelector} from 'react-redux';
import {setSandbox} from '../../redux/gameSlice';
import { selectSandboxMode } from '../../redux/gameSlice';
import ToggleButton from './ToggleButton';

const GraphPanel = ({toggleGraph}) => {
    const dispatch = useDispatch();
    let isSandbox = useSelector(selectSandboxMode);
    const toggleSandbox = () => {
        dispatch(setSandbox());
    }

    return (
        <div className="absolute inset-0 z-50">
                <div className="relative w-full pt-10 bg-green-400">
                    <div className="mx-auto flex justify-center py-4 items-center">
                        <div className="font-bold text-green-800 text-xl comfortaa mr-4">Toggle Sandbox Mode</div>
                        <ToggleButton value={isSandbox} onClick={toggleSandbox} />
                    </div>
                    <button
                        className="fixed bg-white bg-opacity-0 hover:bg-opacity-30 focus:outline-none left-2 top-2 rounded-full z-50 opacity-100"
                        onClick={toggleGraph}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 fill text-white" fill="none"  viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button> 
                    <Graph />
                </div>
        </div>
    )
}

export default GraphPanel;