import React from 'react';
import Mural from './Mural';
import { useDispatch } from 'react-redux';
import { setMode, toggleToolTip } from '../../redux/gameSlice';

const MessageModal = () => {
    const dispatch = useDispatch();
    
    const startTour = () => {
        dispatch(toggleToolTip(true));
        dispatch(setMode('PLANTING'))
    }

    return (
        <div className="absolute z-20 mt-10 h-96 flex flex-col justify-end w-full">
            <div className="sm:w-11/12 md:max-w-lg bg-green-100 font-bold text-green-800 comfortaa p-4 text-center mx-2 rounded-lg text-xl shadow sm:mx-auto">
                <div className="w-full rounded-xl overflow-hidden mb-4">
                    <Mural />
                </div>
                <span className="">Welcome to Treelapse, the entirely accurate simulation of a forest growing. Click the acorn button in the bottom left corner of the screen to start planting, or take an</span>
            <button 
                type="button"
                onClick={startTour}
                className="mt-2 bg-green-700 hover:bg-green-600 mx-2 focus:outline-none inline text-green-50 px-2 rounded shadow">INTRO TOUR</button>
            </div>
        </div>
    )
}

export default MessageModal;