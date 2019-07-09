let numberRange = 9;
let rangeExtendStep = 4;
let numberOfAttempts = 3;
let prizeNumOne = 100;
let prizeNumTwo = 50;
let prizeNumThree = 25;
let prizes = [prizeNumOne, prizeNumTwo, prizeNumThree];
let chooseMsg = 'Choose a roulette pocket number from 0 to ';
let attemptsMsg = 'Attempts left: ';
let totalPrizeMsg = 'Total prize : ';
let possiblePrizeMsg = 'Possible prize on current attempt: ';
let prizeMsg = 'Your prize is: ';
let playAgainMsg = 'Do you want to play again?';
let inGame = true;
let pC = 2;

if (!confirm('Do you want to play a game?')){
    alert('You did not become a billionaire, but can.');
}else{
    let totalPrize = 0;
    let prizeCoeff = 1;
    let currentNumberRange = numberRange;
    while (inGame){
        let numberGuessed = false;
        let choosedNumber = Math.floor(Math.random() * currentNumberRange);
        for (let i = 0; i < numberOfAttempts; i++){      
            let userNumber = parseInt(prompt(chooseMsg + (currentNumberRange - 1) + '\n'
            + attemptsMsg + (numberOfAttempts - i) + '\n'
            + totalPrizeMsg + totalPrize + '$\n'
            + possiblePrizeMsg + prizes[i] * prizeCoeff + '$'));
            if (!isNaN(userNumber) && userNumber === choosedNumber){
                numberGuessed = true;
                totalPrize += prizes[i] * prizeCoeff;
                break;
            }
        }
        let resultPrizeMsg = prizeMsg + totalPrize + '$';
        let askNewGame = false;
        if (!numberGuessed){
            alert('Thank you for your participation. ' + resultPrizeMsg);
            askNewGame = true;
    } else{
            if (confirm('Congratulation, you won!   ' + resultPrizeMsg + ' . Do you want to continue?')){
                currentNumberRange += rangeExtendStep;
                prizeCoeff *= pC;
            } else {
                alert('Thank you for your participation. ' + resultPrizeMsg);
                askNewGame = true;
            }
        }
        if (askNewGame){
            if (confirm(playAgainMsg)){
                totalPrize = 0;
                prizeCoeff = 1;
                currentNumberRange = numberRange;
            }else{
                inGame = false;
            }
        }
    }
}
