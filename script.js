const validChoices = ['rock', 'paper', 'scissors'];
const validResults =  ['tie', 'win', 'lose'];

let playGame = ()=>{
    let playerPoints = 0, computerPoints = 0;
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

let playRound = (playerSelection, computerSelection) => {
    if( playerSelection === computerSelection){
        alert(`Tie ${playerSelection} same as ${computerSelection}`)
        return validResults[0];
    }
    if( validChoices.indexOf(computerSelection) ===( (validChoices.indexOf(playerSelection) + 1) % 3 )){
        alert(`You lose ${computerSelection} beats ${playerSelection}`);
        return validResults[2];
    }
    else {
        alert(`You won ${playerSelection} beats ${computerSelection}`);
        return validResults[1];
    }
};

let getPlayerSelection = () => {
    let choice  = prompt('Rock, Paper or Scissors').toLowerCase();
    if(validChoices.includes(choice)) return choice;
    else {
        alert('Please enter Rock, Paper or Scissors');
        return getPlayerSelection() ;
    }
}

let getComputerSelection = () => {
    return validChoices[Math.floor((Math.random() * 3))];
}

playGame();
