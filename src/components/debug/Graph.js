import React from 'react';

const Graph = ({toggleGraph}) => {
    return (
        <div className="">
            <button
                className="absolute bg-green-100 hover:bg-green-200 right-2 top-2 rounded-md z-50 opacity-100"
                onClick={toggleGraph}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button> 
            <div className="fixed absolute h-screen z-20 w-screen bg-green-600 opacity-50">
        </div>
        </div>
    )
}

export default Graph;