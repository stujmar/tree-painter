import React from 'react';

const StoreItem = ({item, resources, handleBuy }) => {

    let canAfford = resources[item.currency] >= item.price;

    return (
        <button
        onClick={() => handleBuy(item)}
        style={{ background: !item.isBought && item.price > resources[item.currency] ? "#D4D4D4" : "" }}
        className={`focus:outline-none p-2 ${item.isBought ? "bg-green-500" : "bg-green-400 hover:bg-green-500"} rounded-lg`}
        >
        <div className="flex flex-row justify-start">
          <div 
            style={{ background: !canAfford && !item.isBought ? "#A3A3A3" : "" }}
            className={`w-24 h-24 flex-shrink-0 ${item.isBought ? "bg-green-500" : "bg-green-500 hover:bg-green-500"}  rounded-lg`}>
            <div className="w-min h-full mx-auto flex flex-col justify-center">
                {item.isBought ?  item.colorSVG : item.whiteSVG}
            </div>
          </div>
          <div className="w-full ml-2">
            <h3 className={`w-min capitalize text-left text-lg comfortaa text-green-50 ${!canAfford && !item.isBought ? "bg-trueGray-400" : "bg-green-500"} rounded-md px-2 pt-1`}>{item.alias}</h3>
            <div className={`mt-2 px-2 text-white font-medium text-left pt-1 w-max rounded comfortaa ${!canAfford && !item.isBought ? "bg-red-400" : ""}`}>{item.isBought ? "" : `${item.currency}: ${resources[item.currency]}/${item.price}`}</div>
            <div className="text-sm font-medium text-white text-left comfortaa px-2">{item.isBought ? item.description : ""}</div>
          </div>
        </div>
      </button>
    );
}

export default StoreItem;