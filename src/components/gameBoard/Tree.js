import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectResources, updateResource, selectMode } from '../../redux/gameSlice';
import { removeTreeById } from '../../redux/treeSlice';

import Trunk from './Trunk';
import Canopy from './Canopy';
import { getSeason } from '../../utils/getSeason';

const Tree = ({treeData, onWater }) => {

    const dispatch = useDispatch();
    const [ trunks, setTrunks ] = useState([]);
    let canopyColor = getSeason(treeData.birthDay).canopy;
    let seedCrop = treeData.growth.length === 0 ? "overflow-hidden" : "overflow-visible";
    let mode = useSelector(selectMode);
    let resources = useSelector(selectResources);
    let trunkWidth = 16;

    const handleClick = (id) => {
        if (mode === "CHOPPING") {
            dispatch(removeTreeById(id)); 
            dispatch(updateResource({type: "seeds", amount: 1}));
        } else if (mode === "WATERING" && resources.water > 0 && treeData.growth.length < 15) {
            onWater(treeData)
            dispatch(updateResource({type: 'water', amount: -1}));
        }
    };

    useEffect(() => {
        setTrunks(treeData.growth.map((trunk) => {
            return <Trunk key={trunk.id} color={canopyColor} trunkData={trunk} />
        }));
    },[treeData, canopyColor])

    return (
        <button
            onClick={() => handleClick(treeData.id)}
            className="absolute focus:outline-none"
            style={{
                left: `${treeData.x}%`, 
                top: `${treeData.y}%`, 
                overflow: {seedCrop},
                width: "20px",
                height: "20px",
                }}
            >
            <div className={`bg-orange-500 absolute semi-circle rounded-2xl h-4 w-4 ${treeData.growth.length > 0 ? "hidden" : ""}`}></div>
            <div 
            style={{width: trunkWidth}}
            className={`relative mx-auto ${seedCrop}`}>
                <div 
                    className="flex flex-col-reverse items-center mx-auto absolute bottom-0">
                    <div className="relative w-100 h-100">
                        {trunks}
                        <Canopy height={treeData.growth.length} color={canopyColor} />
                    </div>
                </div>
            </div>
        </button>
    )
}

export default Tree;
