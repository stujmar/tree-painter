import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectMilestones, setMilestone, updateResource } from '../../../redux/gameSlice';

const StoreItem = ({item, resources }) => {

    let dispatch = useDispatch();
    let isBought = useSelector(selectMilestones)[item.name]
    const canAfford = (_item) => {
        let _canAfford = true;
        _item.cost.forEach(cost => {
            if(resources[cost.resource] < cost.amount) {
                _canAfford = false;
            }
        })
        return _canAfford;
    }

    const handleBuy = () => {
        if(canAfford(item) && !isBought) {
           dispatch(setMilestone(item.name));
           item.cost.forEach(element => {
               dispatch(updateResource({type: element.resource, amount: -element.amount}));
           })
        }
    }

    return (
        <button
        onClick={() => handleBuy()}
        style={{ background: !isBought && !canAfford(item) ? "#D4D4D4" : "" }}
        className={`focus:outline-none p-2 md:p-3 ${isBought ? "bg-green-500" : "bg-green-400 hover:bg-green-500"} rounded-lg`}
        >
        <div className="flex flex-row justify-start">
          <div 
            style={{ background: !canAfford(item) && !isBought ? "#A3A3A3" : "" }}
            className={`w-24 h-24 flex-shrink-0 ${isBought ? "bg-green-500" : "bg-green-500 hover:bg-green-500"}  rounded-lg`}>
            <div className="w-min h-full mx-auto flex flex-col justify-center">
                {isBought ?  item.colorSVG : item.whiteSVG}
            </div>
          </div>
          <div className="ml-2">
            <h3 className={`w-min text-left text-lg comfortaa text-green-50 ${!canAfford(item) && !isBought ? "bg-trueGray-400" : "bg-green-500"} rounded-md px-2 pt-1`}>{item.alias}</h3>

            {isBought ? <div className="pl-2 text-sm font-medium text-white text-left comfortaa mt-1">{item.description}</div> : null}
            {!isBought ? item.cost.map((currency) => {
                let isRed = resources[currency.resource] < currency.amount;
                return (
                <div> 
                    <div
                        key={currency.resource}
                        className={`mt-1 text-white px-2 text-sm font-medium text-left pt-1 w-max rounded comfortaa ${isRed && !isBought ? "bg-red-400" : "bg-green-500"}`}
                    >{`${currency.resource}: ${resources[currency.resource]}/${currency.amount}`}</div>
                </div>
                )}) : null}
            </div>
          </div>
      </button>
    );
}

export default StoreItem;