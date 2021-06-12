import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    mode: "PLANTING",
    trees: [],
    resources: {
        seeds: 10,
        stars: 10,
        water: 10
    }
};

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setMode: (state, action) => {
            state.mode = action.payload;
        },
        addTree: (state, action) => {
            state.trees = state.trees.concat(action.payload)
        },
        removeTree: (state, action) => {
            state.trees = state.trees.filter(tree => {
               return tree.id !== action.payload;
            })        
        }
    }
});

export const { addTree, setMode, removeTree } = gameSlice.actions;

export const selectGame = (state) => state.game;
export const selectMode = (state) => state.game.mode;
export const selectTrees = (state) => state.game.trees;
export const selectResources = (state) => state.game.resources;

export default gameSlice.reducer;