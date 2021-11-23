import React from "react";

const Store = ({ onClick }) => {
    return (
        <div className="absolute z-20 w-full">
            <div className="sm:w-11/12 md:max-w-lg bg-green-100 font-bold text-green-800 comfortaa p-4 text-center mt-2 mx-2 sm:mt-16 rounded-lg text-xl sm:text-2xl shadow sm:mx-auto">
                <span>Welcome to the treelapse store, more content coming soon</span>
            <br></br>
            <button className="block ml-auto w-min border-4 border-green-700 px-2 font-bold rounded mt-2" aria-label="Exit Store" onClick={onClick} >exit</button>
            </div>
        </div>
    );
}

export default Store;