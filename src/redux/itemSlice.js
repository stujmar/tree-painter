import { createSlice } from '@reduxjs/toolkit';

const persistedState = localStorage.getItem('reduxState') 
                       ? JSON.parse(localStorage.getItem('reduxState'))
                       : {}

const initialState = !!persistedState.item ? persistedState.item : {
    items: [],
};

export const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.items = state.items.concat(action.payload)
        },
        resetTrees: (state) => {
            state.items = [];
        },
        ageItems: (state) => {
            state.items = state.items.map(tree => {
                return tree.age < 100 ? {...tree, age: tree.age + 1} : tree
            })
        },
        addBranch: (state, action) => {
            // payload = {treeId: string, growthIndex: string, growthSide: string}
            state.items = state.items.map(_tree => { 
                if (_tree.id === action.payload.treeId) {
                    let oldGrowth = [..._tree.growth];
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
            state.items = state.items.map(tree => {
                return tree.id !== action.payload.id ? tree : {...tree, growth: tree.growth.concat(action.payload.growth)}; 
            });
        },
        removeItemById: (state, action) => {
            state.items = state.items.filter(tree => {
                return tree.id !== action.payload;
            })
        },
    }
});

export const {
    addItem,
    addBranch,
    resetTrees,
    ageItems,
    growTreeById,
    removeItemById,
    } = itemSlice.actions;

export const selectItem = (state) => state.item;
export const selectItems = (state) => state.item.items;

export default itemSlice.reducer;