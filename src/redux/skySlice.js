import { createSlice } from '@reduxjs/toolkit';

const persistedState = localStorage.getItem('reduxState') 
                       ? JSON.parse(localStorage.getItem('reduxState'))
                       : {}

const initialState = !!persistedState.sky ? persistedState.sky : {
    stars: [],
};

export const skySlice = createSlice({
    name: 'sky',
    initialState,
    reducers: {
        addStar: (state, action) => {
            state.stars = state.stars.concat(action.payload)
        },
        starTree: (state, action) => {
            state.stars = state.stars.filter(star => {
               return star.id !== action.payload;
            })        
        },
        resetStars: (state) => {
            state.stars = [];
        },
        ageStars: (state) => {
            state.stars = state.stars.map(star => {
                return star.age < 80 ? {...star, age: star.age + 1} : star
            })
        },
        growStars: (state, action) => {
            state.stars = state.stars.map(star => {
                return star.growth.length < 40 && star.age < 80 ? {...star, growth: star.growth.concat(action.payload)} : star;
            })
        },
        removeStarById: (state, action) => {
            state.stars = state.stars.filter(star => {
                return star.id !== action.payload;
            })
        },
    }
});

export const { 
    addStar, 
    removeStar, 
    resetStars, 
    ageStars, 
    growStars,
    removeStarById,
    } = skySlice.actions;

export const selectSky = (state) => state.sky;
export const selectStars = (state) => state.sky.stars;

export default skySlice.reducer;