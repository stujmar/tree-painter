import React from 'react';

const Trunk = ({trunkData}) => {
    if (trunkData.left > 0 || trunkData.right > 0) {
        console.log("we've got branches!");
    }

    return (
        <div className="w-10 h-2 -ml-2">
            <div className="w-4 h-2 bg-orange-400 mx-auto opacity-100"></div>

        </div>
    )
}

export default Trunk;