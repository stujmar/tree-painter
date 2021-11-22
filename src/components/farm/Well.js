import React from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { updateResource, selectSandboxMode, selectMilestones } from '../../redux/gameSlice';

const Well = () => {

    let isWaterUnlocked = useSelector(selectMilestones).water;
    let isSandbox = useSelector(selectSandboxMode);
    const dispatch = useDispatch();

    const drawWater = () => {
        if(!isSandbox){
            dispatch(updateResource({type:'water', amount: 1} ));
        }
    };

    let wellStyle = {
        transform: isWaterUnlocked ? "translateY(0px)" : "translateY(75px)",
        "WebKitTransform": isWaterUnlocked ? "translateY(0px)" : "translateY(75px)"
    }

    return(
        <button 
            onClick={drawWater}
            style={wellStyle}
            className={`z-10 absolute bottom-0 right-12 z-20 focus:outline-none no-select transition duration-2000`}
            >
            <svg width="47" height="50" viewBox="0 0 47 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M36.0477 38.0697H11.7827V50H36.0477V38.0697Z" fill="#BF5C49"/>
                <path d="M37.4631 32.0034H10.3672V35.0365H37.4631V32.0034Z" fill="#BF5C49"/>
                <path d="M25.4459 12.725L14.8663 2.14745L14.8704 2.14543L12.725 0L12.7229 0.00202208L12.7189 0L10.5755 2.14543L10.5775 2.14745L0 12.725L2.14543 14.8704L12.7229 4.29288L23.3004 14.8704L25.4459 12.725Z" fill="#A0835C"/>
                <path d="M36.0477 35.0366H11.7827V38.0697H36.0477V35.0366Z" fill="#AA5044"/>
                <path d="M24.6229 22.4997V19.4666H23.2074V22.4997H20.2754V30.3858H27.5549V22.4997H24.6229Z" fill="#A0835C"/>
                <path d="M33.9507 0L31.874 2.07668H33.4189L44.7425 14.007H43.6688L44.5323 14.8704L46.6777 12.725L33.9507 0Z" fill="#A0835C"/>
                <path d="M33.0146 14.0069V16.4334H14.8158V6.3857L12.723 4.29285L11.7827 5.23311V32.0034H14.8158V19.4665H33.0146V32.0034H36.0477V14.0069H33.0146Z" fill="#C6B381"/>
                <path d="M14.8158 14.007H22.2591L22.344 13.914L14.8158 6.38574V14.007Z" fill="#AA5044"/>
                <path d="M11.7827 5.23315L3.00891 14.007H11.7827V5.23315Z" fill="#AA5044"/>
                <path d="M14.8704 2.14541L14.8663 2.14743L25.4459 12.7249L24.1639 14.0069H44.7426L33.4189 2.07666H14.8016L14.8704 2.14541Z" fill="#BF5C49"/>
                <path className="fill-current text-orange-700 hover:text-blue-400" d="M27.2839 22.7463H20.5443V24.5885H27.2839V22.7463Z"/>
            </svg>
        </button>
    )
}

export default Well;
