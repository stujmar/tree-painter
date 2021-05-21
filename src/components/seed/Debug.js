import React from 'react';

const Debug = ({infoPanel}) => {
    return (
        <div className="mt-4 w-96 lg:w-full">
            <div className="grid grid-cols-2 lg:grid-cols-4">
                {infoPanel}
            </div>
        </div>
    )
}

export default Debug;