import React from 'react';

const Trunk = ({trunkData, color, girth, isDead}) => {

    let trunkColor = isDead ? "bg-orange-500" : "bg-orange-400";
    let isHidden = isDead ? "hidden" : "";

    function returnBranchWidth(branchLength) {
        let base = 8;
        if (branchLength === 1) {
            return base
        } else {
            return base + (branchLength)
        }
    }

    return (

            <div style={{width: girth}} className="h-2 opacity-100 text-green-100 relative">
            <div className={`h-3 -mt-1 ${trunkColor}`}>

              {trunkData.left ? <div style={{width: trunkData.left*3, zIndex: 0,  transform: "rotate(20deg)", right: girth - 2 }}className="h-1 absolute top-1">
                  <div className="relative w-full h-full">

                  {trunkData.left > 5 ? <div 
                        style={{transform: "rotate(55deg)"}}
                        className={`absolute right-2 -top-1 w-2 h-1 ${trunkColor}`}>
                            <div className="relative w-full h-full">
                                <div className={`h-2 absolute -left-2 -top-0.5 rounded-full w-2 ${isHidden} ${color}`}></div>
                            </div>
                        </div> : <></>}

                    <div style={{height:  returnBranchWidth(trunkData.left), width: returnBranchWidth(trunkData.left), top: -trunkData.left/2 -3}} className={`h-3 w-3 ${isHidden} ${color} absolute rounded-full -left-2`}></div>
                  </div>
                  <div className={`absolute inset-0 w-full h-full ${trunkColor}`}></div>
              </div> : null}
              {trunkData.right ? <div style={{width: trunkData.right*3, zIndex: 0, transform: "rotate(-20deg)", left: girth - 2}}className="h-1 absolute top-1">
                <div className="relative w-full h-full">

                    {trunkData.right > 5 ? <div 
                        style={{transform: "rotate(-50deg)"}}
                        className={`absolute left-2 -top-1 w-2 h-1 ${trunkColor}`}>
                            <div className="relative w-full h-full">
                                <div className={`h-2 absolute -right-2 -top-0.5 rounded-full w-2 ${color} ${isHidden}`}></div>
                            </div>
                        </div> : <></>}

                    <div style={{height: returnBranchWidth(trunkData.right), width: returnBranchWidth(trunkData.right), top: -trunkData.right/2 - 3}} className={`h-3 w-3 ${isHidden} ${color} absolute rounded-full -right-2`}></div>
                  </div>
                  <div className={`absolute inset-0 w-full h-full ${trunkColor}`}></div>
              </div> : null}
            </div>
            </div>


    )
}

export default Trunk;