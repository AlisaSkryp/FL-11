const hourMin = 60;
const dayMin = hourMin * 24;

function formatTime(minutesValue){  
    let left = minutesValue % dayMin;
    return (Math.floor(minutesValue / dayMin) + " day(s) " + 
    Math.floor(left / hourMin) + " hour(s) " + left % hourMin + " minute(s).");    
}
console.log(formatTime(120));