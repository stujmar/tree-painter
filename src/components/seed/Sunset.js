import React from 'react'
import { defaultProps } from 'recompose';

const Sunset = ({opacity}) => {
    // let test = .5;
    return (
        <div 
        style={{ background: `linear-gradient(0deg, rgba(255,0,0,${opacity}) 0%, rgba(255,255,255,0) 85%)` }}
        className="absolute bottom-0 w-96 h-24 z-10">
        </div>
    )
}
const withDefaultProps = defaultProps({
    opacity: .5
  });

  export default withDefaultProps(Sunset);