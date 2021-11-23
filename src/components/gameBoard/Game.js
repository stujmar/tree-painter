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
    toggleDebug,
    selectSandboxMode
    } from '../../redux/gameSlice';
import { addTree, addBranch, resetTrees, ageTrees, selectTrees, growTreeById} from '../../redux/treeSlice';
import { resetStars } from '../../redux/skySlice';
import { selectHour } from '../../redux/hourSlice';
import { selectDay } from '../../redux/daySlice';

import Sky from '../sky/Sky';
import Tree from './Tree';
import HUD from './HUD';
import { setSpeed } from '../../redux/clockSlice';
import Well from '../farm/Well';
import Barn from '../farm/Barn';
import DebugPanel from '../debug/DebugPanel';
import { coinFlipRatio } from '../../utils/coinFlip';
import { getRandomInt } from '../../utils/getRandomInt';

const Game = ( { messageChange, toggleGraph } ) => {
    const MAX_TREE_HEIGHT = 15;

    const [ drawTrees, setDrawTrees ] = useState([]);
    const [ hasLoaded, setHasLoaded ] = useState(false);

    let hour = useSelector(selectHour);
    let isSandbox = useSelector(selectSandboxMode);
    let day = useSelector(selectDay);
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
        "welcome": <p><span  className="font-medium">Great! you are in "planting mode".</span><br/> Click below to plant a seed.</p>,
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
                growTree(tree);
            })
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[hour])

    function growTree(tree) {
        if (coinFlipRatio(0.25) && tree.growth.length <= MAX_TREE_HEIGHT) {
            // updated some data on the tree.
            let updatedTree = { id: tree.id, growth: {id: "trunk_" + getRandomId(), left: 0, right: 0}};
            // and send it off to the tree.
            dispatch(growTreeById(updatedTree)); 
        } else if (tree.growth.length > 2 && tree.growth.length <= MAX_TREE_HEIGHT) {
            let growthIndex = getRandomInt(0, tree.growth.length - 3);
            let growthSide = coinFlipRatio(0.5) ? "left" : "right";
            let growthProfile = {treeId: tree.id, growthIndex: growthIndex, growthSide: growthSide};
            dispatch(addBranch(growthProfile));
        }
    }

    useEffect(() => {
        let sortedTrees = trees.slice().sort((a, b) => {
            return a.y - b.y
        }); // frozen in strict mode?
        setDrawTrees(sortedTrees.map(tree => {
            return <Tree key={tree.id} treeData={tree} onWater={handleWater} />
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
        if (trees.length === 0 && mode === "HARVEST") {
            messageChange(messageCenter.no_trees);
        }
    }

    const handleWater = (treeData) => {
        growTree(treeData);
    }

    const plant = (e) => {
        messageChange(messageCenter.first_seed);
        if (seeds > 0 || isSandbox) {
            // Set Trees in Redux state.
            let newId = "tree_" + getRandomId();
            dispatch( addTree({
                id: newId,
                birthday: day,
                x: parseInt((mouse.x/grass.clientWidth* 100).toFixed()),
                y: parseInt((mouse.y/grass.clientHeight * 100).toFixed()),
                age: 0,
                growth: []
            }) );
            if (!isSandbox) {
                dispatch(updateSeeds(-1));
            }
        }
    }

    const handleToggleDebug = () => {
        dispatch(toggleDebug());
    }

    const toggleStore = () => {
        console.log('toggleStore');
    }

    const reset = () => {
        dispatch(resetTrees());
        dispatch(resetStars());
        dispatch(resetResource('seeds'));
        dispatch(resetResource('water'));
        dispatch(resetResource('stars'));
        dispatch(setSpeed(1000));
        dispatch(setMode("NO_MODE"));
    }

    return (
        <div className="overflow-hidden">
            <div className="w-full relative overflow-hidden" style={{height: "100px"}}> {/* SKY FIELD */}
                <Barn />
                <Well />
                <Sky />
            </div>
                <div 
                    className="mx-auto lg:mr-auto w-full z-10 relative"
                    onClick={() => handleStrayClick()}
                    > {/* Gameboard Wrapper */}
                        <div 
                            id="grass"
                            aria-label="Grass field"
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
                        <HUD onMessageChange={messageChange} />
                        <div className="flex flex-row fixed bottom-3 right-3 gap-2" style={{ zIndex: 49 }}>
                            <button
                                aria-label="Settings"
                                className="border-4 rounded-lg bg-green-600 hover:bg-green-700 border-white z-10 px-1 shadow focus:outline-none"
                                onClick={toggleGraph}>
                                <svg width="20" height="20" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.0957 45.9966C22.4966 45.9966 21.8975 46.0061 21.2984 45.9966C19.6544 45.963 18.4035 44.7259 18.346 43.0708C18.3256 42.472 18.346 41.8732 18.34 41.2744C18.3507 40.7231 18.1941 40.1814 17.8908 39.7207C17.5875 39.2601 17.1518 38.902 16.641 38.6936C15.5243 38.2241 14.4531 38.4433 13.5712 39.3211C13.1902 39.7008 12.8127 40.0864 12.4233 40.4588C11.1988 41.6301 9.3775 41.6349 8.16852 40.4588C7.28186 39.5966 6.40517 38.7235 5.53848 37.8397C4.34028 36.6193 4.34867 34.8804 5.53848 33.6636C5.92789 33.2624 6.33768 32.8816 6.72589 32.4804C7.57062 31.6073 7.82703 30.5858 7.34776 29.4624C6.86848 28.3391 6.02135 27.7535 4.78601 27.7403C4.08746 27.7331 3.38652 27.7403 2.69276 27.6828C1.95859 27.6275 1.27289 27.2954 0.774539 26.7537C0.276192 26.212 0.00246326 25.5013 0.0087986 24.7654C0.000810622 23.5878 0.000810622 22.4105 0.0087986 21.2337C0.023177 19.6481 1.16266 18.4169 2.73949 18.3032C3.37573 18.2576 4.01557 18.2696 4.65661 18.2684C5.95066 18.2684 6.89364 17.6876 7.37052 16.4912C7.8474 15.2948 7.52149 14.2684 6.61086 13.3954C6.23583 13.0361 5.87278 12.666 5.51092 12.2948C4.39899 11.1511 4.34987 9.39896 5.44861 8.24687C6.37003 7.2792 7.32739 6.34148 8.31111 5.43848C8.8794 4.92397 9.62346 4.64686 10.39 4.66424C11.1566 4.68162 11.8873 4.99216 12.4317 5.5319C12.8475 5.93549 13.2429 6.35944 13.6658 6.75345C14.5369 7.56423 15.5434 7.79178 16.6434 7.31513C17.7217 6.84806 18.3364 6.0277 18.3592 4.81453C18.3736 4.05764 18.3376 3.29237 18.4419 2.54746C18.6587 0.990578 19.8426 0.0121356 21.4194 0.00375235C22.4978 -0.00223568 23.5761 0.00375235 24.6545 0.00375235C26.604 0.00375235 27.8297 1.19297 27.8896 3.14387C27.9064 3.72232 27.8896 4.30195 27.9028 4.8804C27.9316 6.06842 28.557 6.87202 29.6091 7.32471C30.7018 7.79537 31.7179 7.59058 32.5914 6.77621C33.0143 6.381 33.4073 5.95585 33.8219 5.55225C34.3851 4.98712 35.1497 4.66855 35.9477 4.66652C36.7457 4.6645 37.5119 4.9792 38.0779 5.54148C38.9686 6.40136 39.8473 7.27361 40.714 8.15824C41.9241 9.39896 41.9026 11.1523 40.6804 12.381C40.273 12.7918 39.8512 13.1882 39.4451 13.6014C38.6519 14.4085 38.4685 15.3726 38.84 16.4133C39.2114 17.4541 39.9651 18.102 41.0818 18.2217C41.7348 18.2924 42.3998 18.2684 43.0552 18.2792C44.7603 18.3079 45.8255 19.1966 45.9417 20.8984C46.0403 22.3309 46.0323 23.7688 45.9177 25.2002C45.7871 26.7906 44.7291 27.6792 43.1259 27.7463C42.5484 27.7702 41.9685 27.7463 41.3897 27.7594C40.2179 27.7798 39.2414 28.4397 38.8412 29.4996C38.4182 30.6181 38.6279 31.6121 39.4786 32.46C39.8884 32.8684 40.3173 33.2648 40.714 33.6804C41.863 34.878 41.8702 36.6349 40.714 37.8241C39.8393 38.7259 38.9502 39.6205 38.0432 40.4864C36.8186 41.66 35.0117 41.6337 33.7896 40.4481C33.3882 40.06 33.0095 39.6469 32.5914 39.2708C31.7023 38.46 30.6862 38.2014 29.5575 38.6996C28.4504 39.1894 27.8801 40.0672 27.8453 41.2804C27.8285 41.8984 27.8537 42.5187 27.8249 43.1355C27.7435 44.793 26.5381 45.9642 24.893 45.9906C24.2939 46.0061 23.6948 45.9966 23.0957 45.9966ZM13.5352 22.9654C13.5257 28.2529 17.7673 32.5534 23.0142 32.5762C28.3426 32.6002 32.6908 28.3151 32.7052 23.0277C32.7196 17.7582 28.4025 13.4217 23.1364 13.4133C21.8779 13.4083 20.6307 13.6516 19.4665 14.1293C18.3022 14.607 17.2438 15.3097 16.3518 16.1971C15.4598 17.0845 14.7519 18.1392 14.2685 19.3007C13.7852 20.4621 13.536 21.7075 13.5352 22.9654V22.9654Z" fill="white"/>
                                <path d="M13.5348 22.9653C13.5359 21.7076 13.7854 20.4624 14.2688 19.3012C14.7523 18.1401 15.4603 17.0857 16.3522 16.1985C17.2442 15.3114 18.3025 14.6089 19.4666 14.1313C20.6307 13.6537 21.8777 13.4105 23.136 13.4156C28.4021 13.4239 32.7216 17.7617 32.7048 23.0299C32.6904 28.3174 28.3421 32.6024 23.0138 32.5784C17.7669 32.5533 13.5252 28.2527 13.5348 22.9653Z" fill="none"/>
                                </svg>
                            </button>
                            <button
                                aria-label="Store"
                                onClick={toggleStore}
                                className="border-4 rounded-lg bg-green-600 hover:bg-green-700 border-white z-10 px-1 shadow focus:outline-none"
                                >
                                <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.3297 6.54221L14.8855 9.16849C14.3672 9.74489 13.8571 10.3116 13.3457 10.877L6.12616 18.8595C5.30372 19.769 4.48542 20.6799 3.66022 21.5853C3.54242 21.7109 3.40095 21.812 3.24393 21.8828C3.08692 21.9535 2.91746 21.9925 2.74532 21.9975C2.57317 22.0026 2.40173 21.9735 2.24087 21.912C2.08001 21.8505 1.93289 21.7578 1.80799 21.6392C1.30208 21.1513 0.81 20.6467 0.330357 20.1325C0.102812 19.8753 -0.0148008 19.5392 0.00277332 19.1962C0.0203475 18.8533 0.171709 18.5309 0.424351 18.2983C1.67391 17.0653 2.92716 15.837 4.18409 14.6132C6.82144 12.033 9.45832 9.44862 12.0947 6.86011C12.1811 6.7603 12.2596 6.65403 12.3297 6.54221V6.54221Z" fill="white"/>
                                    <path d="M15.4688 8.57274L12.96 5.94646C13.1453 5.75018 13.3844 5.51105 13.6083 5.25533C14.1322 4.6651 14.1101 4.01131 13.5364 3.4584C12.5783 2.53941 11.3896 1.89656 10.096 1.59788C9.46707 1.44445 8.82156 1.36704 8.16084 1.24955C8.15255 1.074 8.13319 0.858371 8.13734 0.644121C8.14245 0.610405 8.1557 0.578443 8.17592 0.55099C8.19615 0.523536 8.22276 0.501421 8.25345 0.486551C10.4886 -0.0663521 12.7237 -0.273696 14.9436 0.550129C15.904 0.918662 16.7728 1.49173 17.4897 2.22957C18.1642 2.90688 18.836 3.58695 19.5175 4.25596C19.7217 4.4473 19.8436 4.71046 19.8575 4.98995C19.8851 5.37007 19.9059 5.75433 19.9667 6.13031C20.0002 6.39563 20.1124 6.64485 20.2888 6.84587C20.4652 7.04689 20.6977 7.1905 20.9564 7.25822C21.0477 7.29638 21.1466 7.31299 21.2453 7.30676C21.3441 7.30053 21.4401 7.27161 21.5259 7.22228C21.8272 7.04673 22.2405 7.13658 22.5114 7.39783C22.6607 7.53605 22.7962 7.70193 22.933 7.85813C23.3007 8.27281 23.3145 8.82571 22.933 9.2238C22.3119 9.88083 21.6798 10.5259 21.0366 11.159C20.6979 11.4921 20.2266 11.5736 19.8713 11.2972C19.5291 11.0192 19.2289 10.6933 18.9798 10.3296C18.8975 10.2151 18.8569 10.0758 18.8647 9.93501C18.8725 9.7942 18.9282 9.66029 19.0226 9.55553C19.0642 9.47749 19.0898 9.39199 19.0981 9.30396C19.1064 9.21594 19.0972 9.12715 19.071 9.04272C18.825 8.1636 17.6887 7.41441 16.7875 7.53605C16.5763 7.5753 16.3795 7.6708 16.218 7.8125C15.9551 8.05252 15.705 8.30629 15.4688 8.57274V8.57274Z" fill="white"/>
                                </svg>
                            </button>
                            {/* <button 
                                onClick={() => handleToggleDebug()}
                                className="border-4 rounded-lg hover:bg-green-600 border-white z-10 px-1 shadow focus:outline-none">
                                <svg width="22" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <path d="M4.65183 11.5393C4.8337 10.6647 5.12545 9.83135 5.52613 9.03719C5.56307 8.96351 5.53844 8.93002 5.4854 8.88696C4.68498 8.24302 3.8912 8.1483 2.97997 8.72335C2.66359 8.92332 2.38511 9.16827 2.14451 9.45914C1.83382 9.83518 1.32326 9.91364 0.939632 9.65147C0.553162 9.38738 0.41013 8.86687 0.650726 8.46692C0.782391 8.24876 0.967102 8.0574 1.14992 7.87752C1.69836 7.33595 2.32827 6.91782 3.06711 6.6901C4.21705 6.33607 5.28079 6.54849 6.2697 7.21348C6.35117 7.26802 6.43073 7.32639 6.52167 7.38954C6.60881 7.27663 6.68933 7.16181 6.78121 7.05752C7.10611 6.6901 7.4348 6.32459 7.76443 5.96196C7.80801 5.91316 7.82316 5.88158 7.78811 5.81652C7.04075 4.43582 7.16105 3.09436 7.97851 1.79021C8.27404 1.31849 8.63873 0.905145 9.06782 0.552077C9.46661 0.22293 10.0387 0.287037 10.3523 0.691774C10.6611 1.09173 10.5768 1.64955 10.1846 1.98253C9.68637 2.40736 9.30842 2.92213 9.1455 3.57373C9.05646 3.92871 9.08772 4.27986 9.21749 4.62145C9.22791 4.64919 9.24306 4.67503 9.2478 4.6846C9.67595 4.43295 10.1013 4.18418 10.5247 3.93349C10.5881 3.89617 10.6317 3.89426 10.6904 3.95358C12.0952 5.37638 13.5018 6.79631 14.9085 8.21719C14.9246 8.23345 14.9407 8.24972 14.9643 8.27364C11.9161 11.3527 8.87269 14.427 5.81503 17.5156C5.71747 17.3759 5.61517 17.24 5.52328 17.0975C4.82802 16.0153 4.5088 14.8193 4.4747 13.539C4.4728 13.4596 4.44534 13.4252 4.37998 13.3946C3.71976 13.0874 3.09742 13.1994 2.49688 13.563C2.15019 13.7735 1.8556 14.0462 1.58754 14.3514C1.28253 14.6978 0.831647 14.7733 0.456544 14.5552C-0.0312803 14.272 -0.152526 13.6204 0.215 13.1783C0.7966 12.4789 1.4985 11.9392 2.3548 11.6225C3.08037 11.3546 3.81732 11.3183 4.56469 11.5288C4.58647 11.5345 4.60826 11.5393 4.63099 11.5441C4.63289 11.5441 4.63668 11.5421 4.65183 11.5393Z" fill="white"/>
                                        <path d="M15.2191 18.8455C14.3316 19.2914 13.4118 19.6091 12.4542 19.7765C12.4608 20.0377 12.4826 20.2894 12.4712 20.5391C12.4343 21.3591 12.1283 22.0825 11.6632 22.7446C11.3819 23.1465 11.0532 23.5062 10.6724 23.8124C10.2907 24.1205 9.72708 24.0392 9.41639 23.6402C9.11801 23.2575 9.19569 22.6872 9.567 22.3743C10.033 21.9801 10.3958 21.5055 10.5862 20.9123C10.6819 20.6157 10.6989 20.3143 10.6412 20.0062C10.6241 19.9162 10.5881 19.8923 10.501 19.8866C9.37092 19.8167 8.31097 19.5124 7.34574 18.902C7.17051 18.791 7.00379 18.6666 6.82666 18.5441C9.88243 15.4574 12.9249 12.3841 15.9788 9.29932C16.0091 9.32993 16.0375 9.35864 16.065 9.38639C17.4555 10.791 18.8451 12.1956 20.2376 13.5983C20.3029 13.6643 20.3228 13.7122 20.2707 13.8002C20.0339 14.203 19.8047 14.6116 19.5707 15.0221C19.9259 15.1455 20.2934 15.1426 20.661 15.0259C21.0958 14.8881 21.4671 14.6422 21.7958 14.3284C21.9388 14.1925 22.061 14.0346 22.2059 13.9007C22.5602 13.5744 23.083 13.5706 23.4155 13.8815C23.7802 14.2241 23.8408 14.7417 23.5197 15.1312C22.8415 15.9559 22.0108 16.5645 20.965 16.8286C20.1068 17.0448 19.2809 16.9348 18.4928 16.5367C18.3952 16.487 18.345 16.5023 18.273 16.576C17.8363 17.0285 17.3675 17.4448 16.8626 17.8189C16.8323 17.8409 16.8048 17.8677 16.7679 17.8983C16.8038 17.9691 16.8408 18.0389 16.8758 18.1097C17.4896 19.3297 17.4271 20.5362 16.784 21.7208C16.4534 22.3303 16.0214 22.8632 15.4711 23.2833C15.0856 23.578 14.5551 23.4919 14.252 23.112C13.9527 22.736 13.9868 22.203 14.3448 21.8806C14.7152 21.5467 15.042 21.1802 15.2655 20.7276C15.5677 20.1181 15.58 19.5096 15.2532 18.9039C15.2466 18.8896 15.2362 18.8733 15.2191 18.8455Z" fill="white"/>
                                        <path d="M12.0488 3.28948C13.0425 2.96033 14.0494 2.79576 15.0894 2.82159C15.1984 2.37189 15.3727 1.95471 15.6095 1.56528C15.9268 1.04286 16.3189 0.584539 16.7888 0.196069C17.1535 -0.10533 17.6858 -0.0527051 18.0192 0.311845C18.3252 0.646733 18.3195 1.20265 18.0022 1.53371C17.8156 1.72794 17.6166 1.91165 17.4348 2.11067C17.1904 2.37954 16.9413 2.84934 16.8949 3.0895C19.0972 3.78703 20.5133 5.25671 21.1564 7.50046C21.452 7.37703 21.7182 7.20384 21.955 6.98856C22.1293 6.83068 22.2865 6.65367 22.4513 6.48527C22.7667 6.16473 23.2659 6.12072 23.6136 6.38385C23.9915 6.66994 24.1232 7.17705 23.8693 7.56456C23.696 7.82865 23.4667 8.06211 23.2328 8.27548C22.619 8.83331 22.1747 9.08113 21.3857 9.35478C21.3885 10.3384 21.2275 11.2981 20.9187 12.2492C17.9586 9.26006 15.0099 6.28051 12.0488 3.28948Z" fill="white"/>
                                    </g>
                                </svg>
                            </button> */}
                            <button 
                                type="button"
                                aria-label="Reset button"
                                className="border-4 bg-green-600 hover:bg-green-700 rounded-lg font-medium text-white border-white px-2 z-10 shadow focus:outline-none"
                                onClick={reset}
                            >RESET</button>
                        </div>
                </div> 
            {grass ? <DebugPanel handleClose={handleToggleDebug} /> : <></>}
        </div>
    )
}

export default Game;