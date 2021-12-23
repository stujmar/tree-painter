export function coinFlip() {
    return Math.floor(Math.random() * 2) === 0;
}

// a function that returns boolean depending on a ratio bewteen 0 and 1
export function coinFlipRatio(ratio) {
    // This is copilot code, double check it. and get it returning the correct value.
    let results = Math.random();
    return results < ratio;
}
