import React from 'react'

const PlantedTreeInfo = ({ x, y, color, age, id, onDelete }) => {
    return (
        <>
            <div className="border p-2">
                <div className="flex"> {/* TOP ROW */}
                    <div>{`x: ${x}`}</div>
                    <div>{`y: ${y}`}</div>
                    <div>{`color: ${color}`}</div>
                </div>
                <div className="flex"> {/* BOTTOM ROW*/}
                    <div>{`age: ${age}`}</div>
                    <button onClick={() => onDelete(id)}></button>
                </div>
            </div>
        </>
    )
}

export default PlantedTreeInfo