import React from 'react';
import Graph from './Graph';

const GraphPanel = ({toggleGraph}) => {
    return (
        // <div className="absolute">
        //     <button
        //         className="absolute bg-green-100 hover:bg-green-200 right-2 top-2 rounded-md z-50 opacity-100"
        //         onClick={toggleGraph}
        //     >
        //         <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        //         </svg>
        //     </button> 
        
        //     <div className="fixed h-48 z-20 w-screen bg-green-600 opacity-80">
        // </div>
        //     <div className="w-24 h-24 border bg-white"></div>
        // </div>
        <div className="absolute inset-0 bg-red-500 w-full h-screen z-50">
            <div className="relative w-full h-full bg-gray-200 pt-48">
                <button
                    className="absolute bg-gray-300 hover:bg-gray-200 right-2 top-2 rounded-md z-50 opacity-100"
                    onClick={toggleGraph}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button> 
                <Graph />
            </div>
        </div>
    )
}

export default GraphPanel;