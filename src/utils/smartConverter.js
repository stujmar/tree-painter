const smartConverter = (number) => {
    let month = getMonth(number);
    let day = number - daysToRemove[month]
    let suffix = getSuffix(day)
    return `${month} ${day}${suffix}`
}

export default smartConverter;

function getMonth(day){
    if (day <= 31 ) {
        return "January"
    } else if (day <= 59) {
        return "February"
    } else if (day <= 90) {
        return "March"
    } else if (day <= 120) {
        return "April"
    } else if (day <= 151) {
        return "May"
    } else if (day <= 181) {
        return "June"
    } else if (day <= 212) {
        return "July"
    } else if (day <= 243) {
        return "August"
    } else if (day <= 273) {
        return "September" 
    } else if (day <= 304) {
        return "October"
    } else if (day <= 334) {
        return "November"
    } else {
        return "December"
    }
}

const daysToRemove = {
    January: 0, //31
    February: 31, //28
    March: 59, //31
    April: 90, //30
    May: 120, //31
    June: 151, //30
    July: 181, //31
    August: 212, //31
    September: 243, //30
    October: 273, //31
    November: 304, //30
    December: 334, //31

}

function getSuffix(day){
    if (day === 11 || day === 12 || day === 13) {
        return "th";
    }
    switch(day.toString().slice(-1)) {
        case "1":
         return "st";
        case "2":
          return "nd";
        case "3":
          return "rd";
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "0":
            return "th"
        default:
            return ""
      }

}