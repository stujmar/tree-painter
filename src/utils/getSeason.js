import { getMonth } from './dateTimeConverters';

export function getSeason(day){
    let month = getMonth(day);    

    switch (month) {
        case "December":
        case "January":
        case "February":
            return {
                name: "winter",
                dark: "bg-blue-500",
                border: "border-blue-500",
                light: "bg-blue-400",
                text: "text-blue-50"
            }
        case "March":
        case "April":
        case "May":
            return {
                name: "spring",
                dark: "bg-green-500",
                border: "border-green-500",
                light: "bg-green-400",
                text: "text-green-50"
            }
        case "June":
        case "July":
        case "August":
            return {
                name: "summer",
                dark: "bg-yellow-500",
                border: "border-yellow-500",
                light: "bg-yellow-400",
                text: "text-yellow-50"
            }
        case "September":
        case "October":
        case "November":
            return {
                name: "autumn",
                dark: "bg-orange-500",
                border: "border-orange-500",
                light: "bg-orange-400",
                text: "text-orange-50"
            }
        default:
            return {
                name: "none",
                dark: "bg-gray-500",
                border: "border-gray-500",
                light: "bg-gray-400",
                text: "text-gray-50"
            }
    }

};