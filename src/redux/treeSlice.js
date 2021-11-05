import { createSlice, current } from '@reduxjs/toolkit';

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
            state.trees = state.trees.map(_tree => { 
                if (_tree.id === action.payload.treeId) {
                    let oldGrowth = _tree.growth;
                    if (action.payload.growthSide === 'left') {
                        oldGrowth[action.payload.growthIndex].left++;
                    } else {
                        oldGrowth[action.payload.growthIndex].right++;
                    }
                    _tree = {..._tree, growth: oldGrowth }
                    return _tree;
                } else {
                    return _tree;
                }
            })
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
    addBranch,
    removeTree, 
    resetTrees, 
    ageTrees, 
    growTreeById,
    removeTreeById,
    } = treeSlice.actions;

export const selectTree = (state) => state.tree;
export const selectTrees = (state) => state.tree.trees;

export default treeSlice.reducer;