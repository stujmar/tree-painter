import React, { useState } from 'react';

const ToolTips = ({onClose}) => {

  const [activeTip, setActiveTip] = useState("time");

  const arrowTopLeft = <div className="h-2 w-2 absolute -top-3" style={{ borderBottom: "15px #BBF7D0 solid", borderLeft: "10px transparent solid", borderRight: "10px solid transparent"}} ></div>
  const arrowBottomLeft = <div className="h-2 w-2 absolute -bottom-3" style={{ borderTop: "15px #BBF7D0 solid", borderLeft: "10px transparent solid", borderRight: "10px solid transparent"}} ></div>
  const arrowBottomRight = <div className="h-2 w-2 absolute right-2 -bottom-3" style={{ borderTop: "15px #BBF7D0 solid", borderLeft: "10px transparent solid", borderRight: "10px solid transparent"}} ></div>

  // Add new tour tips here.
  const tipOrder = ["time", "status", "mode", "build", "settings"];
  // And here.
  const tips = {
    "time": {
      x: "left-2",
      y: "top-20",
      content: "This clock keeps time. If enough time passes the season will change!",
      arrow: arrowTopLeft
    },
    "status": {
      x: "left-2",
      y: "top-52",
      content: "Here you can see your resources. Play around to unlock more.",
      arrow: arrowTopLeft
    },
    "mode": {
      x: "left-2",
      y: "bottom-14",
      content: "Click these buttons to switch modes!",
      arrow: arrowBottomLeft
    },
    "build": {
      x: "right-14",
      y: "bottom-14",
      content: "Buildings will unlock new game features.",
      arrow: arrowBottomRight
    },
    "settings": {
      x: "right-2",
      y: "bottom-14",
      content: "Settings and game info here.",
      arrow: arrowBottomRight
    }
  }
  
  let isLastTip = tipOrder.indexOf(activeTip) === tipOrder.length - 1;
  let isFirstTip = tipOrder.indexOf(activeTip) === 0;
  
  const nextTip = () => {
    const nextTipIndex = tipOrder.indexOf(activeTip) + 1;
    const nextTip = tipOrder[nextTipIndex];
    setActiveTip(nextTip);
  }
  
  const prevTip = () => {
    const prevTipIndex = tipOrder.indexOf(activeTip) - 1;
    const prevTip = tipOrder[prevTipIndex];
    setActiveTip(prevTip);
  }

  return (
    <div 
      className={`fixed ${tips[activeTip].x} ${tips[activeTip].y} z-50 flex flex-col bg-green-200 shadow-lg p-2 rounded`}>
          <div className="comfortaa font-medium text-green-800 max-w-md">
            {tips[activeTip].content}
          </div>
        <div className="flex mt-2 justify-center gap-4">
        {isFirstTip ? null : <button 
            type="button" 
            className="focus:outline-none hover:bg-green-700 pb-1 shadow flex items-center text-green-50 font-medium px-2 rounded bg-green-600"
            onClick={prevTip}>{"<"}
            </button>}
          <button 
            type="button" 
            className="focus:outline-none hover:bg-green-700 shadow text-green-50 font-medium px-2 rounded bg-green-600"
            onClick={onClose}>exit tour</button>
          {isLastTip ? null : <button 
            type="button" 
            className="focus:outline-none hover:bg-green-700 pb-1 shadow flex items-center text-green-50 font-medium px-2 rounded bg-green-600"
            onClick={nextTip}>{">"}
            </button>}
          </div>
          {tips[activeTip].arrow}
        </div> 
  )
}

export default ToolTips;