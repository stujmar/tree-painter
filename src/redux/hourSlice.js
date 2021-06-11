import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 8
};

export const hourSlice = createSlice({
    name: 'hour',
    initialState,
    reducers: {
        incrementHour: (state) => {
            state.value += 1;
        },
        resetHour: (state) => {
            state.value = 1;
        },
        setHour: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { incrementHour, resetHour, setHour } = hourSlice.actions;

export const selectHour = (state) => state.hour.value;

export default hourSlice.reducer;