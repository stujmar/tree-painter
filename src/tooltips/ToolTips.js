import React, { useState } from 'react';

const ToolTips = ({onClose}) => {

const [activeTip, setActiveTip] = useState("time");
const tipOrder = ["time", "status", "mode", "build", "settings"];

const arrowTopLeft = <div className="h-2 w-2 absolute -top-3" style={{ borderBottom: "15px #BBF7D0 solid", borderLeft: "10px transparent solid", borderRight: "10px solid transparent"}} ></div>
const arrowBottomLeft = <div className="h-2 w-2 absolute -bottom-3" style={{ borderTop: "15px #BBF7D0 solid", borderLeft: "10px transparent solid", borderRight: "10px solid transparent"}} ></div>
const arrowBottomRight = <div className="h-2 w-2 absolute right-2 -bottom-3" style={{ borderTop: "15px #BBF7D0 solid", borderLeft: "10px transparent solid", borderRight: "10px solid transparent"}} ></div>

const isLastTip = tipOrder.indexOf(activeTip) === tipOrder.length - 1;

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


  const nextTip = () => {
    const nextTipIndex = tipOrder.indexOf(activeTip) + 1;
    const nextTip = tipOrder[nextTipIndex];
    setActiveTip(nextTip);
  }

  return (
    <div 
      className={`fixed ${tips[activeTip].x} ${tips[activeTip].y} z-50 flex flex-col bg-green-200 shadow-lg p-2 rounded`}>
          <div className="comfortaa font-medium text-green-800 max-w-md">
            {tips[activeTip].content}
          </div>
        <div className="flex mt-2 justify-between">
          <button 
            type="button" 
            className="focus:outline-none hover:bg-green-700 shadow text-green-50 font-medium px-2 rounded bg-green-600"
            onClick={onClose}>exit tour</button>
          {isLastTip ? null : <button 
            type="button" 
            className="focus:outline-none hover:bg-green-700 shadow flex items-center pl-3 text-green-50 font-medium px-2 rounded ml-2 bg-green-600"
            onClick={nextTip}>next tip 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 pt-1 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            </button>}
          </div>
          {tips[activeTip].arrow}
        </div> 
  )
}

export default ToolTips;