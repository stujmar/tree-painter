import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectTrees } from '../../redux/treeSlice';
import { selectGrassLoaded } from '../../redux/gameSlice';
import { selectDay } from '../../redux/daySlice';
import { getSeason } from '../../utils/getSeason';

/**
 * 
 * isActive is a boolean that is used to determine if the debug modal is open or not.
 * @returns 
 */
const DebugModal = ( { isActive, mouse, grass } ) => {
    let [ infoPanels, setInfoPanels ] = useState( [] ); // array of info panels
    let trees = useSelector(selectTrees); // Grab tree data from Redux store
    let isGrassLoaded = useSelector(selectGrassLoaded); // Grab grassLoaded data from Redux store
    let day = useSelector(selectDay); // Grab day data from Redux store

    useEffect(() => {
        setInfoPanels(trees.map((item) =>
            <div key={item.id}>{item.id}</div>
        )
            )
    }, [trees])

    return (
        <div 
            style={{ transform: isActive ? "translateY(0px)" : "translateY(-300px)" }}
            className={`w-screen absolute top-0 ${getSeason(day).light} transition border-b-4 ${getSeason(day).border} border-box overflow-y-auto h-56`}> {/* DeBug */}
            <div className={`flex p-2 justify-between ${getSeason(day).dark}`}>
                <div className="w-30 comfortaa text-green-50" >{isGrassLoaded ? `x: ${mouse.x}/${grass.clientWidth} y: ${mouse.y}/${grass.clientHeight}` : ""}</div>
                {/* <button className="bg-green-200 px-1 rounded border shadow">Print Tree Data</button> */}
                <div className="w-30 comfortaa pl-1 text-green-50" >{isGrassLoaded ? `x: ${(mouse.x/grass.clientWidth* 100).toFixed()}% y: ${(mouse.y/grass.clientHeight * 100).toFixed()}%` : ""}</div>
            </div>
            <div className="pl-2">
            <div className="flex flex-wrap ">
                {infoPanels}
            </div>
        </div>
        </div>
)
}

export default DebugModal;