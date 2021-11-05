import React from 'react';

const Trunk = ({trunkData}) => {

    return (
        <div className="w-10 h-2 -ml-2">
            <div className="w-4 h-2 bg-orange-400 mx-auto opacity-100 text-green-100 relative">
              {trunkData.left ? <div style={{width: trunkData.left*2, zIndex: 0}}className="h-1 bg-orange-400 absolute right-4">
                  <div className="relative w-full h-full">
                    <div className="h-3 w-3 bg-green-300 absolute rounded-full -top-1 -left-3"></div>
                  </div>
              </div> : null}
              {trunkData.right ? <div style={{width: trunkData.right*2, zIndex: 0}}className="h-1 bg-orange-400 absolute left-4">
                <div className="relative w-full h-full">
                    <div className="h-3 w-3 bg-green-300 absolute rounded-full -top-1 -right-3"></div>
                  </div>
              </div> : null}
            </div>

        </div>
    )
}

export default Trunk;