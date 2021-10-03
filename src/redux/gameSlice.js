import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    mode: "PLANTING",
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
        updateSeeds: (state, action) => {
            state.resources.seeds = state.resources.seeds + action.payload;
        },
        updateResource: (state, action) => {
            let amount = action.payload.amount;
            switch(action.payload.type) {
                case 'seeds':
                    state.resources.seeds = state.resources.seeds + amount;
                    break;
                case 'water':
                    state.resources.water = state.resources.water + amount;
                    break;
                case 'stars':
                    state.resources.stars = state.resources.stars + amount;
                    break;
                default:
                    break;
            }
        },
        resetResource: (state, action) => {
            switch(action.payload) {
                case 'seeds':
                    state.resources.seeds = 10;
                    break;
                case 'water':
                    state.resources.water = 10;
                    break;
                case 'stars':
                    state.resources.stars = 10;
                    break;
                default:
                    break;

            }
        }
    }
});

export const { 
    setMode, 
    updateSeeds,
    updateResource,
    resetResource
    } = gameSlice.actions;

export const selectGame = (state) => state.game;
export const selectMode = (state) => state.game.mode;
export const selectResources = (state) => state.game.resources;

export default gameSlice.reducer;