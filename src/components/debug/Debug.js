import React from 'react';

const Debug = ({infoPanel}) => {
    return (
        <div className="pl-2">
            <div className="flex flex-wrap ">
                {infoPanel}
            </div>
        </div>
    )
}

export default Debug;
