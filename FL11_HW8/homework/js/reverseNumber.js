function reversedNum(num){
    let parsedNum = parseInt(num);
    if (isNaN(parsedNum)){ 
        return (NaN);}
    let sign = Math.sign(parsedNum);
    let div = 10;
    let revNum = 0;
    parsedNum = Math.abs(parsedNum);
    while (parsedNum > 0) {
        revNum = revNum * div + parsedNum % div; 
        parsedNum = Math.floor(parsedNum / div); 
    }
    return (revNum * sign);
}
console.log(reversedNum(-123));