import React from "react";
import {useDispatch} from "react-redux";
import {setMilestone, toggleStore} from '../../redux/gameSlice'

const Store = () => {

    const dispatch = useDispatch();
    const onExit = () => {
        dispatch(toggleStore());
    }

    const handleBuy = (item) => {
        dispatch(setMilestone(item))
    }

    return (
        <div className="absolute z-20 w-full">
          <div className="w-11/12 sm:w-10/12 md:max-w-lg bg-green-100 font-bold text-green-800 shadow-lg comfortaa p-4 text-center mt-2 md:mt-10 rounded-lg text-lg sm:text-xl shadow mx-auto">
            <span className="px-4">Click to buy buildings which unlock new game features</span>
            <div className="w-full grid gap-2 grid-cols-2 sm:grid-cols-3 mt-3">
              <button
                onClick={() => handleBuy('speed')}
                className="focus:outline-none h-20 aspect-h-1 aspect-w-1 bg-green-300 hover:bg-green-400 rounded-lg"><div className="flex flex-col justify-center">Unlock Speed</div>
              </button>
              <button
                onClick={() => handleBuy('seasons')}
                className="focus:outline-none h-20 aspect-h-1 aspect-w-1 bg-green-300 hover:bg-green-400 rounded-lg"><div className="flex flex-col justify-center">Unlock Seasons</div>
              </button>
              <button
                onClick={() => handleBuy('water')}
                className="focus:outline-none h-20 aspect-h-1 aspect-w-1 bg-green-300 hover:bg-green-400 rounded-lg"><div className="flex flex-col justify-center">Unlock Well</div>
              </button>
              <button
                onClick={() => handleBuy('barn')}
                className="focus:outline-none h-20 aspect-h-1 aspect-w-1 bg-green-300 hover:bg-green-400 rounded-lg"><div className="flex flex-col justify-center">Unlock Barn</div>
              </button>
              <button
                onClick={() => handleBuy('silo')}
                className="focus:outline-none h-20 aspect-h-1 aspect-w-1 bg-green-300 hover:bg-green-400 rounded-lg"><div className="flex flex-col justify-center">Unlock Silo</div>
              </button>
              <button
                onClick={() => handleBuy('stars')}
                className="focus:outline-none h-20 aspect-h-1 aspect-w-1 bg-green-300 hover:bg-green-400 rounded-lg"><div className="flex flex-col justify-center">Unlock Stars</div>
              </button>
            </div>
          <button className="block mx-auto w-min text-base comfortaa font-bold pt-1 focus:outline-none text-green-50 bg-green-600 hover:bg-green-700 px-2 font-medium rounded mt-4" aria-label="Exit Store" onClick={onExit} >EXIT</button>
          </div>
        </div>
    );
}

export default Store;