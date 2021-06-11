import { getMonth } from './dateTimeConverters';

export function getSeason(day){
    let month = getMonth(day);    

    switch (month) {
        case "December":
        case "January":
        case "February":
            return {
                name: "winter",
                dark: "bg-blue-600",
                light: "bg-blue-400"
            }
        case "March":
        case "April":
        case "May":
            return {
                name: "spring",
                dark: "bg-green-600",
                light: "bg-green-400"
            }
        case "June":
        case "July":
        case "August":
            return {
                name: "summer",
                dark: "bg-yellow-600",
                light: "bg-yellow-400"
            }
        case "September":
        case "October":
        case "November":
            return {
                name: "autumn",
                dark: "bg-orange-600",
                light: "bg-orange-400"
            }
        default:
            return {
                name: "none",
                dark: "bg-gray-600",
                light: "bg-gray-400"
            }
    }

};