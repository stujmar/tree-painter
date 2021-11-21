const MAX_TREE_HEIGHT = 15;
const SPEED_UNLOCK = 2;
const SEASONS_UNLOCK = 5;

const getMilestones = ( unlock, resource ) => {

    switch(unlock) {
        case "speed":
            return resource >= SPEED_UNLOCK;
        case "seasons":
            return resource >= SEASONS_UNLOCK;
        default:
          // code block
      }
}

export { getMilestones, MAX_TREE_HEIGHT };