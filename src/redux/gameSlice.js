import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    sandboxMode: false,
    message: '',
    mode: "NO_MODE",
    isDebugActive: false,
    grassLoaded: {
        clientHeight: 0,
        clientWidth: 0,
    },
    resources: {
        seeds: 10,
        stars: 10,
        water: 10
    },
    mouse: {    
        x: 0,
        y: 0,
        xMax: 0,
        yMax: 0
    }
};

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        toggleDebug: (state) => {
            state.isDebugActive = !state.isDebugActive;
        },
        setSandbox: (state) => {
            state.sandboxMode = !state.sandboxMode;
        },
        setGrassLoaded: (state, action) => {
            state.grassLoaded = action.payload;
        },
        setMessage: (state, action) => {
            state.message = action.payload;
        },
        setMode: (state, action) => {
            state.mode = action.payload;
        },
        setMouse: (state, action) => {
            state.mouse = action.payload;
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
    setMouse,
    setSandbox,
    updateSeeds,
    updateResource,
    resetResource,
    setGrassLoaded,
    toggleDebug,
    setMessage
    } = gameSlice.actions;

export const selectGame = (state) => state.game;
export const selectMessage = (state) => state.game.message;
export const selectDebug = (state) => state.game.isDebugActive;
export const selectMode = (state) => state.game.mode;
export const selectMouse = (state) => state.game.mouse;
export const selectResources = (state) => state.game.resources;
export const selectGrassLoaded = (state) => state.game.grassLoaded;
export const selectSandboxMode = (state) => state.game.sandboxMode;

export default gameSlice.reducer;