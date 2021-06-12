import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    mode: "PLANTING",
    trees: []
};

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setMode: (state, action) => {
            state.mode = action.payload;
        },
        addTree: (state, action) => {
            state.trees = state.trees.push(action.payload)
        }
    }
});

export const { setMode } = gameSlice.actions;

export const selectGame = (state) => state.game;
export const selectMode = (state) => state.game.mode;

export default gameSlice.reducer;