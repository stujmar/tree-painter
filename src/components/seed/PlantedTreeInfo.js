import React from 'react'

const PlantedTreeInfo = ({ x, y, color, age, id, diameter, onDelete }) => {
    return (
        <>
            <div className="border p-1 mt-1 rounded" style={{borderColor: color, borderWidth: "3px"}}>
                <div className="flex"> {/* TOP ROW */}
                    {/* <div>{`x: ${x}`}</div>
                    <div>{`y: ${y}`}</div> */}
                    <div className="ml-1">{`diameter: ${diameter}`}</div>
                    <div className="ml-2">{`age: ${age}`}</div>
                </div>
                <div className="flex"> {/* BOTTOM ROW*/}
                    <button className="border rounded px-1 mx-1" onClick={() => onDelete(id)}>cut down</button>
                </div>
            </div>
        </>
    )
}

export default PlantedTreeInfo