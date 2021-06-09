import actionTypes from './actionTypes';

export function updateHour(hour) {
    return {type: actionTypes.UPDATE_HOUR, hour} // Object shorthand syntax ;) 
}

export function updateDay(day) {
    return {type: actionTypes.UPDATE_DAY, day} // Object shorthand syntax ;) 
} 