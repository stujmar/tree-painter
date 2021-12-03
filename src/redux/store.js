import { configureStore } from '@reduxjs/toolkit';
import hoursReducer from './hourSlice';
import daysReducer from './daySlice';
import clocksReducer from './clockSlice';
import gamesReducer from './gameSlice';
import itemReducer from './itemSlice';
import skyReducer from './skySlice';
import apiReducer from './apiSlice';

export const store = configureStore({
    reducer: {
        game: gamesReducer,
        clock: clocksReducer,
        hour: hoursReducer,
        day: daysReducer,
        item: itemReducer,
        sky: skyReducer,
        api: apiReducer
    },
});

store.subscribe(()=>{
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
  })