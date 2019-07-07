let msg = 'Enter length of side ';
let a = parseFloat(prompt(msg + 'A', ''));
let b = parseFloat(prompt(msg + 'B', ''));
let c = parseFloat(prompt(msg + 'C', ''));

if (isNaN(a) || isNaN(b) || isNaN(c)
    || a <= 0 || b <= 0 || c <= 0
    || a + b <= c && b + c <= a && a + c <= b) {
        console.log('Triangle doesn’t exist');
} else {
    if (a === b && b === c) { 
        console.log('Eequivalent triangle');

    } else if (a === b || b === c || c === a) { 
        console.log('Isosceles triangle');
    } else {
        console.log('Normal triangle');
     }
}