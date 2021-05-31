import React from 'react';

const ButtonPanel = ({mode, diameter, reset, color, handleColor, handleDiameter, handleMode}) => {
    return (
        <div 
            className="absolute left-2 top-2 rounded-md p-2 w-min mx-auto z-10"
            style={{background: "rgba(255,255,255,.5)"}}
        > {/* BUTTON PANEL */}
            <div className="w-72 h-16 grid grid-cols-2 gap-3"> {/* LEFT COL - BUTTON PANEL */}
                <div>
                    <button type="button" className="border bg-white opacity-100 w-max shadow-sm px-2 rounded hover:bg-gray-50" onClick={(e) => handleMode(e)}>{`MODE: ${mode}`}</button>
                </div>
             <div className="ml-auto">
                 <button className="border bg-white shadow-sm rounded px-2 w-min hover:bg-gray-50" type="button" onClick={(e) => reset(e)}>RESET</button>
             </div>

             <section className={ mode === "PLANTING" ? "" : "hidden"}> 
                 <div className="button-panel w-max ml-2">
                 {`Diameter: `}
                 <input className="border w-12" value={diameter} min="1" max="100"  onChange={(e) => handleDiameter(e)} type="number" />
                 </div> 
             </section>

             <section className={ mode === "PLANTING" ? "ml-auto" : "hidden"}> 
                 <label htmlFor="head">Color: </label>
                 <input className="" type="color" id="head" name="head" onChange={(e) => handleColor(e)} value={color}/>
             </section>
            
         </div>
     </div>
    )
}

export default ButtonPanel;