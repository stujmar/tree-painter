import React, { useState } from 'react';
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
    const [saveText, setSaveText] = useState(window.btoa(localStorage.reduxState));
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

    const handleTextChange = (event) => {
        setSaveText(event.target.value);
    }

    const loadGame = (e) => {
        e.preventDefault();
        let decodedSave = window.atob(e.target.save.value);
        localStorage.setItem('reduxState', decodedSave);
        window.location.reload();
    }

    return (
        <div className="fixed inset-0 z-50">
                <div className="relative w-full h-full bg-green-400">
                <div className="p-2 pt-4 bg-green-200 text-green-700 font-bold text-center text-xl comfortaa">GAME IS PAUSED</div>
                    <div className="mx-auto flex justify-start mt-4 ml-4 items-center">
                        <div className="font-bold text-green-800 text-xl comfortaa mr-4">Toggle Sandbox Mode</div>
                        <ToggleButton value={isSandbox} onClick={toggleSandbox} />
                    </div>
                    <button
                        className="fixed hover:bg-green-500 focus:outline-none left-2 top-2 rounded-full z-50 opacity-100"
                        onClick={toggleGraph}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 fill bg-green-500 text-white rounded-full" fill="none"  viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button> 
                    <Graph resetGame={reset} />
                <form onSubmit={(e) => loadGame(e)} className="flex flex-col px-2 max-w-4xl mx-auto mt-2">
                    <div className="comfortaa text-green-800 font-medium">Saved Game</div>
                    <textarea cols="30" rows="3" name="save" value={saveText} onChange={(e) => handleTextChange(e)}></textarea>
                    <div>
                        <button type="submit" className="bg-green-600 px-1 rounded mt-2 text-white">submit</button>
                    </div>
                </form>
                </div>
        </div>
    )
}

export default GraphPanel;