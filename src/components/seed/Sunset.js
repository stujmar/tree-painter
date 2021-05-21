import React from 'react'

const Sunset = (opacity=1) => {
    return (
        <div 
        style={{background: `linear-gradient(0deg, rgba(255,0,0,${opacity}) 0%, rgba(255,255,255,0) 50%);`}}
        className="absolute bottom-0 w-96 h-24 bg-red">

        </div>
    )
}

export default Sunset;