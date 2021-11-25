import React from 'react';
import { useSelector } from 'react-redux';
import { selectMilestones, selectSandboxMode } from '../../redux/gameSlice';

const Silo = () => {
    let isSandbox = useSelector(selectSandboxMode);
    let isSiloUnlocked = useSelector(selectMilestones).silo;

    return (
        <div className={`z-10 absolute bottom-0 left-4 focus:outline-none no-select transition duration-2000`}>
            { isSandbox || isSiloUnlocked ?
                <svg width="35" height="90" viewBox="0 0 35 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.5 16.1914H0.00436401V99.9978H25.5V16.1914Z" fill="#C62626"/>
                    <path d="M34.9873 16.1914H17.4991V99.9978H34.9873V16.1914Z" fill="#CC4242"/>
                    <path d="M17.4948 4.3869e-05C7.83328 4.3869e-05 0 7.24943 0 16.1827H34.9895C34.9851 7.24943 27.154 4.3869e-05 17.4948 4.3869e-05Z" fill="#93897F"/>
                    <path d="M26.2378 2.17154C23.5459 0.736726 20.5407 -0.00929961 17.4904 1.56034e-05C7.8311 1.56034e-05 -0.00436401 7.24941 -0.00436401 16.1827H17.4904C17.4904 10.1995 21.0112 4.9707 26.2378 2.17154Z" fill="#82786E"/>
                    <path d="M9.74678 16.1914H7.80267V99.9978H9.74678V16.1914Z" fill="#93897F"/>
                    <path d="M7.77861 16.1914H5.8345V99.9978H7.77861V16.1914Z" fill="#82786E"/>
                </svg> : null}
        </div>
    )
}

export default Silo;