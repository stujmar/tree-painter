import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    trees: [],
};

export const treeSlice = createSlice({
    name: 'tree',
    initialState,
    reducers: {
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
    }
});

export const { 
    addTree, 
    removeTree, 
    resetTrees, 
    ageTrees, 
    growTrees,
    removeTreeById,
    } = treeSlice.actions;

export const selectTree = (state) => state.tree;
export const selectTrees = (state) => state.tree.trees;

export default treeSlice.reducer;