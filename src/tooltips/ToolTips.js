import React from 'react';

const ToolTips = ({onClose}) => {

  const tips = {
    "modes": {
      x: "left-2",
      y: "bottom-14",
      content: "Click these buttons to switch modes!"
    }
  }

  return (
    <div 
      className={`absolute ${tips["modes"].x} ${tips["modes"].y} z-50 flex bg-green-300 p-3 rounded`}>
        <div className="comfortaa font-medium">
          {tips["modes"].content}
        </div>
        <button 
          type="button" 
          className="focus:outline-none leading-4 pb-1 text-green-100 font-bold px-2 rounded-full ml-2 bg-green-600"
          onClick={onClose}>x</button>
      </div>
  )
}

export default ToolTips;