// To pace the game here is a centralized place to store the milestones.
// The resource type and amount to unlock a given game feature.

export const getMilestones = ( unlock, resource ) => {

    switch(unlock) {
        case "speed":
            return resource >= 7;
        default:
          // code block
      }
}