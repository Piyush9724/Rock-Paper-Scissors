const validChoices = ['rock', 'paper', 'scissors'];
const validResults =  ['tie', 'win', 'lose'];

let playerPoints = 0, computerPoints = 0;
let i = 5;

const buttons = document.querySelectorAll('button');
const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');
const resultsDisplay = document.getElementById('result');

let playRound = (playerSelection, computerSelection) => {
    if( playerSelection === computerSelection){
        resultsDisplay.textContent = `Tie ${playerSelection} same as ${computerSelection}`;
        return validResults[0];
    }
    if( validChoices.indexOf(computerSelection) ===( (validChoices.indexOf(playerSelection) + 1) % 3 )){
        resultsDisplay.textContent = `You lose ${computerSelection} beats ${playerSelection}`;
        return validResults[2];
    }
    else {
        resultsDisplay.textContent = `You won ${playerSelection} beats ${computerSelection}`;
        return validResults[1];
    }
};

let getComputerSelection = () => {
    return validChoices[Math.floor((Math.random() * 3))];
}

buttons.forEach( button => {
    button.addEventListener("click", (e) => {
        if(i-- > 0){
            const playerSelection = e.target.id;
            const computerSelection = getComputerSelection();
            let result = playRound(playerSelection, computerSelection);
            updateScore(result);
        } else {
            if( playerPoints > computerPoints) alert('Congratulations! You Won the Game');
            else if( computerPoints > playerPoints) alert('Sorry! You lost the Game');
            else alert(`It's a Tie`);
            reset();
        }
    });
});

let updateScore = (result) => {
    if(result !== validResults[0]) {
        if( result === validResults[1]) playerPoints++;
        else computerPoints++;
    }
    playerScoreDisplay.textContent = playerPoints;
    computerScoreDisplay.textContent = computerPoints;
}


let reset = () => {
    playerPoints = 0;
    computerPoints = 0;
    playerScoreDisplay.textContent = playerPoints;
    computerScoreDisplay.textContent = computerPoints;
    resultsDisplay.textContent = '';
}


/*Play from Console*/
let playGame = ()=>{
    let i = 5;
    while (i-- >0) {
        let roundResult = playRound(getPlayerSelection(), getComputerSelection());
        if(roundResult !== validResults[0]) {
            if( roundResult === validResults[1]) playerPoints++;
            else computerPoints++;
        }
        console.log(`Player:${playerPoints} Computer:${computerPoints}`);
    }
    if( playerPoints > computerPoints) console.log('Congratulations! You Won the Game');
    else if( computerPoints > playerPoints) console.log('Sorry! You lost the Game');
    else console.log(`It's a Tie`);
}

let getPlayerSelection = () => {
    let choice  = prompt('Rock, Paper or Scissors').toLowerCase();
    if(validChoices.includes(choice)) return choice;
    else {
        resultsDisplay.textContent = alert('Please enter Rock, Paper or Scissors');
        return getPlayerSelection() ;
    }
}

