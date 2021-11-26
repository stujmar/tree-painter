import React from 'react';
import { useSelector } from 'react-redux';
import { selectMilestones, selectSandboxMode } from '../../redux/gameSlice';
import { starsColorSVG } from '../gameBoard/store/storeSvgs';

const Observatory = () => {
    let isSandbox = useSelector(selectSandboxMode);
    let isStarsUnlocked = useSelector(selectMilestones).stars;

    return (
        <div className={`z-10 absolute bottom-0 right-4 focus:outline-none no-select transition duration-2000`}>
            { isSandbox || isStarsUnlocked ?
                starsColorSVG : null}
        </div>
    )
}

export default Observatory;