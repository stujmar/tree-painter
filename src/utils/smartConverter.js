const smartConverter = (day) => {

    


}

export default smartConverter;

function getMonth(day){
    if (day <= 31 ) {
        return "January"
    } else if (day < 31 && day <= 59) {
        return "February"
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