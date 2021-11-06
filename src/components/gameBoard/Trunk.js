import React from 'react';
import { getSeason } from '../../utils/getSeason';

const Trunk = ({trunkData, color}) => {

    function returnBranchWidth(branchLength) {
        let base = 8;
        if (branchLength === 1) {
            return base
        } else {
            return base + (branchLength)
        }
    }


    return (
        <div className="w-10 h-2 -ml-2">
            <div className="w-4 h-2 bg-orange-400 mx-auto opacity-100 text-green-100 relative">
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

        </div>
    )
}

export default Trunk;