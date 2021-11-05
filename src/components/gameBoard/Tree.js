import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectResources, updateResource, selectMode } from '../../redux/gameSlice';
import { removeTreeById } from '../../redux/treeSlice';

import Trunk from './Trunk';
import Canopy from './Canopy';

const Tree = ({treeData, onWater }) => {

    const dispatch = useDispatch();
    const [ trunks, setTrunks ] = useState([]);
    let seedCrop = treeData.age === 0 ? "overflow-hidden" : "overflow-visible";
    let mode = useSelector(selectMode);
    let resources = useSelector(selectResources);

    const handleClick = (id) => {
        if (mode === "CHOPPING") {
            dispatch(removeTreeById(id)); 
            dispatch(updateResource({type: "seeds", amount: 1}));
        } else if (mode === "WATERING" && resources.water > 0) {
            onWater()
            dispatch(updateResource({type: 'water', amount: -1}));
        }
    };

    useEffect(() => {
        setTrunks(treeData.growth.map((trunk) => {
            return <Trunk key={trunk.id} trunkData={trunk} />
        }).reverse()); // hacky fix this in the treeSlice
    },[treeData])

    return (
        <button
            onClick={() => handleClick(treeData.id)}
            className="absolute focus:outline-none"
            style={{
                left: `${treeData.x}%`, 
                top: `${treeData.y}%`, 
                height: `24px`,
                width: `40px`,
                overflow: {seedCrop}
                }}
            >
            <div className={`w-full h-full relative ${seedCrop}`}>
                <div className="flex flex-col-reverse items-center absolute bottom-0">
                        {trunks}
                        <Canopy age={treeData.age} />
                    {/* <div className={`rounded-full ${treeData.age <= 2 ? '-ml-1 h-6 w-6' : '-ml-2 h-8 w-8'} bg-green-300 ${treeData.age === 0 ? "hidden" : ""}`}></div> */}
                </div>
                <div className={`bg-orange-500 absolute -bottom-2 left-1 rounded-2xl h-4 w-4 ${treeData.age > 0 ? "hidden" : ""}`}></div>
            </div>
        </button>
    )
}

export default Tree;
