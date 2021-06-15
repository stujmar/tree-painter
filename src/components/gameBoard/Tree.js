import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { removeTreeById, selectMode } from '../../redux/gameSlice';
import Trunk from './Trunk';

const Tree = ({treeData}) => {

    const dispatch = useDispatch();
    const [ trunks, setTrunks ] = useState([]);
    let seedCrop = treeData.age === 0 ? "overflow-hidden" : "overflow-visible";
    let mode = useSelector(selectMode);

    const handleClick = (id) => {
        if (mode === "CHOPPING") {
            dispatch(removeTreeById(id)); 
        } else if (mode === "WATERING") {
            console.log("you watered tree:", id);
        }
    };

    useEffect(() => {
        setTrunks(treeData.growth.map((trunk) => {
            return <Trunk key={Math.floor(Math.random() * 10000)} trunkData={trunk} />
        }))
    },[treeData])

    return (
        <button
            onClick={() => handleClick(treeData.id)}
            className="absolute focus:outline-none"
            style={{
                top: treeData.y, 
                left: treeData.x, 
                height: `24px`,
                width: `26px`,
                overflow: {seedCrop}
                }}
            >
            <div className={`w-full h-full relative ${seedCrop}`}>
                <div className="absolute bottom-0 left-1 flex flex-col-reverse">
                    {trunks}
                    <div className={`rounded-full ${treeData.age <= 2 ? '-ml-1 h-6 w-6' : '-ml-2 h-8 w-8'} bg-green-300 ${treeData.age === 0 ? "hidden" : ""}`}></div>
                </div>
                <div className={`bg-orange-500 absolute -bottom-2 left-1 rounded-2xl h-4 w-4 ${treeData.age > 0 ? "hidden" : ""}`}></div>
            </div>
        </button>
    )
}

export default Tree;
