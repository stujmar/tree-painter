import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: "mySeason"
};

export const seasonSlice = createSlice({
    name: 'season',
    initialState,
    reducers: {
        setSeason: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { setSeason } = seasonSlice.actions;

export const selectSeason = (state) => state.season.value;

export default seasonSlice.reducer;