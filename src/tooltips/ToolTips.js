import React from 'react';

const ToolTips = () => {

  const tips = {
    "modes": {
      positionX: 0,
      positionY: 0,
      content: "Click these buttons to switch modes!"
    }
  }

  return (
    <div className="absolute">{tips["modes"].content}</div>
  )
}

export default ToolTips;