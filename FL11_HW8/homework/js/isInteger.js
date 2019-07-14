function isInteger(num){
    let parsed = Number(num);
    return (!isNaN(parsed) && Math.floor(parsed) == parsed);
}