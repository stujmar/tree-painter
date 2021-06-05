import React, { useState, useEffect } from 'react';
import PlantedTreeInfo from './PlantedTreeInfo';
import ButtonPanel from './ButtonPanel';
import Debug from './Debug';
import StatusBar from './StatusBar';
import Sky from './Sky';

const TreePainter = ( { messageChange } ) => {
    const [ mode, setMode ] = useState('PLANTING');
    const [ mouse, setMouse] = useState({ x: 0, y: 0, xMax: 0, yMax: 0});
    const [ seeds, setSeeds ] = useState(10);
    const [ stars, setStars ] = useState(10);
    const [ water, setWater ] = useState(10);
    const [ trees, setTrees ] = useState([]);
    const [ drawTrees, setDrawTrees ] = useState([]);
    const [ infoPanel, setInfoPanel ] = useState([]);
    const [ diameter, setDiameter ] = useState(15);
    const [ color, setColor ] = useState("#059669");

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
      
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[seeds, trees, stars]
    )
    
    const waterTree = (id) => {
        if (water > 0) {
            setWater(water - 1);
            setTrees( trees.map( tree => {
                if (tree.id === id) {
                    tree.x -= 1;
                    tree.y -= 1;
                    tree.diameter = parseInt(tree.diameter) + 2;
                }
                return tree;
            }
            ))
            setSeeds(seeds + 1);
        }
    }

    useEffect(() => {
        setDrawTrees(trees.map(tree => {
            return <button key={tree.id} 
            className={`absolute origin-bottom-center focus:outline-none ${ water > 0 ? "water-cursor" : "no-water-cursor" }`}
            onClick={() => { waterTree(tree.id)} } 
            style={{
                top: tree.y, 
                left: tree.x - (tree.y * .05), 
                borderRadius: "0%",
                borderBottom: `${tree.diameter * 1.25  + (tree.y * .05)}px solid ${tree.color}`,
                borderLeft: `${tree.diameter + (tree.y * .05)}px solid rgba(0,0,0,0)`,
                borderRight: `${tree.diameter + (tree.y * .05)}px solid rgba(0,0,0,0)`,
                height: `${tree.diameter}px`,
                width: `${tree.diameter}px`,
                }}></button>
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
        console.log(e)
        console.log("client", e.clientX, e.clientY);
        console.log("page", e.pageX, e.pageY);
        console.log("screen", e.screenX, e.screenY);
        setMouse({
            x:e.nativeEvent.offsetX > 0 ? e.nativeEvent.offsetX : 0,
            y:e.nativeEvent.offsetY > 0 ? e.nativeEvent.offsetY : 0,
            xMax: grass.clientWidth,
            yMax: grass.clientWidth

        })
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

            setTrees(trees => [...trees, {
                id: Math.floor(Math.random() * 10000),
                x: mouse.x - (diameter/2),
                y: mouse.y - (diameter/2),
                diameter: diameter ? diameter : 2,
                age: 0,
                color: color
            }]);
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
        mode === "PLANTING" ? setMode("WATERING") : setMode("PLANTING")
    }

    return (
        <>
            <StatusBar seeds={seeds} stars={stars} water={water}/>
                <div className="w-full relative" style={{height: "100px"}}>
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
            <div className="w-max mx-auto"> {/* GRID WRAPPER */}
                    <div className="overflow-hidden"> {/* GAME FIELD */}
                            
                            <div className="mx-auto lg:mr-auto w-96 z-10 relative"> {/* Gameboard Wrapper */}
                                <div 
                                    id="grass"
                                    className={`absolute bottom-0 opacity-0 bg-black z-10 w-96 h-72 ${seeds ? "seed-cursor" : "no-seed-cursor"} ${mode === "PLANTING" ? "" : "hidden" }`} 
                                    onMouseMove={(e) => _onMouseMove(e)}
                                    onClick={(e) => plant(e)} 
                                    >
                                    </div>
                                {drawTrees} 
                                <div className="mx-auto bg-green-200 w-96 h-72 overflow-hidden"></div>
                            </div> 
                    </div>
                <div>{`x:${mouse.x}/max y:${mouse.y}/max`}</div>
                <Debug infoPanel={infoPanel} />
            </div>
        </>
    )
}

export default TreePainter;