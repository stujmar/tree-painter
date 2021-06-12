import { configureStore } from '@reduxjs/toolkit';
import hoursReducer from './hourSlice';
import daysReducer from './daySlice';
import seasonsReducer from './seasonSlice';
import clocksReducer from './clockSlice';
import gamesReducer from './gameSlice';

export const store = configureStore({
    reducer: {
        game: gamesReducer,
        clock: clocksReducer,
        hour: hoursReducer,
        day: daysReducer,
        season: seasonsReducer
    },
});