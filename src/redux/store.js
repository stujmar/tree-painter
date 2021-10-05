import { configureStore } from '@reduxjs/toolkit';
import hoursReducer from './hourSlice';
import daysReducer from './daySlice';
import clocksReducer from './clockSlice';
import gamesReducer from './gameSlice';
import treeReducer from './treeSlice';
import skyReducer from './skySlice';

export const store = configureStore({
    reducer: {
        game: gamesReducer,
        clock: clocksReducer,
        hour: hoursReducer,
        day: daysReducer,
        tree: treeReducer,
        sky: skyReducer
    },
});