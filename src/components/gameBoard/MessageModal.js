import React from 'react';
import Mural from './Mural';

const MessageModal = () => {
    return (
        <div className="absolute z-20 h-96 flex flex-col justify-end w-full">
            <div className="sm:w-11/12 md:max-w-lg bg-green-100 font-bold text-green-800 comfortaa p-4 text-center mx-2 rounded-lg text-xl sm:text-2xl shadow sm:mx-auto">
                <div className="w-full rounded-xl overflow-hidden">
                    <Mural />
                </div>
                <span className="block mt-2">Welcome to Treelapse, the entirely accurate simulation of a forest growing. Click the acorn button in the bottom left corner of the screen to start planting!</span>
            </div>
        </div>
    )
}

export default MessageModal;