import { configureStore } from '@reduxjs/toolkit';
import hoursReducer from './hourSlice';
import daysReducer from './daySlice';
import seasonsReducer from './seasonSlice';
import clocksReducer from './clockSlice';

export const store = configureStore({
    reducer: {
        clock: clocksReducer,
        hour: hoursReducer,
        day: daysReducer,
        season: seasonsReducer
    },
});