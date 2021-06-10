import { configureStore } from '@reduxjs/toolkit';
import hoursReducer from './hoursSlice';
import daysReducer from './daysSlice';
import seasonsReducer from './seasonsSlice';

export const store = configureStore({
    reducer: {
        hours: hoursReducer,
        days: daysReducer,
        seaons: seasonsReducer
    },
});