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
        },
        resetTrees: (state) => {
            state.trees = [];
        },
        ageTrees: (state) => {
            state.trees = state.trees.map(tree => {
                return tree.age < 80 ? {...tree, age: tree.age + 1} : tree
            })
        },
        growTrees: (state, action) => {
            state.trees = state.trees.map(tree => {
                return tree.growth.length < 40 && tree.age < 80 ? {...tree, growth: tree.growth.concat(action.payload)} : tree;
            })
        },
        removeTreeById: (state, action) => {
            state.trees = state.trees.filter(tree => {
                return tree.id !== action.payload;
            })
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
    addTree, 
    setMode, 
    removeTree, 
    resetTrees, 
    ageTrees, 
    growTrees,
    removeTreeById,
    updateSeeds,
    updateResource,
    resetResource
    } = gameSlice.actions;

export const selectGame = (state) => state.game;
export const selectMode = (state) => state.game.mode;
export const selectTrees = (state) => state.game.trees;
export const selectResources = (state) => state.game.resources;

export default gameSlice.reducer;