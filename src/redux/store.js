import { configureStore } from '@reduxjs/toolkit';
import hoursReducer from './hourSlice';
import daysReducer from './daySlice';
import seasonsReducer from './seasonSlice';

export const store = configureStore({
    reducer: {
        hour: hoursReducer,
        day: daysReducer,
        season: seasonsReducer
    },
});