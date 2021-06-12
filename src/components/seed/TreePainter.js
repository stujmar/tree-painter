import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTree } from '../../redux/gameSlice';
import { selectHour } from '../../redux/hourSlice';

import PlantedTreeInfo from './PlantedTreeInfo';
import ButtonPanel from './ButtonPanel';
import Debug from './Debug';
import StatusBar from './StatusBar';
import Sky from './Sky';
import Tree from './Tree';
import HUD from './HUD';

const TreePainter = ( { messageChange } ) => {
    const [ mode, _setMode ] = useState('PLANTING');
    const [ mouse, setMouse] = useState({ x: 0, y: 0, xMax: 0, yMax: 0});
    const [ seeds, setSeeds ] = useState(10);
    const [ stars, setStars ] = useState(10);
    const [ water, setWater ] = useState(10);
    const [ trees, setTrees ] = useState([]);
    const [ drawTrees, setDrawTrees ] = useState([]);
    const [ infoPanel, setInfoPanel ] = useState([]);
    const [ diameter, setDiameter ] = useState(15);
    const [ color, setColor ] = useState("#059669");

    // const [ count, setCount ] = useState(0);
    let hour = useSelector(selectHour);

    const dispatch = useDispatch();
    const myModeRef = useRef(mode);
    const setMode = data => {
        myModeRef.current = data;
        _setMode(data);
      };

    const handleDelete = (id) => {
        setTrees(trees.filter( tree => tree.id !== id ));
        setSeeds(seeds + 1);
    } 

    const messageCenter = {
        "welcome": <p><span  className="font-medium">Welcome to Tree Painter Studio.</span><br/> Click on the green grass to plant a seed.</p>,
        "first_seed" : "Wow, you are planting now!",
        "first_water" : "Yum that tree was thirsty!",
        "no_seeds" : "Oops all out of seeds",
        "no_water" : "Oops all out of water"
    };

    let grass = document.getElementById('grass');

    useEffect(() => {
        messageChange(messageCenter.welcome);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]
    )

    useEffect(() => {
        let newTrees = [...trees];
        setTrees(newTrees.map(tree => {
            return  {...tree, age: tree.age += 1};
        }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[hour])

    useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[seeds, trees, stars]
    )
    
    // const treeClick = (id) => {
    //     if (myModeRef.current === 'WATERING' && water > 0) {
    //         setWater(water - 1);
    //         setTrees( trees.map( tree => {
    //             if (tree.id === id) {
    //                 // tree.x -= 1;
    //                 // tree.y -= 1;
    //                 tree.diameter = parseInt(tree.diameter) + 2;
    //             }
    //             return tree;
    //         }
    //         ))
    //         setSeeds(seeds + 1);
    //     }
    // }

    // useEffect(() => {
    //     setDrawTrees(trees.map(tree => {
    //         return <button key={tree.id} 
    //         className={`absolute origin-bottom-center focus:outline-none ${ water > 0 ? "water-cursor" : "no-water-cursor" }`}
    //         onClick={() => { treeClick(tree.id)} } 
    //         style={{
    //             top: tree.y, 
    //             left: tree.x, 
    //             borderRadius: "0%",
    //             borderBottom: `${tree.diameter * 1.25}px solid ${tree.color}`,
    //             borderLeft: `${tree.diameter}px solid rgba(0,0,0,0)`,
    //             borderRight: `${tree.diameter}px solid rgba(0,0,0,0)`,
    //             height: `${tree.diameter}px`,
    //             width: `${tree.diameter}px`,
    //             }}></button>
    //     }));
    useEffect(() => {
        setDrawTrees(trees.map(tree => {
            return <Tree key={tree.id} treeData={tree} />
        }));

        setInfoPanel(trees.map(tree => {
            return <PlantedTreeInfo
                        key={tree.id} 
                        x={tree.x} 
                        diameter={tree.diameter} 
                        y={tree.y} color={tree.color} 
                        age={tree.age} 
                        id={tree.id}
                        onDelete={(id) => handleDelete(id)}/>
        }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[trees])

    const _onMouseMove = (e) => {
        if (!!grass) { // Shot in the dark to avoid "Cannot read property 'clientWidth' of null"
            setMouse({
                x:e.nativeEvent.offsetX > 0 ? e.nativeEvent.offsetX : 0,
                y:e.nativeEvent.offsetY > 0 ? e.nativeEvent.offsetY : 0,
                xMax: grass.clientWidth,
                yMax: grass.clientWidth
                
            })
        }
    }

    const handleDiameter = (e) => {
        setDiameter(e.target.value);
    }

    const handleColor = (e) => {
        setColor(e.target.value);
    }

    const plant = (e) => {
        messageChange(messageCenter.first_seed);

        if (seeds > 0) {
            // Set Trees in local State.
            setTrees(trees => [...trees, {
                id: Math.floor(Math.random() * 10000),
                x: `${(mouse.x/grass.clientWidth* 100).toFixed()}%`,
                y: `${(mouse.y/grass.clientHeight * 100).toFixed()}%`,
                diameter: diameter ? diameter : 2,
                age: 0,
                color: color
            }]);
            // Set Trees in Redux state.
            dispatch( addTree({
                id: Math.floor(Math.random() * 10000),
                x: `${(mouse.x/grass.clientWidth* 100).toFixed()}%`,
                y: `${(mouse.y/grass.clientHeight * 100).toFixed()}%`,
                diameter: diameter ? diameter : 2,
                age: 0,
                color: color
            }) );

            setSeeds(seeds - 1);
        }
    }

    const reset = (e) => {
        setTrees([])
        setSeeds(10);
        setStars(10);
        setWater(10);
        setMode("PLANTING");
    }

    const handleMode = () => {
        mode === "PLANTING" ? setMode("WATERING") : setMode("PLANTING");
    }

    return (
        <>
            <StatusBar seeds={seeds} stars={stars} water={water}/>
                <div className="w-full relative" style={{height: "100px"}}>
                <HUD />
                    <ButtonPanel 
                        mode={mode} 
                        diameter={diameter}
                        color={color}
                        reset={reset}
                        handleColor={handleColor}
                        handleDiameter={handleDiameter}
                        handleMode={handleMode}
                    />
                    <Sky />
                </div>
                    <div className="overflow-hidden"> {/* GAME FIELD */}
                            
                            <div className="mx-auto lg:mr-auto w-full z-10 relative"> {/* Gameboard Wrapper */}
                                <div 
                                    id="grass"
                                    className={`absolute bottom-0 opacity-0 bg-black z-10 w-full h-72 ${seeds ? "seed-cursor" : "no-seed-cursor"} ${mode === "PLANTING" ? "" : "hidden" }`} 
                                    onMouseMove={(e) => _onMouseMove(e)}
                                    onClick={(e) => plant(e)} 
                                    >
                                    </div>
                                {drawTrees} 
                                <div className="mx-auto bg-green-200 w-full h-72 overflow-hidden"></div>
                            </div> 
                    </div>
            <div className="w-max mx-auto"> {/* GRID WRAPPER */}
                <div>{grass ? `x: ${mouse.x}/${grass.clientWidth} y: ${mouse.y}/${grass.clientHeight}` : ""}</div>
                <div>{grass ? `x: ${(mouse.x/grass.clientWidth* 100).toFixed()}% y: ${(mouse.y/grass.clientHeight * 100).toFixed()}%` : ""}</div>
                <Debug infoPanel={infoPanel} />
            </div>
        </>
    )
}

export default TreePainter;
