import React from 'react';
import { useSelector } from 'react-redux';
import { selectMode } from '../../../redux/gameSlice';

const Butterfly = ({data}) => {
  let mode = useSelector(selectMode);
  const handleClick = () => {
    console.log("you clicked a butterfly!", mode);
  }
  return (
    <button
      className="absolute focus:outline-none"
      onClick={() => handleClick()}
      style={{
        left: `${data.x}%`, 
        top: `${data.y -3}%`, 
        width: "20px",
        height: "20px",
        }}
    >X</button>
  )
}

export default Butterfly;