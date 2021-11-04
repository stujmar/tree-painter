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
        addBranch: (state, action) => {
            // payload = {treeId: string, growthIndex: string, growthSide: string}
            // find the tree with the id
            const tree = state.trees.find(tree => tree.id === action.payload.treeId);
            console.log(tree, "didn't grow this hour");
            if (action.payload.side === 'left') {
            // add branch to left side of growth of given id
            } else {
            // add branch to right side of growth of given id
            }
        },
        growTreeById: (state, action) => {
            state.trees = state.trees.map(tree => {
                return tree.id !== action.payload.id ? tree : {...tree, growth: tree.growth.concat(action.payload.growth)}; 
            });
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
    growTreeById,
    removeTreeById,
    } = treeSlice.actions;

export const selectTree = (state) => state.tree;
export const selectTrees = (state) => state.tree.trees;

export default treeSlice.reducer;