import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {selectMilestones, selectResources, setMilestone, toggleStore} from '../../../redux/gameSlice'
import StoreItem from "./StoreItem";
import { 
  barnWhiteSVG,
  barnColorSVG,
  wellWhiteSVG,
  wellColorSVG,
  siloWhiteSVG,
  siloColorSVG,
  starsWhiteSVG,
  starsColorSVG,
} from "./storeSvgs";

const Store = () => {

    const [items, setItems] = useState([]);
    const dispatch = useDispatch();
    
    let resources = useSelector(selectResources);
    // let isSpeedBought =  useSelector(selectMilestones).speed
    // let isTractorBought =  useSelector(selectMilestones).tractor
    let isWaterBought =  useSelector(selectMilestones).water
    let isBarnBought =  useSelector(selectMilestones).barn
    let isStarsBought =  useSelector(selectMilestones).stars
    let isSiloBought =  useSelector(selectMilestones).silo

    // let isStarsBought =  useSelector(selectMilestones).stars
    
    const onExit = () => {
        dispatch(toggleStore());
    }

    useEffect(() => {
      setItems(storeData.map(_item => {
        return <StoreItem key={_item.name} item={_item} resources={resources} handleBuy={handleBuy} />
      }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ isBarnBought, isSiloBought, isStarsBought, isWaterBought ]);

    const storeData = [
      {
        name: "water",
        price: 5,
        currency: "seeds",
        whiteSVG: wellWhiteSVG(125),
        colorSVG: wellColorSVG(125),
        description: "Water is used to grow crops and animals",
        isBought: isWaterBought
      },
      {
        name: "barn",
        price: 10,
        currency: "seeds",
        whiteSVG: barnWhiteSVG(70),
        colorSVG: barnColorSVG(70),
        description: "A barn is needed to store animals",
        isBought: isBarnBought
      },
      {
        name: "silo",
        price: 15,
        currency: "seeds",
        whiteSVG: siloWhiteSVG(70),
        colorSVG: siloColorSVG(70),
        description: "A silo is needed to store crops",
        isBought: isSiloBought
      },
      {
        name: "stars",
        price: 20,
        currency: "seeds",
        whiteSVG: starsWhiteSVG(70),
        colorSVG: starsColorSVG(70),
        description: "A star is needed to harvest crops",
        isBought: isStarsBought
      }
    ];

    const handleBuy = (item) => {
       if ( resources[item.currency] >= item.price ) {
         console.log("buy", item.name)
        dispatch(setMilestone(item.name))
       }
    }

    return (
        <div className="absolute z-20 mt-4 w-full">
          <div className="w-11/12 md:w-max bg-green-100 mx-auto mt-4 p-4 pb-6 rounded-lg shadow-lg">
            <div className="mt-2 block font-bold text-lg sm:text-xl text-green-800 mx-auto w-11/12 comfortaa text-center">Click to buy buildings which unlock new game features</div>

          <div className="w-full sm:w-11/12 md:max-w-lg h-80 overflow-y-auto pr-4 mt-8 mx-auto">
            <div className="w-full grid gap-2 grid-cols-1">
              {items}
            </div>
          </div>
          <button className="block mx-auto w-max text-base comfortaa font-bold pt-1 focus:outline-none text-green-50 bg-green-600 hover:bg-green-700 px-2 font-medium rounded mt-4" aria-label="Exit Store" onClick={onExit} >EXIT STORE</button>
          </div>
        </div>
    );
}

export default Store;