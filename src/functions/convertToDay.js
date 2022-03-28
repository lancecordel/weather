export function convertToDay(utc){
    const dateObject = new Date(utc * 1000)
    const humanDateFormat = dateObject.toLocaleString()
    const day = dateObject.toLocaleString("en-US", {weekday: "long"})
    return day;
}