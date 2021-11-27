import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {selectMilestones, selectResources, toggleStore} from '../../../redux/gameSlice'
import StoreItem from "./StoreItem";
import { inventory } from "./storeInventory";

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
      setItems(inventory.map(_item => {
        return <StoreItem key={_item.name} item={_item} resources={resources} />
      }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ isBarnBought, isSiloBought, isStarsBought, isWaterBought ]);

    return (
        <div className="absolute z-20 mt-4 w-full">
          <div className="w-11/12 md:w-max bg-green-100 mx-auto mt-4 p-4 rounded-lg shadow-lg">
            <div className="mt-2 block font-bold text-lg text-green-600 mx-auto w-11/12 comfortaa text-center">Click to buy buildings which unlock new game features</div>

          <div className="w-full sm:w-11/12 md:max-w-xl h-96 overflow-y-auto mt-6 mx-auto">
            <div className="w-full grid gap-y-2 px-2 grid-cols-1">
              {items}
            </div>
          </div>
          <button className="block mx-auto w-full text-base comfortaa font-bold pt-1 focus:outline-none text-green-50 bg-green-500 hover:bg-green-600 px-2 font-medium rounded mt-6" aria-label="Exit Store" onClick={onExit} >EXIT STORE</button>
          </div>
        </div>
    );
}

export default Store;