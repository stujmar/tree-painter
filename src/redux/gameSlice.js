import { createSlice } from '@reduxjs/toolkit';
import { defaultGame } from './defaultState';

const persistedState = localStorage.getItem('reduxState') 
                       ? JSON.parse(localStorage.getItem('reduxState'))
                       : {}

const initialState = !!persistedState.game ? persistedState.game : defaultGame;

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        resetGame: (state) => {
            state.resources = defaultGame.resources;
            state.milestones = defaultGame.milestones;
            state.sandboxMode = defaultGame.sandboxMode;
            state.mode = defaultGame.mode;
            state.isDebugActive = defaultGame.isDebugActive;
            state.isStoreActive = defaultGame.isStoreActive;
            state.isToolTipActive = defaultGame.isToolTipActive;
            state.message = defaultGame.message;
        },
        setMilestone: (state, action) => {
            state.milestones[action.payload] = true;
        },
        resetMilestones: (state) => {
            state.milestones = {
                water: false,
                stars: false,
                wood: false,
                tractor: false,
                seasons: false,
                speed: false,
                altar: false,
                stone:false
            };
        },
        toggleDebug: (state) => {
            state.isDebugActive = !state.isDebugActive;
        },
        toggleStore: (state) => {
            state.isStoreActive = !state.isStoreActive;
        },
        toggleToolTip: (state, action) => {
            state.isToolTipActive = action.payload;
        },
        setSandbox: (state) => {
            state.sandboxMode = !state.sandboxMode;
        },
        resetSandbox: (state) => {
            state.sandboxMode = false;
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
        updateAcorns: (state, action) => {
            state.resources.acorns = state.resources.acorns + action.payload;
        },
        updateResource: (state, action) => {
            let amount = action.payload.amount;
            state.resources[action.payload.type] = state.resources[action.payload.type] + amount;
        },
        resetResource: (state, action) => {
            state.resources[action.payload] = action.payload === 'acorns' ? 10 : 0;
        }
    }
});

export const {
    setMode, 
    setMouse,
    setSandbox,
    resetSandbox,
    updateAcorns,
    updateResource,
    resetResource,
    setGrassLoaded,
    toggleDebug,
    toggleStore,
    toggleToolTip,
    setMessage,
    setMilestone,
    resetMilestones,
    resetGame
} = gameSlice.actions;

export const selectGame = (state) => state.game;
export const selectMilestones = (state) => state.game.milestones;
export const selectMessage = (state) => state.game.message;
export const selectDebug = (state) => state.game.isDebugActive;
export const selectStore = (state) => state.game.isStoreActive;
export const selectMode = (state) => state.game.mode;
export const selectMouse = (state) => state.game.mouse;
export const selectResources = (state) => state.game.resources;
export const selectGrassLoaded = (state) => state.game.grassLoaded;
export const selectSandboxMode = (state) => state.game.sandboxMode;

export default gameSlice.reducer;