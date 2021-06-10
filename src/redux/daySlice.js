import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0
};

export const daySlice = createSlice({
    name: 'day',
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

export const { increment, reset } = daySlice.actions;

export const selectDay = (state) => state.day.value;

export default daySlice.reducer;