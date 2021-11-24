import React from "react";

const Store = ({ onClick }) => {
    return (
        <div className="absolute z-20 w-full">
            <div className="w-11/12 sm:w-10/12 md:max-w-lg bg-green-100 font-bold text-green-800 comfortaa p-4 text-center mt-2 rounded-lg text-lg sm:text-xl shadow mx-auto">
                <span className="px-4">Click to buy buildings which unlock new game features</span>
                <div class="w-full grid gap-2 grid-cols-2 sm:grid-cols-3 mt-3">
                    <button className="h-20 aspect-h-1 aspect-w-1 bg-green-300 hover:bg-green-400 rounded-lg"></button>
                    <button className="h-20 aspect-h-1 aspect-w-1 bg-green-300 hover:bg-green-400 rounded-lg"></button>
                    <button className="h-20 aspect-h-1 aspect-w-1 bg-green-300 hover:bg-green-400 rounded-lg"></button>
                    <button className="h-20 aspect-h-1 aspect-w-1 bg-green-300 hover:bg-green-400 rounded-lg"></button>
                    <button className="h-20 aspect-h-1 aspect-w-1 bg-green-300 hover:bg-green-400 rounded-lg"></button>
                    <button className="h-20 aspect-h-1 aspect-w-1 bg-green-300 hover:bg-green-400 rounded-lg"></button>
                </div>
            <button className="block mx-auto w-min text-base comfortaa font-bold pt-1 focus:outline-none text-green-50 bg-green-600 hover:bg-green-700 px-2 font-medium rounded mt-4" aria-label="Exit Store" onClick={onClick} >EXIT</button>
            </div>
        </div>
    );
}

export default Store;