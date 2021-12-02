import { createSlice } from '@reduxjs/toolkit';

const persistedState = localStorage.getItem('reduxState') 
                       ? JSON.parse(localStorage.getItem('reduxState'))
                       : {}

const initialState = !!persistedState.game ? persistedState.game : {
    sandboxMode: false,
    message: 'Message from Redux State',
    mode: "NO_MODE",
    isDebugActive: false,
    isStoreActive: false,
    grassLoaded: {
        clientHeight: 0,
        clientWidth: 0,
    },
    resources: {
        acorns: 10,
        water: 0,
        wood: 0,
        stars: 0,
        stone: 0
    },
    milestones: {
        water: false,
        stars: false,
        wood: false,
        tractor: false,
        seasons: false,
        speed: false,
        stone: true,
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
            };
        },
        toggleDebug: (state) => {
            state.isDebugActive = !state.isDebugActive;
        },
        toggleStore: (state) => {
            state.isStoreActive = !state.isStoreActive;
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
    updateAcorns,
    updateResource,
    resetResource,
    setGrassLoaded,
    toggleDebug,
    toggleStore,
    setMessage,
    setMilestone,
    resetMilestones
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