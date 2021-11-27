import React from 'react';

const StoreItem = ({item, resources, handleBuy }) => {

    let canAfford = resources[item.currency] >= item.price;

    return (
        <button
        onClick={() => handleBuy(item)}
        style={{ background: !item.isBought && item.price > resources[item.currency] ? "#ED7A7A" : "" }}
        className={`focus:outline-none p-4 ${item.isBought ? "bg-green-500" : "bg-green-400 hover:bg-green-500"} rounded-lg`}
        >
        <div className="flex flex-row justify-start">
          <div className={`w-24 h-24 flex-shrink-0 border ${item.isBought ? "bg-green-500" : "bg-green-400 hover:bg-green-500"} rounded-lg`}>
            <div className="w-min h-full mx-auto flex flex-col justify-center">
                {item.isBought ?  item.colorSVG : item.whiteSVG}
            </div>
          </div>
          <div className="w-full p-2">
            <h3 className={`w-min capitalize text-left text-xl comfortaa text-green-50 ${canAfford ? "bg-green-500" : "bg-red-500"} rounded-md px-2 pt-1`}>{item.name}</h3>
            <div className="mt-2 px-2 text-white font-medium text-left comfortaa">{item.isBought ? "" : `${item.currency}: ${item.price}`}</div>
            <div className="text-sm font-medium text-white text-left comfortaa px-1">{item.isBought ? item.description : ""}</div>
          </div>
        </div>
      </button>
    );
}

export default StoreItem;