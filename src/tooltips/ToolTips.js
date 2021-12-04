import React from 'react';

const ToolTips = ({onClose}) => {

const arrowBottomLeft = <div className="h-2 w-2 absolute -bottom-3" style={{ borderTop: "15px #BBF7D0 solid", borderLeft: "10px transparent solid", borderRight: "10px solid transparent"}} ></div>

  const tips = {
    "modes": {
      x: "left-2",
      y: "bottom-14",
      content: "Click these buttons to switch modes!",
      arrow: arrowBottomLeft
    },
    "settings": {
      x: "right-2",
      y: "bottom-14",
      content: "Click this button to open the settings menu!"
    }
  }

  return (
    <div 
      className={`absolute ${tips["modes"].x} ${tips["modes"].y} z-50 flex flex-col bg-green-200 shadow-lg p-2 rounded`}>
          <div className="comfortaa font-medium">
            {tips["modes"].content}
          </div>
        <div className="flex mt-2 justify-between">
          <button 
            type="button" 
            className="focus:outline-none leading-4 pb-1 text-green-100 font-bold px-2 rounded bg-green-600"
            onClick={onClose}>exit tour</button>
          <button 
            type="button" 
            className="focus:outline-none leading-4 pb-1 text-green-100 font-bold px-2 rounded ml-2 bg-green-600"
            onClick={onClose}>next tip -></button>
          </div>
          {tips["modes"].arrow}
        </div> 
  )
}

export default ToolTips;