import React from 'react';

const Trunk = ({trunkData}) => {
    if (trunkData.left > 0 || trunkData.right > 0) {
        console.log("we've got branches!");
    }

    return (
        <div className="w-10 h-2 -ml-2">
            <div className="w-4 h-2 bg-orange-400 mx-auto opacity-100 text-green-100 relative">
              {trunkData.left ? <div style={{width: trunkData.left, zIndex: 0}}className="h-1 bg-orange-400 absolute right-4"></div> : null}
              {trunkData.right ? <p className="absolute right-0"></p> : null}
            </div>

        </div>
    )
}

export default Trunk;