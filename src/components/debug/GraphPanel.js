import React from 'react';
import Graph from './Graph';


import {useDispatch, useSelector} from 'react-redux';
import {resetGame, setSandbox } from '../../redux/gameSlice';
import { selectSandboxMode } from '../../redux/gameSlice';
import { resetTrees} from '../../redux/itemSlice';
import { resetStars } from '../../redux/skySlice';
import { setSpeed } from '../../redux/clockSlice';

import ToggleButton from './ToggleButton';


const GraphPanel = ({toggleGraph}) => {
    const dispatch = useDispatch();
    let isSandbox = useSelector(selectSandboxMode);
    const toggleSandbox = () => {
        dispatch(setSandbox());
    }

    const reset = () => {
        dispatch(resetGame());
        dispatch(setSpeed(1000));
        dispatch(resetStars());
        dispatch(resetTrees());
        localStorage.clear();
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
                    <Graph resetGame={reset} />
                <form className="flex flex-col px-2">
                    <div className="comfortaa text-green-800 font-medium">Saved Game</div>
                    <textarea cols="40" rows="5" value={localStorage.reduxState}></textarea>
                    <div>
                        <button className="bg-green-600 px-1 rounded mt-2 text-white">submit</button>
                    </div>
                </form>
                </div>
        </div>
    )
}

export default GraphPanel;