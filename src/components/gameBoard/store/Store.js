import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {selectMilestones, selectResources, toggleStore} from '../../../redux/gameSlice'
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
    let isBarnBought =  useSelector(selectMilestones).wood
    let isStarsBought =  useSelector(selectMilestones).stars
    let isSiloBought =  useSelector(selectMilestones).seasons

    // let isStarsBought =  useSelector(selectMilestones).stars
    
    const onExit = () => {
        dispatch(toggleStore());
    }

    useEffect(() => {
      setItems(storeData.map(_item => {
        return <StoreItem key={_item.name} item={_item} resources={resources} />
      }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ isBarnBought, isSiloBought, isStarsBought, isWaterBought ]);

    const storeData = [
      {
        name: "water",
        alias: "Well",
        cost: [
          {
            amount: 5,
            resource: "acorns"
          }
        ],
        price: 5,
        currency: "acorns",
        whiteSVG: wellWhiteSVG(125),
        colorSVG: wellColorSVG(125),
        description: "Water is used to grow crops and animals",
        isBought: isWaterBought
      },
      {
        name: "wood",
        alias: "Barn",
        cost: [
          {
            amount: 10,
            resource: "acorns"
          }
        ],
        price: 10,
        currency: "acorns",
        whiteSVG: barnWhiteSVG(70),
        colorSVG: barnColorSVG(70),
        description: "A barn is needed to store animals",
        isBought: isBarnBought
      },
      {
        name: "seasons",
        alias: "Silo",
        cost: [
          {
            amount: 15,
            resource: "acorns"
          },
          {
            amount: 5,
            resource: "water"
          }
        ],
        price: 15,
        currency: "acorns",
        whiteSVG: siloWhiteSVG(70),
        colorSVG: siloColorSVG(70),
        description: "A silo is needed to store crops",
        isBought: isSiloBought
      },
      {
        name: "stars",
        alias: "Observatory",
        cost: [
          {
            amount: 5,
            resource: "acorns"
          },
          {
            amount: 5,
            resource: "wood"
          }
        ],
        price: 20,
        currency: "acorns",
        whiteSVG: starsWhiteSVG(70),
        colorSVG: starsColorSVG(70),
        description: "A star is needed to harvest crops",
        isBought: isStarsBought
      }
    ];

    return (
        <div className="absolute z-20 mt-4 w-full">
          <div className="w-11/12 md:w-max bg-green-100 mx-auto mt-4 p-4 rounded-lg shadow-lg">
            <div className="mt-2 block font-bold text-lg text-green-600 mx-auto w-11/12 comfortaa text-center">Click to buy buildings which unlock new game features</div>

          <div className="w-full sm:w-11/12 md:max-w-xl h-96 overflow-y-auto mt-6 mx-auto">
            <div className="w-full grid gap-2 px-2 grid-cols-1">
              {items}
            </div>
          </div>
          <button className="block mx-auto w-full text-base comfortaa font-bold pt-1 focus:outline-none text-green-50 bg-green-500 hover:bg-green-600 px-2 font-medium rounded mt-4" aria-label="Exit Store" onClick={onExit} >EXIT STORE</button>
          </div>
        </div>
    );
}

export default Store;