import React from 'react';
import { useSelector } from 'react-redux';
import { selectDay } from '../../redux/daySlice';
import { selectHour } from '../../redux/hourSlice';
import { getDate, getTime } from '../../utils/dateTimeConverters';

const TimeDisplay = () => {

  let day = useSelector(selectDay);
  let hour = useSelector(selectHour);

  return (
    <>
      <div>{getDate(day)}</div>
      <div className="ml-2 md:ml-0">{getTime(hour)}</div>
    </>
  )
}

export default TimeDisplay;
