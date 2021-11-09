import React from 'react';

const Trunk = ({trunkData, color, girth}) => {

    function returnBranchWidth(branchLength) {
        let base = 8;
        if (branchLength === 1) {
            return base
        } else {
            return base + (branchLength)
        }
    }

    return (

            <div style={{width: girth}} className="h-2 bg-orange-400 opacity-100 text-green-100 relative">
              {trunkData.left ? <div style={{width: trunkData.left*3, zIndex: 0,  transform: "rotate(20deg)", right: girth - 2 }}className="h-1 absolute top-1">
                  <div className="relative w-full h-full">
                    <div style={{height:  returnBranchWidth(trunkData.left), width: returnBranchWidth(trunkData.left), top: -trunkData.left}} className={`h-3 w-3 ${color} absolute rounded-full -left-2`}></div>
                  </div>
                  <div className="absolute inset-0 w-full h-full bg-orange-400"></div>
              </div> : null}
              {trunkData.right ? <div style={{width: trunkData.right*3, zIndex: 0, transform: "rotate(-20deg)", left: girth - 2}}className="h-1 absolute top-1">
                <div className="relative w-full h-full">
                    <div style={{height: returnBranchWidth(trunkData.right), width: returnBranchWidth(trunkData.right), top: -trunkData.right}} className={`h-3 w-3 ${color} absolute rounded-full -right-2`}></div>
                  </div>
                  <div className="absolute inset-0 w-full h-full bg-orange-400"></div>
              </div> : null}
            </div>


    )
}

export default Trunk;