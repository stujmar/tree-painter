import React from 'react';
import Graph from './Graph';

import {useDispatch, useSelector} from 'react-redux';
import {setSandbox} from '../../redux/gameSlice';
import { selectSandboxMode } from '../../redux/gameSlice';

const GraphPanel = ({toggleGraph}) => {
    const dispatch = useDispatch();
    let isSandbox = useSelector(selectSandboxMode);
    const toggleSandbox = () => {
        dispatch(setSandbox());
    }

    return (
        <div className="container mx-auto border">
            <div className="absolute inset-0 w-full h-screen z-50">
                <div className="relative w-full h-full pt-32 bg-green-500">
                    <button type="button" className={`p-2 block w-max mx-auto rounded focus:outline-none ${isSandbox ? "bg-red-400" : "bg-green-200"}`} onClick={toggleSandbox}>Toggle Sandbox Mode</button>
                    <button
                        className="fixed bg-amber-100 hover:bg-amber-200 focus:outline-none right-2 top-2 rounded-full z-50 opacity-100"
                        onClick={toggleGraph}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button> 
                    <Graph />
                </div>
            </div>
        </div>
    )
}

export default GraphPanel;