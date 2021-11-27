import React from 'react';
import { useDispatch } from 'react-redux';
import { setMilestone, updateResource } from '../../../redux/gameSlice';

const StoreItem = ({item, resources }) => {

    let dispatch = useDispatch();

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
        if(canAfford(item)) {
           dispatch(setMilestone(item.name));
           item.cost.forEach(element => {
               dispatch(updateResource({type: element.resource, amount: -element.amount}));
           })
        }
    }

    return (
        <button
        onClick={() => handleBuy()}
        style={{ background: !item.isBought && !canAfford(item) ? "#D4D4D4" : "" }}
        className={`focus:outline-none p-2 ${item.isBought ? "bg-green-500" : "bg-green-400 hover:bg-green-500"} rounded-lg`}
        >
        <div className="flex flex-row justify-start">
          <div 
            style={{ background: !canAfford(item) && !item.isBought ? "#A3A3A3" : "" }}
            className={`w-24 h-24 flex-shrink-0 ${item.isBought ? "bg-green-500" : "bg-green-500 hover:bg-green-500"}  rounded-lg`}>
            <div className="w-min h-full mx-auto flex flex-col justify-center">
                {item.isBought ?  item.colorSVG : item.whiteSVG}
            </div>
          </div>
          <div className="w-full ml-2">
            <h3 className={`w-min capitalize text-left text-lg comfortaa text-green-50 ${!canAfford(item) && !item.isBought ? "bg-trueGray-400" : "bg-green-500"} rounded-md px-2 pt-1`}>{item.alias}</h3>
            {item.isBought ? <div className="text-sm font-medium text-white text-left comfortaa mt-1 px-2">{item.description}</div> : null}
            {!item.isBought ? item.cost.map((currency) => {
                let isRed = resources[currency.resource] < currency.amount;
                return (
                <div
                    key={currency.resource}
                    className={`mt-1 px-2 text-white text-sm font-medium text-left pt-1 w-max rounded comfortaa ${isRed && !item.isBought ? "bg-red-400" : "bg-green-500"}`}
                >{`${currency.resource}: ${resources[currency.resource]}/${currency.amount}`}</div>
                )
            }
            )
            : null}
          </div>
        </div>
      </button>
    );
}

export default StoreItem;