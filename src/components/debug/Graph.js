import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


const Graph = () => {
    const dispatch = useDispatch();
    const [verticalLines, setVerticalLines] = useState([]);
    const [horizontalLines, setHorizontalLines] = useState([]);

    const getHorizontalLines = (density) => {
        console.log("getting horizontal lines")
        setHorizontalLines([...Array(density)].map((elementInArray, index) => {
            return <div key={index}>{`h: ${index}`}</div>
        }));
    };

    const getVerticalLines = (density) => {
        setVerticalLines([...Array(density)].map((elementInArray, index) => {
            return <div key={index}>{`v: ${index}`}</div>
        }));
        console.log("getting vertical lines")
    };

    useEffect(() => {
        console.log("Graph component mounted");
        getHorizontalLines(4);
        getVerticalLines(4);
    },[])

    return (
        <div className="border-2 border-black w-96 h-96 bg-white mx-auto text-center relative">
            <div className="h-2 w-2 rounded-full bg-red-500 absolute" style={{top: '0%', left: '0%'}}></div>
            <h1 className="mt-12">Graphs Go Here</h1>
            {verticalLines}
            {horizontalLines}
        </div>
    );
}

export default Graph;