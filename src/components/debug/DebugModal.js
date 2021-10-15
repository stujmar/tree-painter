import React, { useState } from 'React';
import { useSelector } from 'react-redux';
import { selectTrees } from '../../redux/treeSlice';

/**
 * 
 * debugModal is a boolean that is used to determine if the debug modal is open or not.
 * @returns 
 */
const DebugModal = ( { debugModal } ) => {
    let [ infoPanels, setInfoPanels ] = useState( [] ); // array of info panels
    let trees = useSelector(selectTrees); // Grab tree data from Redux store

    
    return (
        <div 
            style={{ transform: debugModal ? "translateY(0px)" : "translateY(-300px)" }}
            className={`w-screen absolute top-0 ${getSeason(day).light} transition border-b-4 ${getSeason(day).border} p-2 border-box overflow-y-auto h-56`}> {/* DeBug */}
            <div className="flex justify-between mx-4">
                <div>{grass ? `x: ${mouse.x}/${grass.clientWidth} y: ${mouse.y}/${grass.clientHeight}` : ""}</div>
                <button class="bg-green-200 px-1 rounded border shadow">Print Tree Data</button>
                <div>{grass ? `x: ${(mouse.x/grass.clientWidth* 100).toFixed()}% y: ${(mouse.y/grass.clientHeight * 100).toFixed()}%` : ""}</div>
            </div>
            <Debug infoPanel={infoPanel} />
        </div>
)
}

export default DebugModal;