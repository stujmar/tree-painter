import React from 'react'
import { useDispatch } from 'react-redux'
import { removeItemById } from '../../redux/itemSlice.js'
import { updateAcorns } from '../../redux/gameSlice.js'
import { getSeason } from '../../utils/getSeason.js'

const PlantedTreeInfo = ({ tree }) => {
    const dispatch = useDispatch()
    const season = getSeason(tree.birthday)
    const onDelete = (id) => {
        dispatch(updateAcorns(1));
        dispatch(removeItemById(id));
    }

    return (
        <>
            <div className={`p-1 m-1 rounded shadow w-32 relative border-2 bg-white hover:bg-gray-50 ${season.border}`}>
                <div className="flex flex-col"> {/* TOP ROW */}
                    <div className="ml-1 text-sm">{`x: ${tree.x} y: ${tree.y}`}</div>
                    <div className="ml-1 text-sm">{`age: ${tree.age}`}</div>
                </div>
                <div className="flex absolute bottom-1 right-0"> {/* BOTTOM ROW*/}
                    <button className="rounded px-1 mx-1" onClick={() => onDelete(tree.id)}>
                        <svg width="22" height="20" viewBox="0 0 28 24" className={`${season.canopyText} fill-current`} fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path d="M13.366 4.25085C13.366 4.25085 2.2988 17.4682 0.181642 20.1375C-0.512116 21.0111 1.01445 22.5033 1.01445 22.5033C1.60355 23.2245 2.52906 23.4811 3.57119 23.7859C3.57119 23.7859 6.25352 24.5482 5.8573 23.1879L5.67937 22.5048C5.45958 21.662 5.49696 20.2709 6.0128 19.5629C6.0128 19.5629 9.21993 13.7348 11.3386 11.5595C13.4572 9.38418 16.2009 7.67943 16.2009 7.67943L13.366 4.25085Z" />
                                <path d="M26.9998 7.4054L21.0953 14.2347C21.3136 14.9529 21.4347 15.4469 21.4347 15.4469L28.0015 8.1471L26.9998 7.4054Z" />
                                <path d="M20.8292 13.4084L26.4032 6.9632L17.2348 0.167628C16.858 -0.112345 16.3197 -0.0317243 16.0431 0.344993L13.8079 3.39685C13.8079 3.39685 18.3577 8.47007 19.5209 10.4196C20.0562 11.3138 20.5017 12.4454 20.8292 13.4084Z" />
                            </g>
                        </svg>
                    </button>
                </div>
            </div>
        </>
    )
}

export default PlantedTreeInfo;
