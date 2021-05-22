export const dateConverter = (number) => {
    
    let dayLibrary = {
        1: "January 1st",
        2: "01/02",
        3: "01/03",
        4: "01/04",
        5: "01/05",
        6: "01/06",
        7: "01/07",
    }
    
    return dayLibrary[number]
}

