import { store } from '../redux/store';

const MAX_TREE_HEIGHT = 15;

const BARN_UNLOCK = 15;
const SPEED_UNLOCK = 2;
const WATER_UNLOCK = 10;
const SEASONS_UNLOCK = 5;
const STARS_UNLOCK = 20;


const getMilestones = ( unlock ) => {
    let state = store.getState();
    let treeCount = state.tree.trees.length;
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

export { getMilestones, MAX_TREE_HEIGHT, conditionsToBeMet };