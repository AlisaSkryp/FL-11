let inputMsg = 'Enter information of point';
let erroMsg = 'Input error. You have entered not a number coordinates value(s)!';
let aX = parseFloat(prompt(inputMsg + 'A: x'));
let aY = parseFloat(prompt(inputMsg + 'A: y'));
let bX = parseFloat(prompt(inputMsg + 'B: x'));
let bY = parseFloat(prompt(inputMsg + 'B: y'));
let cX = parseFloat(prompt(inputMsg + 'C: x'));
let cY = parseFloat(prompt(inputMsg + 'C: y'));

if (isNaN(aX) || isNaN(aY) || isNaN(bX) || isNaN(bY) || isNaN(cX) || isNaN(cY)) { 
    alert('Error!');
    console.log(false);
} else {
    let divider = 2;
    let medC1 = (aX + bY) / divider,
    medC2 = (aY + bY) / divider;
   
    if (medC1 === cX && medC2 === cY) {
    console.log(true);
    } else {
    console.log(false);
    }
}
