import React, { useState, useEffect } from 'react';
import PlantedTreeInfo from './PlantedTreeInfo';
import StatusBar from './StatusBar';

const TreePainter = ( { messageChange } ) => {
    const [ mode, setMode ] = useState('PLANTING');
    const [ mouse, setMouse] = useState({ x: 0, y: 0});
    const [ seeds, setSeeds ] = useState(10);
    const [ stars, setStars ] = useState(10);
    const [ water, setWater ] = useState(10);
    const [ trees, setTrees ] = useState([]);
    const [ drawTrees, setDrawTrees ] = useState([]);
    const [ infoPanel, setInfoPanel ] = useState([]);
    const [ diameter, setDiameter ] = useState(15);
    const [ color, setColor ] = useState("#B6FE90");

    const handleDelete = (id) => {
        setTrees(trees.filter( tree => tree.id !== id ));
        setSeeds(seeds + 1);
    } 

    const messageCenter = {
        "welcome": "Welcome to Tree Painter Studio",
        "first_seed" : "Wow you are planting now!",
        "first_water" : "Yum that tree was thirsty!",
        "no_seeds" : "Oops all out of seeds",
        "no_water" : "Oops all out of water"
    };

    useEffect(() => {
        messageChange(messageCenter.first_seed)
    
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
            className={`absolute shadow focus:outline-none ${ water > 0 ? "water-cursor" : "no-water-cursor" }`}
            onClick={() => { waterTree(tree.id)} } 
            style={{
                top: tree.y, 
                left: tree.x, 
                borderRadius: "50%",
                height: `${tree.diameter}px`,
                width: `${tree.diameter}px`,
                background: tree.color
                }}></button>
        }));

        setInfoPanel(trees.map(tree => {
            return <PlantedTreeInfo key={tree.id} x={tree.x} diameter={tree.diameter} y={tree.y} color={tree.color} age={tree.age} id={tree.id} onDelete={(id) => handleDelete(id)}/>
        }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[trees])

    const _onMouseMove = (e) => {
        setMouse({
            x:e.nativeEvent.offsetX > 0 ? e.nativeEvent.offsetX : 0,
            y:e.nativeEvent.offsetY > 0 ? e.nativeEvent.offsetY : 0
        })
      }

    const handleDiameter = (e) => {
        setDiameter(e.target.value);
    }

    const handleColor = (e) => {
        setColor(e.target.value);
    }

    const plant = (e) => {
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
            <div className="w-max mx-auto"> {/* GRID WRAPPER */}
                <div className="flex flex-col lg:flex-row">
                    <div className="pt-4 w-min mx-auto lg:ml-auto lg:mr-0"> {/* BUTTON PANEL */}
                        <div className="w-72 h-16 grid grid-cols-2 lg:grid-cols-1 gap-3"> {/* LEFT COL - BUTTON PANEL */}

                            <div>
                              <button type="button" className="border w-max shadow-sm px-2 rounded hover:bg-gray-50" onClick={(e) => handleMode(e)}>{`MODE: ${mode}`}</button>
                            </div>
                            <div className="ml-auto lg:mr-auto lg:ml-0">
                                <button className="border shadow-sm rounded px-2 w-min hover:bg-gray-50" type="button" onClick={(e) => reset(e)}>RESET</button>
                            </div>

                            <section className={ mode === "PLANTING" ? "" : "hidden"}> 
                                <div className="button-panel w-max ml-2">
                                {`Diameter: `}
                                <input className="border w-12" value={diameter} min="1" max="100"  onChange={(e) => handleDiameter(e)} type="number" />
                                </div> 
                            </section>

                            <section className={ mode === "PLANTING" ? "ml-auto lg:mr-auto lg:ml-0" : "hidden"}> 
                                <label htmlFor="head">Color: </label>
                                <input className="" type="color" id="head" name="head" onChange={(e) => handleColor(e)} value={color}/>
                            </section>
                           
                        </div>
                    </div>
                    <div className="overflow-hidden"> {/* GAME FIELD */}
                                <div className="mx-auto lg:mr-auto bg-blue-400 w-96 h-12"></div> {/* Sky */}
                            <div className="mx-auto lg:mr-auto w-96 z-10 relative"> {/* Gameboard Wrapper */}
                                <div 
                                    className={`absolute opacity-0 bg-black z-10 w-96 h-72 ${seeds ? "seed-cursor" : "no-seed-cursor"} ${mode === "PLANTING" ? "" : "hidden" }`} 
                                    onMouseMove={(e) => _onMouseMove(e)}
                                    onClick={(e) => plant(e)} 
                                    >
                                    </div>
                                {drawTrees} 
                                <div className="mx-auto bg-green-200 w-96 h-72 overflow-hidden"></div>
                            </div> 
                    </div>
                </div>
                <div className="mt-4 w-96">
                        <div className="grid grid-cols-2">
                            {infoPanel}
                        </div>
                </div>
            </div>
        </>
    )
}

export default TreePainter;