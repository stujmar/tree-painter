import React from 'react';
import Mural from './Mural';

const MessageModal = () => {
    return (
        <div className="absolute z-20 w-full">
            <div className="sm:w-11/12 md:max-w-lg bg-green-100 font-bold text-green-800 comfortaa p-4 text-center mt-6 mx-2 rounded-lg text-xl sm:text-2xl shadow sm:mx-auto">
                <div className="w-full rounded-xl overflow-hidden">
                    <Mural />
                </div>
                <span className="block mt-2">Welcome to Treelapse, the entirely accurate simulation of a forest growing. Click the acorn button in the bottom left corner of the screen to start planting!</span>
                {/* <div className="mx-auto w-min bg-green-600 p-2 mt-2 rounded-lg">
                    <svg width="22" height="22" viewBox="0 0 24 24" className="text-white fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M4.53662 18.2047C10.8348 15.2841 16.8138 10.5154 20.4126 5.98596C20.9286 6.70242 22.9897 8.63844 23.8473 13.596C24.3424 16.4589 23.5967 19.1028 22.1486 21.5995C21.983 21.885 21.892 22.2569 21.9025 22.5841C21.9338 23.5053 21.4715 23.8498 20.5468 23.6105C20.1963 23.5197 19.7772 23.5284 19.4253 23.6192C17.4596 24.1208 15.488 24.105 13.5178 23.6999C10.0294 22.9834 7.06156 21.3876 4.73647 18.7424C4.51425 18.4872 4.75287 18.4872 4.53662 18.2047Z"></path><path d="M3.51051 3.42429C2.68577 2.67468 2.77376 2.49737 1.58661 2.55215C1.33158 2.56368 1.11533 2.36907 1.09743 2.12256C1.07655 1.82127 1.17498 1.02409 1.26148 0.731451C1.47326 0.0178771 1.96691 -0.074383 2.25774 0.0423837C3.59851 0.578646 4.12795 0.708387 5.04069 1.70162C5.49109 2.19176 5.57312 2.27248 6.15924 1.94669C9.59244 0.0409421 13.1718 -0.367021 16.8078 1.33547C17.7966 1.79821 18.4901 2.26239 19.3029 3.00912C19.8592 3.52232 19.8488 4.41032 19.6087 4.76783C19.1076 5.51312 18.7332 5.79278 18.1218 6.44581C14.3261 10.5024 9.93695 13.8454 4.94375 16.4272C4.22937 16.7962 3.66562 17.184 2.89456 17.4464C2.41583 17.6093 1.84611 17.2619 1.57617 16.8308C-0.699708 13.2082 -0.399936 9.61149 1.76259 6.08686C2.30844 5.19742 2.85728 4.81973 3.54332 4.04417C3.70589 3.86253 3.69097 3.58863 3.51051 3.42429Z"></path></svg>
                </div> */}
            </div>
        </div>
    )
}

export default MessageModal;