import React from 'react'

const PlantedTreeInfo = ({ x, y, color, age, id, diameter, onDelete }) => {
    return (
        <>
            <div className="p-1 m-1 rounded shadow" style={{borderColor: color, borderWidth: "3px"}}>
                <div className="flex"> {/* TOP ROW */}
                    <div className="ml-1">{`diameter: ${diameter}`}</div>
                    <div className="ml-2">{`age: ${age}`}</div>
                </div>
                <div className="flex"> {/* BOTTOM ROW*/}
                    <button className="border rounded px-1 mx-1 text-sm font-medium uppercase hover:bg-gray-50" onClick={() => onDelete(id)}>cut down</button>
                </div>
            </div>
        </>
    )
}

export default PlantedTreeInfo;
