export function getDistance(x1, y1, x2, y2) { // Takes in two coordinates and returns distance

    // Deal with some edge cases
    if (x1 === x2 && y1 === y2) { return 0; } // If the points share coordinates, return 0
    if (x1 === x2 ) { return Math.abs(y1 - y2); } // If they are lined up on the x axis
    if (y1 === y2 ) { return Math.abs(x1 - x2); } // If they are lined up on the y axis

    // Get the length of the sides
    let sideA = Math.abs(x1 - x2);
    let sideB = Math.abs(y1 - y2);

    // Return hypotenuse rounded to the hundreds place.
    return Math.sqrt(Math.pow(sideA,2) + Math.pow(sideB,2)).toFixed(2);
};

/*
"if" checks a condition then conditionally renders the code in the following {}
"return" returns a value and exits the function
Math.abs() returns an absolute value
Math.sqrt() returns the square root
Math.pow() take in a number and the power you are raising it to.
toFixed() rounds a number to a fixed decimal
*/
