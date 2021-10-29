import React from 'react';
import { useDispatch, useSelector } from 'react-redux';


const Graph = () => {
    const dispatch = useDispatch();

    return (
        <div className="border-2 border-black w-96 h-96 bg-white mx-auto text-center relative">
            <div className="h-2 w-2 rounded-full bg-red-500 absolute" style={{top: '0%', left: '0%'}}></div>
            <h1 className="mt-12">Graphs Go Here</h1>
        </div>
    );
}

export default Graph;