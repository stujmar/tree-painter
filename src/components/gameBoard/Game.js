import React, { useState, useEffect } from 'react';
import { getRandomId } from '../../utils/getRandomId';

import { useSelector, useDispatch } from 'react-redux';
import {
    setMouse,
    selectMouse,
    updateAcorns, 
    selectMode, 
    selectResources,
    setGrassLoaded,
    toggleDebug,
    selectSandboxMode,
    setMessage,
    selectMilestones,
    } from '../../redux/gameSlice';
import { BASE_WISP_CHANCE, BASE_GNOME_CHANCE, isMaxAge } from '../../utils/settings';
import { addItem, addBranch, ageItems, selectItems, growTreeById, removeItemById} from '../../redux/itemSlice';
import { selectHour } from '../../redux/hourSlice';
import { selectDay } from '../../redux/daySlice';

import Sky from '../sky/Sky';
import Tree from './items/Tree';
import HUD from './HUD';
import Well from '../farm/Well';
import Silo from '../farm/Silo';
import Barn from '../farm/Barn';
import DebugPanel from '../debug/DebugPanel';
import { coinFlipRatio } from '../../utils/coinFlip';
import { getNumberWithinRange, getRandomInt } from '../../utils/getRandomInt';
import { getMessages } from '../../utils/getMessages';
import Observatory from '../farm/Observatory';
import ScareCrow from '../farm/ScareCrow';
import Gnome from './items/Gnome';
import GraveStone from './items/GraveStone';
import Wisp from './items/Wisp';

const Game = ( { toggleGraph } ) => {
    const MAX_TREE_HEIGHT = 15;

    const [ drawnItems, setDrawItems ] = useState([]);
    const [ hasLoaded, setHasLoaded ] = useState(false);

    let hour = useSelector(selectHour);
    let isSandbox = useSelector(selectSandboxMode);
    let day = useSelector(selectDay);
    let mode = useSelector(selectMode);
    let items = useSelector(selectItems);
    let mouse = useSelector(selectMouse);
    let resources = useSelector(selectResources);
    let isAltar = useSelector(selectMilestones).altar;
    let acorns = resources.acorns;
    const dispatch = useDispatch();

    let grass = document.getElementById('grass');

    if (!!grass && !hasLoaded) {
        dispatch(setGrassLoaded({ clientHeight: grass.clientHeight, clientWidth: grass.clientWidth}));
        setHasLoaded(true);
        console.log('grass loaded:', grass);
    }

    useEffect(() => {
        let isWisp = coinFlipRatio(BASE_WISP_CHANCE);
        if (isWisp) {
            dispatch(addItem({
                id: 'wisp_' + getRandomId(),
                type: 'wisp',
                age: 0,
                x: 0,
                y: getRandomInt(0,100),
            }));
        }
        dispatch(ageItems()); // Age all items.
        items.forEach((item) => {
            if (isMaxAge(item)) {
                dispatch(removeItemById(item.id));
            }
            switch(item.type) {
                case 'tree':
                    // eslint-disable-next-line no-unused-expressions
                    // item.age >= 100 ? dispatch(removeItemById(item.id)) : null;
                    growTree(item);
                    if (item.age > 10 && coinFlipRatio(0.01)) {
                        let newId = "tree_" + getRandomId();                     
                        dispatch(addItem({
                            id: newId,
                            type: 'tree',
                            birthday: item.birthday,
                            x: getNumberWithinRange(item.x - 5, item.x + 5),
                            y: getNumberWithinRange(item.y - 5, item.y + 5),
                            age: 0,
                            growth: []
                    }))}
                    if (item.age > 10 && coinFlipRatio(BASE_GNOME_CHANCE)) {
                        let newId = "gnome_" + getRandomId();                     
                        dispatch(addItem({
                            id: newId,
                            type: 'gnome',
                            birthday: item.birthday,
                            x: getNumberWithinRange(item.x - 5, item.x + 5),
                            y: getNumberWithinRange(item.y - 5, item.y + 5),
                            age: 0,
                    }))}
                    break;
                case 'gnome':
                    // eslint-disable-next-line no-unused-expressions
                    // item.age >= MAX_GNOME_AGE ? dispatch(removeItemById(item.id)) : null;
                    break;
                default:
            }
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [hour]);



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
        let sortedItems = items.slice().sort((a, b) => {
            return a.y - b.y
        }); // frozen in strict mode?
        setDrawItems(sortedItems.map(_item => {
            if (_item.type === 'tree') {
            } else if (_item.type === 'gnome') {
            } else {
            }
            switch(_item.type) {
                case 'tree':
                    return <Tree key={_item.id} treeData={_item} onWater={handleWater} />
                case 'gnome':
                    return <Gnome key={_item.id} data={_item} />
                case 'grave':
                    return <GraveStone key={_item.id} data={_item} />
                case 'wisp':
                    console.log("drawing wisp");
                    return <Wisp key={_item.id} data={_item} />
            }
        }));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[items])

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
        if (items.length === 0 && mode === "HARVEST") {
            dispatch(setMessage(getMessages.NO_TREES))
        }
    }

    const handleWater = (treeData) => {
        growTree(treeData);
    }

    const plant = (e) => {
        if (mode === "PLANTING" && acorns === 0) {
            dispatch(setMessage("Try chopping some trees down."))
        }
        if (acorns > 0 || isSandbox) {
            // Set Trees in Redux state.
            let newId = "tree_" + getRandomId();
            dispatch( addItem({
                id: newId,
                type: 'tree',
                birthday: day,
                x: parseInt((mouse.x/grass.clientWidth* 100).toFixed()),
                y: parseInt((mouse.y/grass.clientHeight * 100).toFixed()),
                age: 0,
                growth: []
            }) );
            if (!isSandbox) {
                dispatch(updateAcorns(-1));
            }
        }
    }

    const handleToggleDebug = () => {
        dispatch(toggleDebug());
    }

    return (
        <div className="overflow-hidden">
            <div className="w-full relative overflow-hidden" style={{height: "125px"}}> {/* SKY FIELD */}
                <ScareCrow />
                <Silo />
                <Observatory />
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
                            className={`absolute top-0 opacity-0 bg-black z-10 w-full cursor-pointer ${mode === "PLANTING" ? "" : "hidden" }`} 
                            style={{height: "calc(100vh - 321px)"}}
                            onMouseMove={(e) => handleMouseMove(e)}
                            onClick={(e) => plant(e)} 
                            ></div> {/* Grass Mouse Sensor */}
                            {drawnItems} 
                            <div 
                                className={`mx-auto ${isAltar ? "bg-red-500" : "bg-green-500"} w-full h-72 overflow-hidden`}
                                style={{height: "calc(100vh - 321px)"}}
                                ></div>
                        <HUD toggleGraph={toggleGraph} toggleDebug={toggleDebug}/>
                        
                </div> 
            {grass ? <DebugPanel handleClose={handleToggleDebug} /> : <></>}
        </div>
    )
}

export default Game;