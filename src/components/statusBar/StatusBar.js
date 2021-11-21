import React from 'react';
import AcornIcon from './AcornIcon';
import StarIcon from './StarIcon';
import WaterIcon from './WaterIcon';
import {useSelector} from 'react-redux';
import {selectResources, selectSandboxMode } from '../../redux/gameSlice';
import {selectDay} from '../../redux/daySlice';
import {getSeason} from '../../utils/getSeason';
import {useDispatch} from 'react-redux';
import {updateResource} from '../../redux/gameSlice';
import { getMilestones } from '../../utils/settings';
import { selectTrees } from '../../redux/treeSlice';

const StatusBar = () => {

    let day = useSelector(selectDay);
    let isSandbox = useSelector(selectSandboxMode);
    let treeCount = useSelector(selectTrees).length;
    let { seeds, water, stars} = useSelector(selectResources);
    let dispatch = useDispatch();

    const addResource = (resourceType) => {
        if (!isSandbox) {
            dispatch(updateResource({type: resourceType, amount: 1}));
        }
    }

    return (
        <div className={`w-full h-8 comfortaa ${getSeason(day).dark}`}>
            <div className="flex pl-3 mx-auto justify-start items-top py-1 justify-start gap-3">
                <button className="focus:outline-none" onClick={() => addResource('seeds')}><AcornIcon amount={seeds} color={getSeason(day).text} /></button>
                {isSandbox || getMilestones("water", treeCount) ? <button className="focus:outline-none" onClick={() => addResource('water')}><WaterIcon amount={water} color={getSeason(day).text}/></button> : null}
                {isSandbox || getMilestones("stars", treeCount) ? <button className="focus:outline-none" onClick={() => addResource('stars')}><StarIcon amount={stars} color={getSeason(day).text}/></button> : null}
            </div>
        </div>
    )
}

export default StatusBar;
