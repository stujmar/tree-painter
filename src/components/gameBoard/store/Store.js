import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {selectMilestones, selectResources, setMilestone, toggleStore} from '../../../redux/gameSlice'
import { 
  barnWhiteSVG,
  barnColorSVG,
  wellWhiteSVG,
  wellColorSVG,
  siloWhiteSVG,
  siloColorSVG
} from "./storeSvgs";

const Store = () => {

    const dispatch = useDispatch();
    let reasources = useSelector(selectResources);
    let isSpeedBought =  useSelector(selectMilestones).speed
    let isTractorBought =  useSelector(selectMilestones).tractor
    let isWaterBought =  useSelector(selectMilestones).water
    let isBarnBought =  useSelector(selectMilestones).barn
    let isSiloBought =  useSelector(selectMilestones).silo
    let isStarsBought =  useSelector(selectMilestones).stars
    
    const onExit = () => {
        dispatch(toggleStore());
    }

    const prices = {
      "speed": {
        name: "speed",
        price: 1,
        currency: "seeds"
      },
      "tractor": {
        name: "tractor",
        price: 1,
        currency: "seeds"
      },
      "water": {
        name: "water",
        price: 5,
        currency: "seeds"
      },
      "barn": {
        name: "barn",
        price: 10,
        currency: "seeds"
      },
      "silo": {
        name: "silo",
        price: 15,
        currency: "seeds"
      },
      "stars": {
        name: "stars",
        price: 1,
        currency: "seeds"
      }
    };

    const handleBuy = (item) => {
       if ( reasources[item.currency] >= item.price ) {
        dispatch(setMilestone(item.name))
       } else {
         console.log("can't afford");
       }
    }

    return (
        <div className="absolute z-20 w-full">
          <div className="w-11/12 sm:w-10/12 md:max-w-lg bg-green-100 font-bold text-green-800 shadow-lg comfortaa p-4 text-center mt-2 md:mt-10 rounded-lg text-lg sm:text-xl shadow mx-auto">
            <span className="px-4">Click to buy buildings which unlock new game features</span>
            <div className="w-full grid gap-2 grid-cols-2 sm:grid-cols-3 mt-3">
              {/* <button
                onClick={() => handleBuy(prices.speed)}
                className={`focus:outline-none h-20 aspect-h-1 aspect-w-1 ${isSpeedBought ? "bg-green-500" : "bg-green-400 hover:bg-green-500"} rounded-lg`}><div className="flex flex-col justify-center">Unlock Speed</div>
              </button> */}
              {/* <button
                onClick={() => handleBuy(prices.tractor)}
                className={`focus:outline-none h-20 aspect-h-1 aspect-w-1 ${isTractorBought ? "bg-green-500" : "bg-green-400 hover:bg-green-500"} rounded-lg`}><div className="flex flex-col justify-center">Unlock Tractor</div>
              </button> */}
              <button
                onClick={() => handleBuy(prices.water)}
                className={`focus:outline-none aspect-h-1 aspect-w-1 ${isWaterBought ? "bg-green-500" : "bg-green-400 hover:bg-green-500"} rounded-lg`}>
                <div className="flex flex-col justify-start">
                  <div className="mx-auto h-20 pt-6">
                    {isWaterBought ?  wellColorSVG : wellWhiteSVG}
                  </div>
                  <div className="mt-2 text-white font-medium comfortaa">{isWaterBought ? "" : "ACORNS: 5"}</div>
                  <div className="text-sm font-medium text-white comfortaa px-2">{isWaterBought ? "Click the well to draw more water." : ""}</div>
                </div>
              </button>
              <button
                onClick={() => handleBuy(prices.barn)}
                className={`focus:outline-none h-20 aspect-h-1 aspect-w-1 ${isBarnBought ? "bg-green-500" : "bg-green-400 hover:bg-green-500"} rounded-lg`}>
                <div className="flex flex-col justify-center">
                  <div className="mx-auto">
                    {isBarnBought ?  barnColorSVG : barnWhiteSVG}
                  </div>
                  <div className="mt-2 text-white font-medium comfortaa">{isBarnBought ? "" : "ACORNS: 10"}</div>
                  <div className="text-sm font-medium text-white comfortaa px-2">{isBarnBought ? "Store wood in your barn." : ""}</div>
                </div>
              </button>
              <button
                onClick={() => handleBuy(prices.silo)}
                className={`focus:outline-none h-20 aspect-h-1 aspect-w-1 ${isSiloBought ? "bg-green-500" : "bg-green-400 hover:bg-green-500"} rounded-lg`}>
                <div className="flex flex-col justify-start pt-2">
                  <div className="mx-auto">
                    {isSiloBought ?  siloColorSVG : siloWhiteSVG}
                  </div>
                  <div className="mt-2 text-white font-medium comfortaa">{isSiloBought ? "" : "ACORNS: 15"}</div>
                  <div className="text-sm font-medium text-white comfortaa px-1">{isSiloBought ? "Winter is coming, seasons unlocked" : ""}</div>
                </div>
              </button>
              {/* <button
                onClick={() => handleBuy(prices.stars)}
                className={`focus:outline-none h-20 aspect-h-1 aspect-w-1 ${isStarsBought ? "bg-green-500" : "bg-green-400 hover:bg-green-500"} rounded-lg`}><div className="flex flex-col justify-center">Unlock Stars</div>
              </button> */}
            </div>
          <button className="block mx-auto w-min text-base comfortaa font-bold pt-1 focus:outline-none text-green-50 bg-green-600 hover:bg-green-700 px-2 font-medium rounded mt-4" aria-label="Exit Store" onClick={onExit} >EXIT</button>
          </div>
        </div>
    );
}

export default Store;