import React, { useState, useEffect } from 'react';
import PlantedTreeInfo from './PlantedTreeInfo';

const TreePainter = () => {
    const [ mode, setMode ] = useState('PLANTING');
    const [ mouse, setMouse] = useState({ x: 0, y: 0});
    const [ seeds, setSeeds ] = useState(10);
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
            className="absolute shadow focus:outline-none water-cursor"
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
        setWater(10);
        setMode("PLANTING");
    }

    const handleMode = () => {
        mode === "PLANTING" ? setMode("WATERING") : setMode("PLANTING")
    }

    return (
    <div className="max-w-7xl mx-auto"> {/* GRID WRAPPER */}
        <div className="w-full pt-6 grid  grid-cols-3 ">
            <div className="w-72 md:ml-32 mx-auto"> {/* LEFT COL - BUTTON PANEL */}
                <div className="mb-2">
                    <div>{ seeds !== 1 ? `You have ${seeds} seeds.` : `You have 1 seed.`}</div>
                    <div>{ water !== 1 ? `You have ${water} waters.` : `You have 1 water.`}</div>
                </div>
                <div className="flex flex-col">
                <button type="button" className="border w-max shadow-sm px-2 rounded hover:bg-gray-50" onClick={(e) => handleMode(e)}>{`MODE: ${mode}`}</button>

                <section className={ mode === "PLANTING" ? "mt-2" : "hidden"}> 
                <div className="button-panel mt-2 w-max">
                {`Diameter: `}
                <input className="border w-12 mb-2" value={diameter}  onChange={(e) => handleDiameter(e)} type="number" />
                </div> 
                <div className="button-panel w-max ">
                    <label htmlFor="head">Active Color: </label>
                    <input type="color" id="head" name="head" onChange={(e) => handleColor(e)} value={color}/>
                </div>
                </section>
                <button className="border rounded px-2  mt-2 w-min hover:bg-gray-50" type="button" onClick={(e) => reset(e)}>RESET</button>
                </div>
            </div>

            <div className="col-span-2"> { /* Gameboard Grid */ }
                    <div className="mr-auto bg-blue-600 w-96 h-12"></div> {/* Sky */}
                <div className="mr-auto w-96 mt-2 lg:mt-0 z-10 relative"> {/* Gameboard Wrapper */}
                    <div 
                        className={`absolute opacity-0 bg-black seed-cursor z-10 w-96 h-72 ${mode === "PLANTING" ? "" : "hidden" }`} 
                        onMouseMove={(e) => _onMouseMove(e)}
                        onClick={(e) => plant(e)} 
                        >
                        </div>
                    {drawTrees} 
                    <div className="mx-auto bg-green-200 w-96 h-72 overflow-hidden"></div>
                </div> 
            </div>

            <div className="border mx-auto border w-72 h-12 relative">
                <div className="absolute top-2 left-4 flex">
                    <p className="mr-1 text-gray-400">mouseX:</p>
                    <p>{mouse.x}</p>
                </div>
                <div className="absolute left-32 top-2 flex">
                    <p className="mr-1 text-gray-400">mouseY:</p>
                    <p>{mouse.y}</p>
                </div>
                <div className="mt-14">
                    {infoPanel}
                </div>
            </div>
        </div>
    </div>
    )
}

export default TreePainter;