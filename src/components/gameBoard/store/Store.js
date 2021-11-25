import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {selectMilestones, setMilestone, toggleStore} from '../../../redux/gameSlice'
import { barnWhiteSVG, barnColorSVG, wellWhiteSVG, wellColorSVG } from "./storeSvgs";

const Store = () => {

    const dispatch = useDispatch();
    let isSpeedBought =  useSelector(selectMilestones).speed
    let isSeasonsBought =  useSelector(selectMilestones).seasons
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
      "seasons": {
        name: "seasons",
        price: 1,
        currency: "seeds"
      },
      "water": {
        name: "water",
        price: 1,
        currency: "seeds"
      },
      "barn": {
        name: "barn",
        price: 1,
        currency: "seeds"
      },
      "silo": {
        name: "silo",
        price: 1,
        currency: "seeds"
      },
      "stars": {
        name: "stars",
        price: 1,
        currency: "seeds"
      }
    };

    const handleBuy = (item) => {
        dispatch(setMilestone(item.name))
    }

    return (
        <div className="absolute z-20 w-full">
          <div className="w-11/12 sm:w-10/12 md:max-w-lg bg-green-100 font-bold text-green-800 shadow-lg comfortaa p-4 text-center mt-2 md:mt-10 rounded-lg text-lg sm:text-xl shadow mx-auto">
            <span className="px-4">Click to buy buildings which unlock new game features</span>
            <div className="w-full grid gap-2 grid-cols-2 sm:grid-cols-3 mt-3">
              <button
                onClick={() => handleBuy(prices.speed)}
                className={`focus:outline-none h-20 aspect-h-1 aspect-w-1 ${isSpeedBought ? "bg-green-500" : "bg-green-400 hover:bg-green-500"} rounded-lg`}><div className="flex flex-col justify-center">Unlock Speed</div>
              </button>
              <button
                onClick={() => handleBuy(prices.seasons)}
                className={`focus:outline-none h-20 aspect-h-1 aspect-w-1 ${isSeasonsBought ? "bg-green-500" : "bg-green-400 hover:bg-green-500"} rounded-lg`}><div className="flex flex-col justify-center">Unlock Seasons</div>
              </button>
              <button
                onClick={() => handleBuy(prices.water)}
                className={`focus:outline-none h-20 aspect-h-1 aspect-w-1 ${isWaterBought ? "bg-green-500" : "bg-green-400 hover:bg-green-500"} rounded-lg`}>
                <div className="flex flex-col justify-center">
                  <div className="mx-auto">
                    {isWaterBought ?  wellColorSVG : wellWhiteSVG}
                  </div>
                  <div className="mt-2 text-white font-medium comfortaa">{isWaterBought ? "Unlocked" : "Unlock Well"}</div>
                  <div className="text-sm font-bold text-white comfortaa h-2">{isWaterBought ? " " : "two acrorns"}</div>
                </div>
              </button>
              <button
                onClick={() => handleBuy(prices.barn)}
                className={`focus:outline-none h-20 aspect-h-1 aspect-w-1 ${isBarnBought ? "bg-green-500" : "bg-green-400 hover:bg-green-500"} rounded-lg`}>
                <div className="flex flex-col justify-center">
                  <div className="mx-auto">
                    {isBarnBought ?  barnColorSVG : barnWhiteSVG}
                  </div>
                  <div className="mt-2 text-white font-medium comfortaa">{isBarnBought ? "Unlocked" : "Unlock Barn"}</div>
                  <div className="text-sm font-bold text-white comfortaa h-2">{isBarnBought ? " " : "two acrorns"}</div>
                </div>
              </button>
              <button
                onClick={() => handleBuy(prices.silo)}
                className={`focus:outline-none h-20 aspect-h-1 aspect-w-1 ${isSiloBought ? "bg-green-500" : "bg-green-400 hover:bg-green-500"} rounded-lg`}><div className="flex flex-col justify-center">Unlock Silo</div>
              </button>
              <button
                onClick={() => handleBuy(prices.stars)}
                className={`focus:outline-none h-20 aspect-h-1 aspect-w-1 ${isStarsBought ? "bg-green-500" : "bg-green-400 hover:bg-green-500"} rounded-lg`}><div className="flex flex-col justify-center">Unlock Stars</div>
              </button>
            </div>
          <button className="block mx-auto w-min text-base comfortaa font-bold pt-1 focus:outline-none text-green-50 bg-green-600 hover:bg-green-700 px-2 font-medium rounded mt-4" aria-label="Exit Store" onClick={onExit} >EXIT</button>
          </div>
        </div>
    );
}

export default Store;