import React, { useEffect, useState } from 'react';
import Sunset from './Sunset';
import Star from './Star';
import { selectHour } from '../../redux/hourSlice';
import { selectSpeed } from '../../redux/clockSlice';
import { addStar, selectStars } from '../../redux/skySlice';

import GenerateStatic from './GenerateStatic';

import { useDispatch, useSelector } from 'react-redux';
import { selectResources, updateResource, selectMode } from '../../redux/gameSlice';

const Sky = () => {

    const dispatch = useDispatch();    
    const [sun, setSun] = useState({transform: "translateY(-170px)"})
    const [sky, setSky] = useState({opacity: 0})
    const [mouse, setMouse] = useState({x: 0, y: 0})
    const [drawStars, setDrawStars] = useState([]);
    const [sunSet, setSunSet] = useState(0);
    
    let mode = useSelector(selectMode);
    let hour = useSelector(selectHour);
    let speed = useSelector(selectSpeed);
    let stars = useSelector(selectStars);
    let starResources = useSelector(selectResources).stars;

    useEffect(() => {
        setDrawStars(stars.map(star => {
            return <Star key={star.id} starData={star} />
        }));
    }, [stars])

    useEffect(() => {
       setSun(hour <= 6 || hour >= 18 ?  {transform: "translateY(150px)"} : {transform: "translateY(-170px)"});
       setSky(hour <= 6 || hour >= 20 ?  {opacity: 1.0} : {opacity: 0});
       setSunSet(hour <= 7 || hour >= 19 ? 1.0 : 0);
    },[hour])

    const clickSky = () => {
        if (starResources > 0 && (hour <= 6 || hour >= 20)) {
            dispatch(addStar({x: mouse.xRatio, y: mouse.yRatio, id: (Math.random() * 10000).toFixed()}));
            dispatch(updateResource({type: 'stars', amount: -1}));
        }
    }

    const handleMouseMove = (e) =>{
        setMouse({
            x: e.nativeEvent.offsetX, 
            y: e.nativeEvent.offsetY,
            xRatio: (e.nativeEvent.offsetX / window.innerWidth * 100).toFixed(),
            yRatio: (e.nativeEvent.offsetY).toFixed()
            // xRatio: parseInt((mouse.x/grass.clientWidth* 100).toFixed()),
            // yRatio: parseInt((mouse.y/grass.clientHeight * 100).toFixed()),
        });
    }

    return (
        <button 
            onClick={clickSky}
            onMouseMove={(e) => handleMouseMove(e)}
            className="z-0 mx-auto lg:mr-auto h-full bg-blue-400 relative absolute w-full overflow-hidden focus:outline-none">
            {/* <div className="absolute w-screen transition" style={ hour <== 6 && hour >== 16 ? {transform: "translateY(200px)"} : {transform: "translateY(0px)"}}> */}
            <GenerateStatic isPaused= {speed === 123456789 ? true : false} />
            <div className={`absolute w-screen transition ${speed === 1000 ? 'duration-slow' : 'duration-2000'}`} style={sun}>
                <div className="w-20 h-20 bg-yellow-200 shadow-glow rounded-full mx-auto">

                </div>
            </div>
            <div className={`bg-blue-900 w-full h-full absolute transition top-0 ${speed === 1000 ? 'duration-5000' : 'duration-2000'} z-20`} style={sky}></div>
            <Sunset sunSet={sunSet} />
            {drawStars}
        </button> 
    )   
}

export default Sky;
