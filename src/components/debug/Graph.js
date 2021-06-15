import React from 'react';

const Graph = ({toggleGraph}) => {
    return (
        <div className="fixed h-screen z-20 w-screen bg-green-600 backdrop-filter backdrop-blur-lg opacity-50">
            <div className="w-full h-full relative">
                <button
                    className="absolute bg-green-200 right-2 top-2"
                    onClick={toggleGraph}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Graph;