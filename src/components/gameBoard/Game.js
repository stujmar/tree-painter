import React, { useState, useEffect } from 'react';
import { getRandomId } from '../../utils/getRandomId';

import { useSelector, useDispatch } from 'react-redux';
import {
    setMouse,
    selectMouse,
    resetResource, 
    updateSeeds, 
    selectMode, 
    setMode, 
    selectResources,
    setGrassLoaded,
    toggleDebug
    } from '../../redux/gameSlice';
import { addTree, resetTrees, ageTrees, selectTrees, growTreeById} from '../../redux/treeSlice';
import { resetStars } from '../../redux/skySlice';
import { selectHour } from '../../redux/hourSlice';

import Sky from '../sky/Sky';
import Tree from './Tree';
import HUD from './HUD';
import { setSpeed } from '../../redux/clockSlice';
import Well from '../farm/Well';
import DebugPanel from '../debug/DebugPanel';
import { coinFlipRatio } from '../../utils/coinFlip';


const Game = ( { messageChange, toggleGraph } ) => {
    const MAX_TREE_HEIGHT = 15;

    const [ drawTrees, setDrawTrees ] = useState([]);
    const [ hasLoaded, setHasLoaded ] = useState(false);

    let hour = useSelector(selectHour);
    let mode = useSelector(selectMode);
    let trees = useSelector(selectTrees);
    let mouse = useSelector(selectMouse);
    let resources = useSelector(selectResources);
    let seeds = resources.seeds;
    const dispatch = useDispatch();

    // const handleDelete = (id) => {
    //     dispatch(updateSeeds(1));
    //     dispatch(removeTree(id));
    // } 

    const messageCenter = {
        "welcome": <p><span  className="font-medium">Welcome to Tree Painter Studio.</span><br/> Click below to plant a seed.</p>,
        "first_seed" : "Wow, you are planting now!",
        "first_water" : "Yum that tree was thirsty!",
        "no_seeds" : "Oops all out of seeds",
        "no_water" : "Oops all out of water",
        "no_trees" : "Oops all out of trees! Switch to planting mode",
    };

    let grass = document.getElementById('grass');

    if (!!grass && !hasLoaded) {
        dispatch(setGrassLoaded({ clientHeight: grass.clientHeight, clientWidth: grass.clientWidth}));
        setHasLoaded(true);
        console.log('grass loaded:', grass);
    }
    // grass ? dispatch(setGrassLoaded({ clientHeight: grass.clientHeight, clientWidth: grass.clientWidth})) : dispatch(setGrassLoaded(false)); 

    useEffect(() => {
        messageChange(messageCenter.welcome);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]
    )

    useEffect(() => {
        if (!!trees.length) {
            dispatch(ageTrees());
            // For each tree.
            trees.forEach((tree) => {
                if (coinFlipRatio(0.5) && tree.growth.length <= MAX_TREE_HEIGHT) {
                    // updated some data on the tree.
                    let updatedTree = { id: tree.id, growth: {id: "trunk_" + getRandomId(), left: 0, right: 0}};
                    // and send it off to the tree.
                    dispatch(growTreeById(updatedTree)); 
                } else {
                    console.log("no growth today");
                }
            })
            // dispatch(growTrees({id: "trunk_" + getRandomId(), left: 0, right: 0}));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[hour])

    useEffect(() => {
        let sortedTrees = trees.slice().sort((a, b) => {
            return a.y - b.y
        }); // frozen in strict mode?
        setDrawTrees(sortedTrees.map(tree => {
            return <Tree key={tree.id} treeData={tree} />
        }));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[trees])

    const handleMouseMove = (e) => {
        if (!!grass) { // Shot in the dark to avoid "Cannot read property 'clientWidth' of null"
            dispatch(setMouse({
                x:e.nativeEvent.offsetX > 0 ? e.nativeEvent.offsetX : 0,
                y:e.nativeEvent.offsetY > 0 ? e.nativeEvent.offsetY : 0,
                xMax: grass.clientWidth,
                yMax: grass.clientWidth
                
            }))
        }
    }

    const handleStrayClick = (e) => {
        if (trees.length === 0 && mode === "CHOPPING") {
            messageChange(messageCenter.no_trees);
        }
    }

    const plant = (e) => {
        messageChange(messageCenter.first_seed);
        if (seeds > 0) {
            // Set Trees in Redux state.
            let newId = "tree_" + getRandomId();
            dispatch( addTree({
                id: newId,
                x: parseInt((mouse.x/grass.clientWidth* 100).toFixed()),
                y: parseInt((mouse.y/grass.clientHeight * 100).toFixed()),
                age: 0,
                growth: []
            }) );

            dispatch(updateSeeds(-1));
        }
    }

    const handleToggleDebug = () => {
        dispatch(toggleDebug());
    }

    const reset = () => {
        dispatch(resetTrees());
        dispatch(resetStars());
        dispatch(resetResource('seeds'));
        dispatch(resetResource('water'));
        dispatch(resetResource('stars'));
        dispatch(setSpeed(1000));
        dispatch(setMode("PLANTING"));
    }

    return (
        <div className="overflow-hidden">
            <div className="w-full relative overflow-hidden" style={{height: "100px"}}> {/* SKY FIELD */}
                <Well />
                <Sky />
            </div>
                <div 
                    className="mx-auto lg:mr-auto w-full z-10 relative"
                    onClick={() => handleStrayClick()}
                    > {/* Gameboard Wrapper */}
                        <div 
                            id="grass"
                            className={`absolute top-0 opacity-0 bg-black z-10 w-full ${seeds ? "seed-cursor" : "no-seed-cursor"} ${mode === "PLANTING" ? "" : "hidden" }`} 
                            style={{height: "calc(100vh - 324px)"}}
                            onMouseMove={(e) => handleMouseMove(e)}
                            onClick={(e) => plant(e)} 
                            ></div> {/* Grass Mouse Sensor */}
                            {drawTrees} 
                            <div 
                                className="mx-auto bg-green-500 w-full h-72 overflow-hidden"
                                style={{height: "calc(100vh - 324px)"}}
                                ></div>
                        <HUD />
                        <div className="flex flex-row fixed bottom-3 right-3 gap-2" style={{ zIndex: 49 }}>
                            <button 
                                className="border-4 rounded-lg hover:bg-green-600 border-white z-10 px-1 shadow focus:outline-none"
                                onClick={toggleGraph}>
                                <svg width="24" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 9.2712L22.8263 0L16.4515 5.80651L19.2029 7.0696L15.3707 18.1769L7.68919 2.75585L0 21.9927L1.99984 23.0549L7.90363 8.28523L15.7316 24L21.2487 8.0081L24 9.2712Z" fill="white"/>
                                </svg>
                            </button>
                            <button 
                                onClick={() => handleToggleDebug()}
                                className="border-4 rounded-lg hover:bg-green-600 border-white z-10 px-1 shadow focus:outline-none">
                                <svg width="22" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <path d="M4.65183 11.5393C4.8337 10.6647 5.12545 9.83135 5.52613 9.03719C5.56307 8.96351 5.53844 8.93002 5.4854 8.88696C4.68498 8.24302 3.8912 8.1483 2.97997 8.72335C2.66359 8.92332 2.38511 9.16827 2.14451 9.45914C1.83382 9.83518 1.32326 9.91364 0.939632 9.65147C0.553162 9.38738 0.41013 8.86687 0.650726 8.46692C0.782391 8.24876 0.967102 8.0574 1.14992 7.87752C1.69836 7.33595 2.32827 6.91782 3.06711 6.6901C4.21705 6.33607 5.28079 6.54849 6.2697 7.21348C6.35117 7.26802 6.43073 7.32639 6.52167 7.38954C6.60881 7.27663 6.68933 7.16181 6.78121 7.05752C7.10611 6.6901 7.4348 6.32459 7.76443 5.96196C7.80801 5.91316 7.82316 5.88158 7.78811 5.81652C7.04075 4.43582 7.16105 3.09436 7.97851 1.79021C8.27404 1.31849 8.63873 0.905145 9.06782 0.552077C9.46661 0.22293 10.0387 0.287037 10.3523 0.691774C10.6611 1.09173 10.5768 1.64955 10.1846 1.98253C9.68637 2.40736 9.30842 2.92213 9.1455 3.57373C9.05646 3.92871 9.08772 4.27986 9.21749 4.62145C9.22791 4.64919 9.24306 4.67503 9.2478 4.6846C9.67595 4.43295 10.1013 4.18418 10.5247 3.93349C10.5881 3.89617 10.6317 3.89426 10.6904 3.95358C12.0952 5.37638 13.5018 6.79631 14.9085 8.21719C14.9246 8.23345 14.9407 8.24972 14.9643 8.27364C11.9161 11.3527 8.87269 14.427 5.81503 17.5156C5.71747 17.3759 5.61517 17.24 5.52328 17.0975C4.82802 16.0153 4.5088 14.8193 4.4747 13.539C4.4728 13.4596 4.44534 13.4252 4.37998 13.3946C3.71976 13.0874 3.09742 13.1994 2.49688 13.563C2.15019 13.7735 1.8556 14.0462 1.58754 14.3514C1.28253 14.6978 0.831647 14.7733 0.456544 14.5552C-0.0312803 14.272 -0.152526 13.6204 0.215 13.1783C0.7966 12.4789 1.4985 11.9392 2.3548 11.6225C3.08037 11.3546 3.81732 11.3183 4.56469 11.5288C4.58647 11.5345 4.60826 11.5393 4.63099 11.5441C4.63289 11.5441 4.63668 11.5421 4.65183 11.5393Z" fill="white"/>
                                        <path d="M15.2191 18.8455C14.3316 19.2914 13.4118 19.6091 12.4542 19.7765C12.4608 20.0377 12.4826 20.2894 12.4712 20.5391C12.4343 21.3591 12.1283 22.0825 11.6632 22.7446C11.3819 23.1465 11.0532 23.5062 10.6724 23.8124C10.2907 24.1205 9.72708 24.0392 9.41639 23.6402C9.11801 23.2575 9.19569 22.6872 9.567 22.3743C10.033 21.9801 10.3958 21.5055 10.5862 20.9123C10.6819 20.6157 10.6989 20.3143 10.6412 20.0062C10.6241 19.9162 10.5881 19.8923 10.501 19.8866C9.37092 19.8167 8.31097 19.5124 7.34574 18.902C7.17051 18.791 7.00379 18.6666 6.82666 18.5441C9.88243 15.4574 12.9249 12.3841 15.9788 9.29932C16.0091 9.32993 16.0375 9.35864 16.065 9.38639C17.4555 10.791 18.8451 12.1956 20.2376 13.5983C20.3029 13.6643 20.3228 13.7122 20.2707 13.8002C20.0339 14.203 19.8047 14.6116 19.5707 15.0221C19.9259 15.1455 20.2934 15.1426 20.661 15.0259C21.0958 14.8881 21.4671 14.6422 21.7958 14.3284C21.9388 14.1925 22.061 14.0346 22.2059 13.9007C22.5602 13.5744 23.083 13.5706 23.4155 13.8815C23.7802 14.2241 23.8408 14.7417 23.5197 15.1312C22.8415 15.9559 22.0108 16.5645 20.965 16.8286C20.1068 17.0448 19.2809 16.9348 18.4928 16.5367C18.3952 16.487 18.345 16.5023 18.273 16.576C17.8363 17.0285 17.3675 17.4448 16.8626 17.8189C16.8323 17.8409 16.8048 17.8677 16.7679 17.8983C16.8038 17.9691 16.8408 18.0389 16.8758 18.1097C17.4896 19.3297 17.4271 20.5362 16.784 21.7208C16.4534 22.3303 16.0214 22.8632 15.4711 23.2833C15.0856 23.578 14.5551 23.4919 14.252 23.112C13.9527 22.736 13.9868 22.203 14.3448 21.8806C14.7152 21.5467 15.042 21.1802 15.2655 20.7276C15.5677 20.1181 15.58 19.5096 15.2532 18.9039C15.2466 18.8896 15.2362 18.8733 15.2191 18.8455Z" fill="white"/>
                                        <path d="M12.0488 3.28948C13.0425 2.96033 14.0494 2.79576 15.0894 2.82159C15.1984 2.37189 15.3727 1.95471 15.6095 1.56528C15.9268 1.04286 16.3189 0.584539 16.7888 0.196069C17.1535 -0.10533 17.6858 -0.0527051 18.0192 0.311845C18.3252 0.646733 18.3195 1.20265 18.0022 1.53371C17.8156 1.72794 17.6166 1.91165 17.4348 2.11067C17.1904 2.37954 16.9413 2.84934 16.8949 3.0895C19.0972 3.78703 20.5133 5.25671 21.1564 7.50046C21.452 7.37703 21.7182 7.20384 21.955 6.98856C22.1293 6.83068 22.2865 6.65367 22.4513 6.48527C22.7667 6.16473 23.2659 6.12072 23.6136 6.38385C23.9915 6.66994 24.1232 7.17705 23.8693 7.56456C23.696 7.82865 23.4667 8.06211 23.2328 8.27548C22.619 8.83331 22.1747 9.08113 21.3857 9.35478C21.3885 10.3384 21.2275 11.2981 20.9187 12.2492C17.9586 9.26006 15.0099 6.28051 12.0488 3.28948Z" fill="white"/>
                                    </g>
                                </svg>
                            </button>
                            <button 
                                type="button"
                                className="border-4 hover:bg-green-600 rounded-lg font-medium text-white border-white px-2 z-10 shadow focus:outline-none"
                                onClick={reset}
                            >RESET</button>
                        </div>
                </div> 
            {grass ? <DebugPanel handleClose={handleToggleDebug} /> : <></>}
        </div>
    )
}

export default Game;
