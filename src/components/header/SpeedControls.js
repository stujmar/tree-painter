import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSpeed, selectSpeed } from '../../redux/clockSlice';

const SpeedControls = () => {

  const dispatch = useDispatch();

  const speed = useSelector(selectSpeed);
  let stop = 123456789;
  
  const changeSpeed = (_speed) => {
    setSpeed(_speed);
    dispatch(setSpeed(_speed));
  }

  return (
    <div className="flex items-start">
      <button className="focus:outline-none" type="button" onClick={() => changeSpeed(stop)}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <line strokeLinecap="round" strokeLinejoin="round" strokeWidth={speed === stop ? 3 : 1} x1="9" y1="5" x2="9" y2="18" />
          <line strokeLinecap="round" strokeLinejoin="round" strokeWidth={speed === stop ? 3 : 1} x1="17" y1="5" x2="17" y2="18" />
      </svg>
      </button>
      <button className="focus:outline-none" type="button" onClick={() => changeSpeed(1000)}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={speed === 1000 ? 3 : 1} d="M9 5l7 7-7 7" />
      </svg>
      </button>
      <button className={`${speed === 500 ? "font-bold": "font-normal"} focus:outline-none`} type="button" onClick={() => changeSpeed(500)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={speed === 500 ? 3 : 1} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
          </svg>
      </button>
    </div>
  )
}

export default SpeedControls;