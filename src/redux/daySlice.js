import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 1
};

export const daySlice = createSlice({
    name: 'day',
    initialState,
    reducers: {
        incrementDay: (state) => {
            state.value += 1;
        },
        resetDay: (state) => {
            state.value = 1;
        },
        setDay: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { increment, reset } = daySlice.actions;

export const selectDay = (state) => state.day.value;

export default daySlice.reducer;