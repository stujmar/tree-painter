import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    mode: "PLANTING"
};

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setMode: (state, action) => {
            state.mode = action.payload;
        }
    }
});

export const { setMode } = gameSlice.actions;

export const selectGame = (state) => state.game;
export const selectMode = (state) => state.game.mode;

export default gameSlice.reducer;