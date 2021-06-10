import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0
};

export const hourSlice = createSlice({
    name: 'hour',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        reset: (state) => {
            state.value = 0;
        }
    }
});

export const [ increment, reset ] = hourSlice.actions;

export const selectHour = (state) => state.hour.value;

export default hourSlice.reducer;