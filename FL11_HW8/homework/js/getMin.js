function getMin(){
    let min = Number.MAX_VALUE;
    if (arguments.length === 0){ 
        return (NaN);
    }for (let i = 0; i < arguments.length; i++){
        let num = arguments[i];
        if (!Number.isInteger(num)){ 
            return (NaN);
        }if (num < min){ 
            min = num;
    }
}
    return (min);
}
console.log(getMin);