import React from 'react';
import { useSelector } from 'react-redux';
import { selectMode } from '../../../redux/gameSlice';

const Wisp = ({data}) => {
  console.log(data.age)
  let mode = useSelector(selectMode);
  const handleClick = () => {
    console.log("you clicked a butterfly!", mode);
  }
  return (
    <button
      className="absolute focus:outline-none"
      onClick={() => handleClick()}
      style={{
        left: `${data.x - 8}%`, 
        top: `${data.y}%`, 
        width: "30px",
        height: "30px",
        }}
    >
      <svg width="20" height="20" viewBox="0 0 39 39" fill="none">
        <circle cx="19.5" cy="19.5" r="12.5" fill="#FBFFC9"/>
        <circle cx="19.5" cy="19.5" r="19.5" fill="#FBFFC9" fill-opacity="0.5"/>
      </svg>
    </button>
  )
}

export default Wisp;