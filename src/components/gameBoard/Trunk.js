import React from 'react';

const Trunk = ({trunkData, color}) => {

    // let trunkWidth = 20

    function returnBranchWidth(branchLength) {
        let base = 8;
        if (branchLength === 1) {
            return base
        } else {
            return base + (branchLength)
        }
    }

    return (

            <div className="w-4 h-2 bg-orange-400 opacity-100 text-green-100 relative">
              {trunkData.left ? <div style={{width: trunkData.left*3, zIndex: 0,  transform: "rotate(20deg)"}}className="h-1 bg-orange-400 absolute top-1 right-3">
                  <div className="relative w-full h-full">
                    <div style={{height:  returnBranchWidth(trunkData.left), width: returnBranchWidth(trunkData.left), top: -trunkData.left}} className={`h-3 w-3 ${color} absolute rounded-full -left-2`}></div>
                  </div>
              </div> : null}
              {trunkData.right ? <div style={{width: trunkData.right*3, zIndex: 0, transform: "rotate(-20deg)"}}className="h-1 bg-orange-400 absolute top-1 left-3">
                <div className="relative w-full h-full">
                    <div style={{height: returnBranchWidth(trunkData.right), width: returnBranchWidth(trunkData.right), top: -trunkData.right}} className={`h-3 w-3 ${color} absolute rounded-full -right-2`}></div>
                  </div>
              </div> : null}
            </div>


    )
}

export default Trunk;