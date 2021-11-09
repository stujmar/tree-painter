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
    let trunkWidth = trunkGirth();

    const handleClick = (id) => {
        if (mode === "CHOPPING") {
            dispatch(removeTreeById(id)); 
            dispatch(updateResource({type: "seeds", amount: 1}));
        } else if (mode === "WATERING" && resources.water > 0 && treeData.growth.length < 15) {
            onWater(treeData)
            dispatch(updateResource({type: 'water', amount: -1}));
        }
    };

    function trunkGirth() {
        let girth = (treeData.age - treeData.growth.length)/2;
        console.log(girth)
        if (girth < 6) {
            return 6
        } else if (girth > 20) {
            return 20
        } else {
        return girth
        }
    }

    useEffect(() => {
        setTrunks(treeData.growth.map((trunk) => {
            return <Trunk key={trunk.id} color={canopyColor} trunkData={trunk} girth={trunkWidth} />
        }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            <div className={`bg-orange-500 absolute -bottom-3 semi-circle rounded-2xl h-4 w-4 ${treeData.growth.length > 0 ? "hidden" : ""}`}></div>
            <div 
            className={`relative h-full mx-auto`} style={{width: trunkWidth}}>
                <div 
                    className="flex flex-col-reverse items-center mx-auto absolute bottom-0">
                    <div className="relative w-100 h-100">
                        {trunks}
                        <Canopy height={treeData.growth.length} color={canopyColor} girth={trunkWidth} />
                    </div>
                </div>
            </div>
        </button>
    )
}

export default Tree;
