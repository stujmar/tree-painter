import { store } from '../redux/store';

const MAX_TREE_HEIGHT = 15;
const MAX_GNOME_AGE = 6;

const BARN_UNLOCK = 15;
const SPEED_UNLOCK = 5;
const WATER_UNLOCK = 10;
const SEASONS_UNLOCK = 20;
const STARS_UNLOCK = 35;

const BASE_BUTTERFLY_CHANCE = .01;
const BASE_GNOME_CHANCE = .002;

const isMaxAge = () => {
    return true
}

const getMilestones = ( unlock ) => {
    let state = store.getState();
    let treeCount = state.item.items.length;
    switch(unlock) {
        case "speed":
            return treeCount >= SPEED_UNLOCK;
        case "seasons":
            return treeCount >= SEASONS_UNLOCK;
        case "stars":
            return treeCount >= STARS_UNLOCK;
        case "water":
            return treeCount >= WATER_UNLOCK;
        case "barn":
            return treeCount >= BARN_UNLOCK;
        default:
          // code block
      }
}

let conditionsToBeMet = ["water", "speed", "seasons", "stars", "barn"];

export { 
    getMilestones,
    isMaxAge,
    MAX_TREE_HEIGHT,
    MAX_GNOME_AGE,
    BASE_BUTTERFLY_CHANCE,
    BASE_GNOME_CHANCE,
    conditionsToBeMet,
};