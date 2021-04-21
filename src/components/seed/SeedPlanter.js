import React, { useState, useEffect } from 'react';

const SeedPlanter = () => {
    const [ mouse, setMouse] = useState({ x: 0, y: 0});
    const [ trees, setTrees ] = useState([]);
    const [ drawTrees, setDrawTrees ] = useState([]);
    const [ diameter, setDiameter ] = useState(10);
    const [ color, setColor ] = useState("#86cf38");

    useEffect(() => {
        // console.log(mouseX, mouseY);
    },[mouse])

    useEffect(() => {
        setDrawTrees(trees.map(tree => {
            return <div className="absolute shadow" style={{
                top: tree.y, 
                left: tree.x, 
                borderRadius: "50%",
                height: `${tree.diameter}px`,
                width: `${tree.diameter}px`,
                background: tree.color
                }}></div>
        }));
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
        console.log(`tree planted at ${mouse.x}, ${mouse.y}`)
        setTrees(trees => [...trees, {
            x: mouse.x - (diameter/2),
            y: mouse.y - (diameter/2),
            diameter: diameter ? diameter : 2,
            age: 0,
            color: color
        }])
    }

    return (
    <div className="w-full pt-24 grid grid-cols-3">
        <div> {/* LEFT COL - BUTTON PANEL */}
            <div className="button-panel w-max ml-24">
            {`Diameter: `}
            <input className="border mb-2" value={diameter}  onChange={(e) => handleDiameter(e)} type="number" />
            </div>
            <div className="button-panel w-max ml-24">
                <label for="head">Active Color: </label>
                <input type="color" id="head" name="head" onChange={(e) => handleColor(e)} value={color}/>
            </div>
        </div>
        <div className="mx-auto w-72 h-72 z-10 bg-white relative overflow-hidden border" onMouseMove={(e) => _onMouseMove(e)} onClick={(e) => plant(e)}> { /* Gameboard */ } 
            <div className="absolute opacity-0 bg-black z-10 w-72 h-72"></div>
            {drawTrees} 
            <div className="mx-auto bg-green-200 w-72 h-72 overflow-hidden"></div>
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

        </div>
    </div>
    )
}

export default SeedPlanter