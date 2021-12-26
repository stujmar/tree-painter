import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectMode, selectResources, setMessage, updateResource } from '../../../redux/gameSlice';
import { removeItemById } from '../../../redux/itemSlice';
import { getRandomInt } from '../../../utils/getRandomInt';
import { getSineY } from '../../../utils/tools';

const Wisp = ({data}) => {
  let dispatch = useDispatch();
  let water = useSelector(selectResources).water
  let mode = useSelector(selectMode);
  let randomWidth = getRandomInt(10,20)

  const handleClick = () => {
    switch (mode) {
      case "HARVEST":
        dispatch(setMessage("Ouch, said the wisp."));
        break;
      case "WATERING":
        if (water > 0) {
          dispatch(setMessage("I'm melting, said the wisp"));
          dispatch(updateResource({type: "stars", amount: 1}))
          dispatch(updateResource({type: "water", amount: -1}))
          dispatch(removeItemById(data.id));
        } else {
          dispatch(setMessage("This wisp is thirsty."));
        }
        break;
      case "GNOME":
        dispatch(setMessage("I'm a wisp, not a gnome!"));
        break;
      default:
        break;
        
    }
    
  }
  return (
    <button
      className="absolute focus:outline-none"
      onClick={() => handleClick()}
      style={{
        left: `${data.x - 8 + data.age}%`, 
        top: `${getSineY(data.age, data.xOffset)}%`, 
        width: "30px",
        height: "20px",
        }}
    >
      <div className="w-min inline-block wisp-in border-red-300 h-full">

      <svg 
        width={randomWidth}
        className=""
        viewBox="0 0 39 39"
        fill="none">
        <circle cx="19.5" cy="19.5" r="12.5" fill="#FBFFC9"/>
        <circle cx="19.5" cy="19.5" r="19.5" fill="#FBFFC9" fillOpacity="0.5"/>
      </svg>
      </div>
    </button>
  )
}

export default Wisp;