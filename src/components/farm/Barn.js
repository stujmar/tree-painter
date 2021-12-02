import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectMilestones, selectResources, selectSandboxMode } from '../../redux/gameSlice';

const Barn = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [woodPile, setWoodPile] = useState([]);
    let wood = useSelector(selectResources).wood;
    let isSandbox = useSelector(selectSandboxMode);
    let isBarnUnlocked = useSelector(selectMilestones).wood;
    let barnStyle = {
        transform: isBarnUnlocked || isSandbox ? "translateY(0px)" : "translateY(75px)",
        "WebKitTransform": isBarnUnlocked || isSandbox ? "translateY(0px)" : "translateY(75px)",
        width: "150px",
        height: "72px"
    }

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        wood = wood <= 50 ? wood : 50;
        let woodArray = Array.from({length: wood}, (v, k) => k);
        setWoodPile(woodArray.map(_pile => <div key={_pile} className="w-3 h-1 bg-orange-500 border-t border-l-2 border-orange-700 relative">
            <div className="h-1 w-1 rounded-full bg-orange-500 border border-orange-600 absolute right-0"></div>
        </div>))
    },[wood]);

    useEffect(() => {
        setIsOpen(false);
    },[isBarnUnlocked])

    const handleBarnClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="absolute bottom-0 left-8 z-10">
            <button 
                type="button"
                aria-label="Barn"
                onClick={handleBarnClick}
                className={`block relative focus:outline-none transition duration-2000`}
                style={barnStyle}>  
                <svg className={`absolute z-30 bottom-0 ${isOpen ? " hidden": " block"}`} width="150" height="72" viewBox="0 0 150 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M126.648 71.9848H121.559C121.559 71.9848 121.741 66.1687 125.286 65.3953C127.9 64.8261 130.124 65.6755 130.373 65.8776C130.373 65.8776 130.373 60.181 135.734 59.7943C141.095 59.4076 142.019 63.5812 142.019 63.5812C142.019 63.5812 144.226 62.2298 146.314 64.3546C148.402 66.4794 147.395 68.602 147.395 68.602C148.038 68.9533 148.601 69.4356 149.048 70.0181C149.494 70.6006 149.815 71.2705 149.989 71.9848H126.648Z" fill="#498E1C"/>
                    <path d="M83.5738 26.7838H11.8014V71.9435H83.5738V26.7838Z" fill="#C62626"/>
                    <path d="M139.494 71.9435H82.521V26.7838L92.3184 12.7988L111.007 2.06396L128.797 12.7988L139.494 26.7838V71.9435Z" fill="#CC4242"/>
                    <path d="M131.052 39.5305H128.797V71.8892H131.052V39.5305Z" fill="white"/>
                    <path d="M96.0388 39.5305H93.7841V71.8892H96.0388V39.5305Z" fill="white"/>
                    <path d="M131.052 41.7965V39.5305H93.7841V41.7965H131.052Z" fill="white"/>
                    <path d="M96.0388 71.8892V68.9844L128.445 40.6624L129.923 42.3744L96.0388 71.8892Z" fill="white"/>
                    <path d="M128.732 71.3222V68.4174L96.3285 40.0975L94.8476 41.8074L128.732 71.3222Z" fill="white"/>
                    <path d="M74.6628 39.5305H72.408V53.0028H74.6628V39.5305Z" fill="white"/>
                    <path d="M74.6649 41.7943V39.5283H57.8243V41.7943H74.6649Z" fill="white"/>
                    <path d="M60.0791 39.5305H57.8243V53.0028H60.0791V39.5305Z" fill="white"/>
                    <path d="M74.6649 53.0006V50.7346H57.8243V53.0006H74.6649Z" fill="white"/>
                    <path d="M39.3408 39.3002H37.086V52.7725H39.3408V39.3002Z" fill="white"/>
                    <path d="M39.3429 41.5662V39.3002H22.5024V41.5662H39.3429Z" fill="white"/>
                    <path d="M24.755 39.3002H22.5002V52.7725H24.755V39.3002Z" fill="white"/>
                    <path d="M39.3408 52.7703V50.5043H22.5002V52.7703H39.3408Z" fill="white"/>
                    <path d="M86.9376 71.9978H92.3162C92.3162 71.9978 92.126 66.1796 88.3774 65.4083C84.6288 64.6371 82.9966 65.8907 82.9966 65.8907C82.9966 65.8907 82.9966 60.1941 77.3283 59.8074C71.66 59.4206 71.6838 64.7327 71.6838 64.7327C71.6838 64.7327 69.3512 63.3791 67.144 65.5039C64.9367 67.6287 65.9917 69.7535 65.9917 69.7535C65.9917 69.7535 62.8203 69.608 62.2431 71.9978H86.9376Z" fill="#498E1C"/>
                    <path d="M142.046 30.0799L143.802 28.6582L129.528 10.8541L127.772 12.2758L142.046 30.0799Z" fill="#4C3109"/>
                    <path d="M108.69 1.36657L111.053 0L129.521 10.8369L128.393 12.7988L108.69 1.36657Z" fill="#4C3109"/>
                    <path d="M111.053 0H42.3695L23.7476 9.82667L23.7433 9.8245L9.47093 27.6311L11.1528 29.6365L79.9095 30.0688L92.3529 11.4214L111.053 0Z" fill="#664922"/>
                    <path d="M94.173 12.2678L92.4173 10.8461L78.1428 28.6502L79.8986 30.072L94.173 12.2678Z" fill="#4C3109"/>
                    <path d="M113.253 1.37743L111.053 0L92.4221 10.8456L93.5506 12.8097L113.253 1.37743Z" fill="#4C3109"/>
                    <path d="M78.1519 28.6457L9.47093 27.6311L11.1528 29.6364L79.9095 30.0688L78.1519 28.6457Z" fill="#4C3109"/>
                    <path d="M121.401 16.5965H119.147V30.0688H121.401V16.5965Z" fill="white"/>
                    <path d="M121.403 18.8604V16.5943H104.563V18.8604H121.403Z" fill="white"/>
                    <path d="M106.816 16.5965H104.561V30.0688H106.816V16.5965Z" fill="white"/>
                    <path d="M121.401 30.0666V27.8006H104.561V30.0666H121.401Z" fill="white"/>
                    <path d="M24.6923 71.9978H30.0731C30.0731 71.9978 29.8807 66.1796 26.1342 65.4083C22.3878 64.6371 20.7535 65.8907 20.7535 65.8907C20.7535 65.8907 20.7535 60.1941 15.0852 59.8074C9.41689 59.4207 8.43758 63.5942 8.43758 63.5942C8.43758 63.5942 6.10714 62.2429 3.89776 64.3677C1.68838 66.4925 2.74551 68.6151 2.74551 68.6151C2.74551 68.6151 0.583694 69.608 0.00216484 71.9978H24.6923Z" fill="#498E1C"/>
                    <path d="M142.038 30.0688H139.494V26.7838L142.038 30.0688Z" fill="#664922"/>
                </svg>
                <div className="left-6 z-20 absolute bottom-0">
                    <div className="grid grid-cols-5 row-end-auto transform rotate-180">
                        {woodPile}
                    </div>
                </div>
                <svg className="absolute z-10 bottom-0" width="150" height="72" viewBox="0 0 150 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.10223 72.0022C3.10223 72.0022 3.1671 71.257 4.03183 70.5161C4.58716 70.0589 5.24807 69.7496 5.95366 69.6167L4.69549 67.6744C4.61767 67.4332 4.52686 66.7706 5.38943 65.9363C5.62981 65.6572 5.95305 65.463 6.3115 65.3825C6.66996 65.3019 7.04469 65.3392 7.38048 65.4888L10.0568 67.2268L10.5389 64.1026C10.6124 63.8702 11.0383 62.7469 12.5126 62.2299L13.9632 61.7215V27.9223H12.0176L25.1441 11.5474L42.9078 2.17261H110.471L128.086 12.5099L140.421 27.8962H137.334L137.444 71.987L3.10223 72.0022Z" fill="#B27F2D"/>
                    <path d="M147.406 68.6042C147.406 68.6042 148.405 66.4793 146.314 64.3545C144.224 62.2297 142.019 63.5833 142.019 63.5833C141.829 62.919 141.507 62.3002 141.073 61.7643C140.638 61.2285 140.1 60.7867 139.491 60.4656V30.0688H142.038L143.796 28.6457L129.528 10.8412L111.059 0.00427246H42.3695L23.7454 9.83312L9.47742 27.6376L11.1615 29.6429H11.81V60.1897C9.01912 61.1695 8.44623 63.5985 8.44623 63.5985C8.44623 63.5985 6.11362 62.2471 3.90641 64.3719C1.69919 66.4967 2.75417 68.6216 2.75417 68.6216C2.75417 68.6216 0.592333 69.6144 0.0108032 72.0043H30.0839C30.0839 72.0043 30.0839 71.9826 30.0839 71.9456H62.2712C62.2712 71.9652 62.2604 71.9826 62.2561 72H92.3292C92.3292 72 92.3292 71.9804 92.3292 71.9456H121.576C121.577 71.9601 121.577 71.9746 121.576 71.9891H150.017C149.841 71.2729 149.518 70.6016 149.068 70.0186C148.619 69.4356 148.052 68.9538 147.406 68.6042V68.6042Z" fill="#664922"/>
                    <path d="M3.10223 72.0022C3.10223 72.0022 3.1671 71.257 4.03183 70.5161C4.58716 70.0589 5.24807 69.7496 5.95366 69.6167L4.69549 67.6744C4.61767 67.4332 4.52686 66.7706 5.38943 65.9363C5.62981 65.6572 5.95305 65.463 6.3115 65.3825C6.66996 65.3019 7.04469 65.3392 7.38048 65.4888L10.0568 67.2268L10.5389 64.1026C10.6124 63.8702 11.0383 62.7469 12.5126 62.2299L13.9632 61.7215V27.9223H12.0176L25.1441 11.5474L42.9078 2.17261H110.471L128.086 12.5099L140.421 27.8962H137.334L137.444 71.987L3.10223 72.0022Z" fill="#B27F2D"/>
                    <path d="M13.8745 72L13.8745 36.076H11.8014L11.8014 72H13.8745Z" fill="#664922"/>
                    <path d="M8.43756 63.5964C8.43756 63.5964 6.10496 62.245 3.89774 64.3698C1.69052 66.4946 2.74547 68.6194 2.74547 68.6194C2.74547 68.6194 0.583666 69.6123 0.00213623 72.0022H11.8035V60.1876C9.01043 61.1674 8.43756 63.5964 8.43756 63.5964Z" fill="#498E1C"/>
                    <path d="M139.491 72.0022L150 71.987C149.826 71.2727 149.505 70.6028 149.058 70.0203C148.612 69.4378 148.049 68.9555 147.406 68.6042C147.406 68.6042 148.405 66.4794 146.314 64.3546C144.224 62.2298 142.019 63.5833 142.019 63.5833C141.829 62.919 141.507 62.3002 141.073 61.7644C140.638 61.2285 140.1 60.7867 139.491 60.4656V72.0022Z" fill="#498E1C"/>
                    <path d="M70.9033 72V29.4778H68.8301V72H70.9033Z" fill="#664922"/>
                    <path d="M138.519 27.9331H13.5265V30.0166H138.519V27.9331Z" fill="#664922"/>
                    <path d="M61.655 11.5517H22.9347V13.1399H61.655V11.5517Z" fill="#664922"/>
                    <path d="M41.7469 0.958111V28.6284H43.3272V0.958111H41.7469Z" fill="#664922"/>
                    <path d="M42.2571 1.98796L43.0461 0.610535L61.5254 11.5235L72.1507 28.1417L70.9034 29.1151L60.3277 12.662L42.2571 1.98796Z" fill="#664922"/>
                    <path d="M59.6576 12.3447V28.9738H61.2378V12.3447H59.6576Z" fill="#664922"/>
                    <path d="M22.9348 12.3447V28.9738H24.5151V12.3447H22.9348Z" fill="#664922"/>
                    <path d="M59.6164 12.2854L71.0741 29.3707L140.138 29.4554V27.8999H133.503L120.232 12.2854H129.281V10.7276H118.403L101.143 0.223075L100.358 1.52664L115.491 10.7298H106.474L89.1966 0.223075L88.414 1.52664L103.536 10.7298H94.519L77.259 0.22525L76.4765 1.52881L91.6092 10.732H82.5922L65.3323 0.227424L64.5497 1.53099L79.6824 10.7341H70.6655L53.4077 0.229599L52.6229 1.53316L67.7557 10.7363H60.0769L42.6634 0.138367L41.7684 1.62657L59.6164 12.2854ZM121.559 27.8999L108.288 12.2854H118.04L118.446 12.5331L131.506 27.8999H121.559ZM109.621 27.8999L96.3501 12.2854H106.102L106.508 12.5331L119.568 27.8999H109.621ZM97.6839 27.8999L84.4125 12.2854H94.1688L94.5752 12.5331L107.635 27.8999H97.6839ZM85.7463 27.8999L72.4749 12.2854H82.2269L82.6333 12.5331L95.6929 27.8999H85.7463ZM61.8085 12.2854H70.2893L70.6958 12.5331L83.7575 27.8999L72.1507 27.8151L61.8085 12.2854Z" fill="#664922"/>
                </svg>

            </button>
        </div>
    )
}

export default Barn;