import React from 'react'
import { defaultProps } from 'recompose';

const Sunset = ({opacity}) => {
let percent = 85;

    return (
        <div 
        style={{ background: `linear-gradient(0deg, rgba(255,0,0,${opacity}) 0%, rgba(255,255,255,0) ${percent}%)` }}
        className="bottom-0 w-full h-full">
        </div>
    )
}
const withDefaultProps = defaultProps({
    opacity: .5
  });

  export default withDefaultProps(Sunset);