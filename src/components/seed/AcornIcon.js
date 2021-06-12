import React from 'react';

const AcornIcon = ({amount, color}) => {
    return (
        <div className="flex w-max items-center">
            <svg width="22" height="22" viewBox="0 0 24 24" className={`${color} fill-current`} xmlns="http://www.w3.org/2000/svg">
                <path d="M4.53662 18.2047C10.8348 15.2841 16.8138 10.5154 20.4126 5.98596C20.9286 6.70242 22.9897 8.63844 23.8473 13.596C24.3424 16.4589 23.5967 19.1028 22.1486 21.5995C21.983 21.885 21.892 22.2569 21.9025 22.5841C21.9338 23.5053 21.4715 23.8498 20.5468 23.6105C20.1963 23.5197 19.7772 23.5284 19.4253 23.6192C17.4596 24.1208 15.488 24.105 13.5178 23.6999C10.0294 22.9834 7.06156 21.3876 4.73647 18.7424C4.51425 18.4872 4.75287 18.4872 4.53662 18.2047Z" />
                <path d="M3.51051 3.42429C2.68577 2.67468 2.77376 2.49737 1.58661 2.55215C1.33158 2.56368 1.11533 2.36907 1.09743 2.12256C1.07655 1.82127 1.17498 1.02409 1.26148 0.731451C1.47326 0.0178771 1.96691 -0.074383 2.25774 0.0423837C3.59851 0.578646 4.12795 0.708387 5.04069 1.70162C5.49109 2.19176 5.57312 2.27248 6.15924 1.94669C9.59244 0.0409421 13.1718 -0.367021 16.8078 1.33547C17.7966 1.79821 18.4901 2.26239 19.3029 3.00912C19.8592 3.52232 19.8488 4.41032 19.6087 4.76783C19.1076 5.51312 18.7332 5.79278 18.1218 6.44581C14.3261 10.5024 9.93695 13.8454 4.94375 16.4272C4.22937 16.7962 3.66562 17.184 2.89456 17.4464C2.41583 17.6093 1.84611 17.2619 1.57617 16.8308C-0.699708 13.2082 -0.399936 9.61149 1.76259 6.08686C2.30844 5.19742 2.85728 4.81973 3.54332 4.04417C3.70589 3.86253 3.69097 3.58863 3.51051 3.42429Z" />
            </svg>
            {/* <svg className="group" id="Layer_1" width="20" x="0px" y="0px" viewBox="0 0 21.03 28.67">
                <g>
                    <path className={`${ amount > 0 ? "text-acorn-top" : ""} fill-current`} d="M19.67,13.46c0.24,3.33-0.23,6.52-2.01,9.4c-1.22,1.98-2.94,3.31-5.26,3.8c-0.22,0.05-0.35,0.12-0.46,0.37
                        c-0.25,0.57-0.77,0.79-1.37,0.79c-0.6-0.01-1.09-0.23-1.37-0.8c-0.08-0.16-0.12-0.31-0.34-0.36c-3.18-0.66-5.2-2.68-6.42-5.58
                        c-0.99-2.35-1.27-4.81-1.02-7.35c1.11,0.74,2.35,0.84,3.62,0.74c1.17-0.09,2.32-0.31,3.48-0.5c1.2-0.2,2.41-0.3,3.63-0.14
                        c1.23,0.16,2.46,0.32,3.7,0.41C17.18,14.33,18.52,14.34,19.67,13.46z"/>
                    <path className={`${ amount > 0 ? "text-acorn-bottom" : ""} fill-current`} d="M19.67,13.46c-1.15,0.88-2.49,0.87-3.82,0.78c-1.24-0.09-2.47-0.25-3.7-0.41c-1.22-0.16-2.42-0.05-3.63,0.14
                        c-1.16,0.19-2.31,0.41-3.48,0.5c-1.27,0.1-2.51,0.01-3.62-0.74c-0.03-0.16-0.17-0.25-0.26-0.36c-0.35-0.47-0.59-0.98-0.63-1.57
                        c-0.18-2.9,1.1-5.01,3.54-6.47c1.49-0.89,3.14-1.31,4.85-1.49C9.18,3.8,9.26,3.71,9.26,3.49C8.98,2.72,8.77,2.27,8.67,1.53
                        C8.62,1.2,8.8,1,9.11,0.96c0.79-0.1,1.69-0.26,2.32,0.23c0.33,0.25,0.28,0.57,0.19,1.02c-0.09,0.48-0.16,0.95-0.51,1.51
                        c0.65,0.08,1.29,0.15,1.92,0.25c1.43,0.23,2.79,0.67,4.03,1.41c1.66,0.98,2.91,2.31,3.33,4.27c0.16,0.77,0.16,1.55,0.03,2.32
                        C20.33,12.55,20.04,13.02,19.67,13.46z"/>
                </g>  
                <g>
                    <path className={`${ amount > 0 ? "opacity-0" : "opacity-100"} text-white fill-current`} d="M12.26,16.87c0,0.27-0.01,0.49-0.03,0.65c-0.02,0.16-0.05,0.28-0.1,0.36c-0.05,0.08-0.13,0.13-0.23,0.15
                        c-0.1,0.02-0.24,0.03-0.4,0.03H9.06c-0.15,0-0.27-0.05-0.36-0.16c-0.08-0.1-0.13-0.22-0.13-0.36c0-0.37,0.01-0.69,0.02-0.97
                        c0.01-0.28,0.03-0.52,0.05-0.73c0.02-0.21,0.05-0.38,0.08-0.52s0.08-0.25,0.14-0.35c0.19-0.31,0.42-0.58,0.66-0.78
                        c0.25-0.21,0.5-0.39,0.76-0.55c0.26-0.16,0.51-0.3,0.76-0.43c0.25-0.13,0.47-0.28,0.66-0.44c0.19-0.16,0.35-0.35,0.46-0.57
                        c0.12-0.22,0.18-0.49,0.18-0.82c0-0.22-0.05-0.44-0.15-0.65c-0.1-0.21-0.23-0.39-0.39-0.55c-0.16-0.16-0.36-0.29-0.57-0.38
                        c-0.22-0.09-0.45-0.14-0.68-0.14c-0.24,0-0.46,0.05-0.68,0.15c-0.22,0.1-0.41,0.23-0.57,0.4c-0.17,0.17-0.3,0.36-0.4,0.57
                        c-0.1,0.22-0.15,0.44-0.15,0.67v0.24c0,0.12-0.04,0.2-0.13,0.26c-0.08,0.05-0.19,0.09-0.31,0.1c-0.13,0.01-0.26,0.02-0.4,0.01
                        c-0.14-0.01-0.27-0.01-0.38-0.01H5.72c-0.17,0-0.3-0.05-0.36-0.14c-0.07-0.09-0.1-0.19-0.1-0.29v-0.34c0-0.73,0.14-1.4,0.43-2.01
                        c0.29-0.61,0.68-1.14,1.16-1.58S7.9,6.89,8.54,6.64c0.64-0.24,1.31-0.37,2-0.37c0.72,0,1.39,0.13,2.03,0.39
                        c0.63,0.26,1.19,0.62,1.67,1.07c0.48,0.46,0.85,1,1.13,1.62c0.28,0.62,0.41,1.3,0.41,2.04c0,0.5-0.05,0.94-0.15,1.31
                        c-0.1,0.37-0.23,0.69-0.4,0.97c-0.16,0.28-0.35,0.51-0.56,0.71c-0.21,0.2-0.43,0.38-0.65,0.53c-0.22,0.16-0.43,0.3-0.64,0.43
                        c-0.21,0.13-0.4,0.27-0.56,0.42c-0.16,0.15-0.3,0.31-0.4,0.48C12.31,16.42,12.26,16.63,12.26,16.87z M8.6,20.71
                        c0-0.14,0.04-0.25,0.11-0.33c0.08-0.08,0.19-0.13,0.34-0.13h2.75c0.12,0,0.23,0.04,0.33,0.13c0.1,0.08,0.15,0.19,0.15,0.33v2.53
                        c0,0.13-0.04,0.24-0.12,0.33c-0.08,0.1-0.2,0.15-0.36,0.15H9.06c-0.31,0-0.46-0.16-0.46-0.48V20.71z"/>
                </g>
             </svg> */}
             <div className={`ml-1 ${color} text-md font-medium`}>{`: ${amount}`}</div>
        </div>
    )
}

export default AcornIcon;
