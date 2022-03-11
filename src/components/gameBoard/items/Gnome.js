import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectMode, setMessage, updateResource } from '../../../redux/gameSlice';
import { addItem, removeItemById } from '../../../redux/itemSlice';
import { getRandomId } from '../../../utils/getRandomId';
import { MAX_GNOME_AGE } from '../../../utils/settings';

const Gnome = ({data}) => {
  let dispatch = useDispatch();
  let mode = useSelector(selectMode);

  const handleClick = (id) => {
    if (mode === 'GNOME') {
      let newId = "grave_" + getRandomId();                     
      dispatch(addItem({
        id: newId,
        type: 'grave',
        birthday: data.birthday,
        x: data.x,
        y: data.y,
        age: 0,
      }))
      dispatch(setMessage("Bad gnome go bye."));
      dispatch(updateResource({type: 'stone', amount: 1 }))
      dispatch(removeItemById(id));
    } else if (mode === 'WATERING') {
      dispatch(setMessage("Gnomes don't drink water, only glogg."));
    } else {
      dispatch(setMessage("I wish I had a mallet to bop this gnome."));
    }
  }
  return (
    <button
    onClick={() => handleClick(data.id)}
    className="absolute focus:outline-none"
    style={{
        left: `${data.x}%`, 
        top: `${data.y -3}%`, 
        width: "20px",
        overflow: data.age === MAX_GNOME_AGE ? "visible" : "hidden",
        height: "40px",
        }}
    >
    <div className="relative">

    {data.age < MAX_GNOME_AGE ? <svg className="absolute" style={{top: `-${data.age*3.5}px`}} width="21" height="40" viewBox="0 0 21 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.79367 25.9617C0.982468 30.4222 0.0344614 35.186 0 40L20.1152 39.7244C20.1152 39.7244 20.3744 31.9893 17.0377 25.6614L2.79367 25.9617Z" fill="#604E42"/>
      <path d="M10.0926 28.344C14.0305 28.344 17.2228 25.1517 17.2228 21.2137C17.2228 17.2758 14.0305 14.0835 10.0926 14.0835C6.15465 14.0835 2.96234 17.2758 2.96234 21.2137C2.96234 25.1517 6.15465 28.344 10.0926 28.344Z" fill="#D3BE84"/>
      <path d="M10.0967 0L17.05 19.6338C17.05 19.6338 15.9474 18.1033 10.0967 18.1938C4.24605 18.2843 3.13928 19.6338 3.13928 19.6338L10.0967 0Z" fill="#E22D29"/>
      <path d="M3.0076 21.6663C3.0076 21.6663 -3.85106 34.7418 10.1378 34.4662C24.1267 34.1905 17.0952 21.6663 17.0952 21.6663C17.0952 21.6663 16.906 25.5092 10.1419 25.5092C3.3779 25.5092 3.0076 21.6663 3.0076 21.6663Z" fill="#D8D8D8"/>
      <path d="M15.6347 24.0238C15.6347 24.0238 14.6184 22.3534 13.166 21.6663C12.1873 21.2759 11.096 21.2759 10.1173 21.6663C9.13732 21.2748 8.04439 21.2748 7.06442 21.6663C5.60382 22.3534 4.59579 24.0238 4.59579 24.0238C4.59579 24.0238 7.97781 24.8467 10.1296 22.7031C12.2444 24.8591 15.6347 24.0238 15.6347 24.0238Z" fill="#D8D8D8"/>
    </svg> : <svg className="absolute -top-2" width="27" height="30" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="18.5" cy="17.5" r="2.5" fill="#C4C4C4"/>
<circle cx="9.5" cy="3.5" r="3.5" fill="#C4C4C4"/>
<circle cx="19.5" cy="8.5" r="2.5" fill="#C4C4C4"/>
<circle cx="3.5" cy="19.5" r="3.5" fill="#C4C4C4"/>
<circle cx="13.5" cy="26.5" r="3.5" fill="#C4C4C4"/>
<circle cx="10.5" cy="11.5" r="2.5" fill="#C4C4C4"/>
<circle r="1.5" transform="matrix(1 0 0 -1 2.5 9.5)" fill="#C4C4C4"/>
<circle r="1.5" transform="matrix(1 0 0 -1 6.5 26.5)" fill="#C4C4C4"/>
<circle r="1.5" transform="matrix(1 0 0 -1 25.5 15.5)" fill="#C4C4C4"/>
<circle r="1.5" transform="matrix(1 0 0 -1 18.5 22.5)" fill="#C4C4C4"/>
</svg>
}
    {data.age === MAX_GNOME_AGE - 1 ? <svg className="absolute" width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 4.5C14 5.70432 13.5269 6.79813 12.7565 7.60574C13.7672 8.19263 14.5284 9.16171 14.8423 10.3151C15.1314 10.2005 15.4352 10.1151 15.75 10.0622C14.6855 9.23923 14 7.94968 14 6.5C14 4.01471 16.0147 2 18.5 2C20.9853 2 23 4.01471 23 6.5C23 8.72977 21.3783 10.5807 19.25 10.9378C20.3145 11.7608 21 13.0503 21 14.5C21 16.8235 19.2391 18.7356 16.9791 18.9748C16.9821 19.0131 16.9849 19.0514 16.9872 19.0899C17.1472 19.0317 17.3199 19 17.5 19C18.3284 19 19 19.6716 19 20.5C19 21.3284 18.3284 22 17.5 22C17.1688 22 16.8625 21.8926 16.6144 21.7108C16.4482 22.1704 16.2316 22.6059 15.9714 23.0107C15.7178 25.2555 13.8126 27 11.5 27C10.2128 27 9.05188 26.4596 8.23169 25.5932C7.77289 25.4224 7.33862 25.2012 6.93555 24.9364C6.74866 25.552 6.17664 26 5.5 26C4.67157 26 4 25.3284 4 24.5C4 23.8233 4.44806 23.2513 5.06366 23.0645C4.47272 22.165 4.09894 21.1101 4.01703 19.9744C1.75885 19.7335 0 17.8221 0 15.5C0 13.0147 2.01471 11 4.5 11C5.02832 11 5.53546 11.0911 6.00641 11.2583C6.06506 10.1497 6.5249 9.14749 7.24353 8.39426C5.90204 7.61526 5 6.16299 5 4.5C5 2.01471 7.01471 0 9.5 0C11.9853 0 14 2.01471 14 4.5Z" fill="#C4C4C4"/>
<path d="M3 7.5C3 6.67157 2.32843 6 1.5 6C0.67157 6 0 6.67157 0 7.5C0 8.32843 0.67157 9 1.5 9C2.32843 9 3 8.32843 3 7.5Z" fill="#C4C4C4"/>
<path d="M26 13.5C26 12.6716 25.3284 12 24.5 12C23.6716 12 23 12.6716 23 13.5C23 14.3284 23.6716 15 24.5 15C25.3284 15 26 14.3284 26 13.5Z" fill="#C4C4C4"/>
</svg>
 : null }
    </div>
    </button>
  )
}

export default Gnome;