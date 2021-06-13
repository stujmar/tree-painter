import React from 'react'

const Sunset = ({sunSet}) => {
let percent = 65;

    return (
        <div 
            style={{ background: `linear-gradient(0deg, rgba(255,100,100, 1.0) 0%, rgba(255,255,255,0) ${percent}%)`,
            opacity: sunSet}}
        className="bottom-0 absolute w-full h-full z-4 transition duration-5000">
        </div>
    )
}

  export default Sunset;
  