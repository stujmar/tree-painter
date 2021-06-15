import React from 'react';

const Trunk = ({trunkData}) => {
    if (trunkData.left > 0 || trunkData.right > 0) {
        console.log("we've got branches!");
    }

    return (<div className="w-4 h-2 -mt-1 bg-orange-400"></div>)
}

export default Trunk;