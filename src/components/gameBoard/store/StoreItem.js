import React from 'react';

const StoreItem = ({item, resources, handleBuy }) => {
    return (
        <button
        onClick={() => handleBuy(item)}
        style={{ background: !item.isBought && item.price > resources[item.currency] ? "#ED7A7A" : "" }}
        className={`focus:outline-none p-4 ${item.isBought ? "bg-green-500" : "bg-green-400 hover:bg-green-500"} rounded-lg`}
        >
        <div className="flex flex-row justify-start">
          <div className={`w-24 h-24 border ${item.isBought ? "bg-green-500" : "bg-green-400 hover:bg-green-500"} rounded-lg`}>
            <div className="w-min h-full mx-auto flex flex-col justify-center">
                {item.isBought ?  item.colorSVG : item.whiteSVG}
            </div>
          </div>
          <div>
            <div className="mt-2 text-white font-medium comfortaa">{item.isBought ? "" : "ACORNS: 15"}</div>
            <div className="text-sm font-medium text-white comfortaa px-1">{item.isBought ? "Winter is coming, seasons unlocked." : ""}</div>
          </div>
        </div>
      </button>
    );
}

export default StoreItem;