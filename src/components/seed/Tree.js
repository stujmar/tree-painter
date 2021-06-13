import React from 'react';

const Tree = ({treeData}) => {

    let seedCrop = treeData.age === 0 ? "overflow-hidden" : "overflow-visible";
    const handleClick = () => {
        console.log("you clicked a tree");
    }

    return (
        // <button key={props.id} 
        //     className={`absolute origin-bottom-center focus:outline-none ${ props.water > 0 ? "water-cursor" : "no-water-cursor" }`}
        //     onClick={() => { props.treeClick(props.id)} } 
        //     style={{
        //         top: props.y, 
        //         left: props.x, 
        //         borderRadius: "0%",
        //         borderBottom: `${props.diameter * 1.25}px solid ${props.color}`,
        //         borderLeft: `${props.diameter}px solid rgba(0,0,0,0)`,
        //         borderRight: `${props.diameter}px solid rgba(0,0,0,0)`,
        //         height: `${props.diameter}px`,
        //         width: `${props.diameter}px`,
        //         }}></button>
        <button
            onClick={handleClick}
            className="absolute focus:outline-none"
            style={{
                top: treeData.y, 
                left: treeData.x, 
                height: `24px`,
                width: `26px`,
                overflow: {seedCrop}
                }}
            >
            <div className={`w-full h-full relative ${seedCrop}`}>
                {}
                <div className="bg-orange-500 absolute -bottom-2 left-1 rounded-2xl h-4 w-4"></div>
            </div>
        </button>
    )
}

export default Tree;
