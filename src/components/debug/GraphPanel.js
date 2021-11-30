import React from 'react';
import Graph from './Graph';

import {useDispatch, useSelector} from 'react-redux';
import {setSandbox} from '../../redux/gameSlice';
import { selectSandboxMode } from '../../redux/gameSlice';
import ToggleButton from './ToggleButton';

import {
    resetResource, 
    setMode, 
    resetMilestones
    } from '../../redux/gameSlice';
import { resetTrees} from '../../redux/treeSlice';
import { resetStars } from '../../redux/skySlice';

import { setSpeed } from '../../redux/clockSlice';


const GraphPanel = ({toggleGraph}) => {
    const dispatch = useDispatch();
    let isSandbox = useSelector(selectSandboxMode);
    const toggleSandbox = () => {
        dispatch(setSandbox());
    }

    const reset = () => {
        dispatch(resetTrees());
        dispatch(resetStars());
        dispatch(resetResource('acorns'));
        dispatch(resetResource('water'));
        dispatch(resetResource('stars'));
        dispatch(setSpeed(1000));
        dispatch(setMode("NO_MODE"));
        dispatch(resetMilestones());
    }

    return (
        <div className="absolute inset-0 z-50">
                <div className="relative w-full h-full pt-10 bg-green-400">
                    <div className="mx-auto flex justify-center py-4 items-center">
                        <div className="font-bold text-green-800 text-xl comfortaa mr-4">Toggle Sandbox Mode</div>
                        <ToggleButton value={isSandbox} onClick={toggleSandbox} />
                    </div>
                    <button
                        className="fixed hover:bg-green-500 focus:outline-none left-2 top-2 rounded-full z-50 opacity-100"
                        onClick={toggleGraph}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 fill text-white" fill="none"  viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button> 
                    <button 
                    type="button"
                    aria-label="Reset button"
                    className="border-4 block mx-auto bg-green-600 hover:bg-green-700 rounded-lg font-medium text-white border-white px-2 z-10 shadow focus:outline-none"
                    onClick={reset}
                >RESET GAME</button>
                    <Graph />
                </div>
        </div>
    )
}

export default GraphPanel;