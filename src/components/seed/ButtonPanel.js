import React from 'react';

const ButtonPanel = ({mode, diameter, reset, color, handleColor, handleDiameter, handleMode}) => {
    return (
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
    )
}

export default ButtonPanel;