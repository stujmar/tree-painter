import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: []
};

export const apiSlice = createSlice({
    name: 'api',
    initialState,
    reducers: {
        incrementDay: (state) => {
            state.value += 1;
        },
        resetDay: (state) => {
            state.value = 1;
        },
        setDay: (state, action) => {
            // add api magic here
            state.value = action.payload;
        }
    }
});

export const { incrementDay, resetDay, setDay } = apiSlice.actions;

export const selectDay = (state) => state.day.value;

export default apiSlice.reducer;