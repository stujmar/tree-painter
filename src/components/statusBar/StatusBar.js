import React from 'react';
import AcornIcon from './AcornIcon';
import StarIcon from './StarIcon';
import WaterIcon from './WaterIcon';
import WoodIcon from './WoodIcon';
import StoneIcon from './StoneIcon';
import {useSelector} from 'react-redux';
import {selectMilestones, selectResources, selectSandboxMode } from '../../redux/gameSlice';
import {selectDay} from '../../redux/daySlice';
import {getSeason} from '../../utils/getSeason';
import {useDispatch} from 'react-redux';
import {updateResource} from '../../redux/gameSlice';

const StatusBar = () => {

    let day = useSelector(selectDay);
    let isSandbox = useSelector(selectSandboxMode);
    let isWaterUnlocked = useSelector(selectMilestones).water;
    let isWoodUnlocked = useSelector(selectMilestones).wood;
    let isStarsUnlocked = useSelector(selectMilestones).stars;
    let isStoneUnlocked = useSelector(selectMilestones).stone;
    let { acorns, water, stars, wood, stone } = useSelector(selectResources);
    let dispatch = useDispatch();

    const addResource = (resourceType) => {
        if (!isSandbox) {
            dispatch(updateResource({type: resourceType, amount: 1}));
        }
    }

    return (
        <div className={`w-full h-8 comfortaa ${getSeason(day).dark}`}>
            <div className="flex pl-3 mx-auto justify-center sm:justify-start items-top py-1 justify-start gap-3">
                <button className="focus:outline-none" onClick={() => addResource('acorns')}><AcornIcon amount={acorns} color={getSeason(day).text} /></button>
                {isSandbox || isWaterUnlocked ? <button className="focus:outline-none" onClick={() => addResource('water')}><WaterIcon amount={water} color={getSeason(day).text}/></button> : null}
                {isSandbox || isStarsUnlocked ? <button className="focus:outline-none" onClick={() => addResource('stars')}><StarIcon amount={stars} color={getSeason(day).text}/></button> : null}
                {isSandbox || isWoodUnlocked ? <button className="focus:outline-none" onClick={() => addResource('wood')}><WoodIcon amount={wood} color={getSeason(day).text} /></button> : null}
                {isSandbox || isStoneUnlocked ? <button className="focus:outline-none" onClick={() => addResource('stone')}><StoneIcon amount={stone} color={getSeason(day).text} /></button> : null}
            </div>
        </div>
    )
}

export default StatusBar;
