import React, { useEffect, useState } from 'react';
import Sunset from './Sunset'
import { useSelector } from 'react-redux'
import { selectHour } from '../../redux/hourSlice';
import { selectSpeed } from '../../redux/clockSlice';
import GenerateStatic from './GenerateStatic';

const Sky = () => {
    const [sun, setSun] = useState({transform: "translateY(-170px)"})
    const [sky, setSky] = useState({opacity: 0})
    const [sunSet, setSunSet] = useState(0);
    const [stars, setStars] = useState(10);
    let hour = useSelector(selectHour);
    let speed = useSelector(selectSpeed);

    useEffect(() => {
       setSun(hour <= 6 || hour >= 18 ?  {transform: "translateY(150px)"} : {transform: "translateY(-170px)"});
       setSky(hour <= 6 || hour >= 20 ?  {opacity: 1.0} : {opacity: 0});
       setSunSet(hour <= 7 || hour >= 19 ? 1.0 : 0);
    },[hour])

    const clickSky = () => {
        if (stars > 0) {
            setStars(stars - 1);
        }
    }

    return (
        <button 
            onClick={clickSky}
            className="z-0 mx-auto lg:mr-auto h-full bg-blue-400 relative absolute w-full overflow-hidden focus:outline-none">
            {/* <div className="absolute w-screen transition" style={ hour <== 6 && hour >== 16 ? {transform: "translateY(200px)"} : {transform: "translateY(0px)"}}> */}
            {speed === 123456789 ? <GenerateStatic /> : <></>}
            <div className={`absolute w-screen transition ${speed === 1000 ? 'duration-slow' : 'duration-2000'}`} style={sun}>
                <div className="w-20 h-20 bg-yellow-200 shadow-glow rounded-full mx-auto">

                </div>
            </div>
            <div className={`bg-blue-900 w-full h-full absolute transition top-0 ${speed === 1000 ? 'duration-5000' : 'duration-2000'} z-20`} style={sky}></div>
            <Sunset sunSet={sunSet} />
        </button> 
    )   
}

export default Sky;
