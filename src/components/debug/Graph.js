import React from 'react';
import { useDispatch } from 'react-redux';


const Graph = () => {
    const dispatch = useDispatch();

    return (
        <div className="border-2 border-black w-48 h-48 bg-white mx-auto text-center pt-12">
            <h1>Graphs Go Here</h1>
        </div>
    );
}

export default Graph;