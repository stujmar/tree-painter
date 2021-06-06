import React from 'react';

const Tree = (props) => {
    return (
        <button key={props.id} 
            className={`absolute origin-bottom-center focus:outline-none ${ water > 0 ? "water-cursor" : "no-water-cursor" }`}
            onClick={() => { props.treeClick(props.id)} } 
            style={{
                top: props.y, 
                left: props.x, 
                borderRadius: "0%",
                borderBottom: `${props.diameter * 1.25}px solid ${props.color}`,
                borderLeft: `${props.diameter}px solid rgba(0,0,0,0)`,
                borderRight: `${props.diameter}px solid rgba(0,0,0,0)`,
                height: `${props.diameter}px`,
                width: `${props.diameter}px`,
                }}></button>
    )
}

export default Tree;
