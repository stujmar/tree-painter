import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    speed: 1000
};

export const clockSlice = createSlice({
    name: 'clock',
    initialState,
    reducers: {
        setSpeed: (state, action) => {
            state.speed = action.payload;
        }
    }
});

export const { setSpeed } = clockSlice.actions;

export const selectClock = (state) => state.clock;
export const selectSpeed = (state) => state.clock.speed;

export default clockSlice.reducer;