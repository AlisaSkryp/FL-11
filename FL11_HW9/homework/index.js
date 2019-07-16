//Task 1
function findTypes() {
    let typesStats = [];
    for(let i = 0; i < arguments.length; i++) {
        let type = typeof(arguments[i]);
        typesStats[type]++;
    } return (typesStats);
}
console.log(typesStats());

//Task 2
function executeforEach(array, handler) {
    for (let i = 0; i < array.length; i++) {
        handler(array[i]); } 
}
//Task 3
function mapArray(array, baseFunc) {
    let handledArray = [];
    executeforEach(array, item => {
        handledArray.push(baseFunc(item));
    });
    return (handledArray);
}

//Task 4
function filterArray(array, filterFunc) {
    let handledArray = [];
    executeforEach(array, item => {
        if (filterFunc(item))
            handledArray.push(item);
    });
    return filteredArray;
}

//Task 5
function showFormattedDate(dateToFormat) {
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return ('Date: ' + monthNames[dateToFormat.getMonth()] + ' ' + dateToFormat.getDate() + '' + dateToFormat.getFullYear());
}

//Task 6
function canConvertToDate(dateToTest) {
    return (!isNaN(Date.parse(dateString)));
}
console.log(dateToTest());

//Task 7
function daysBetween(firstDate, secondDate) {
    let millisecondsPerDay = 24 * 60 * 60 * 1000;
    return (Math.abs(Math.round((Date.parse(firstDate) - Date.parse(secondDate)) / millisecondsPerDay)));
}