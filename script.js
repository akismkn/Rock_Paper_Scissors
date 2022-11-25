function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3 + 1);
    switch (choice){
        case 1:
            return 'Rock'
            break;
        case 2:
            return 'Paper'
            break;
        default:
            return 'Scissors'
    }
}

function roundStart(playerChoice,computerChoice){
    const plChoice = playerChoice.toLowerCase();
    const compChoice = computerChoice.toLowerCase();
    if (plChoice===compChoice){
        return 'Draw! ' + plChoice + ' ties ' + compChoice;
    }
    if (plChoice==='rock'){
        if (compChoice==='paper'){
            return 'Lose! Rock loses to Paper'
        }
        else{
            return 'Win! Rock beats Scissors'
        }
    }
    else if (plChoice==='paper'){
        if (compChoice==='rock'){
            return 'Win! Paper beats Rock'
        }
        else{
            return 'Lose! Paper loses to Scissors'
        }
    }
    else{
        if(compChoice==='rock'){
            return 'Lose! Scissors loses to Rock'
        }
        else{
            return 'Win! Scissors beats Paper'
        }
    }
}

function game(){
    let playerCount=0;
    let computerCount=0;
    for (let i=1; i<=5; i++){
        const playerChoice = prompt('Please enter Rock Paper Or Scissors :')
        const computerChoice = getComputerChoice();
        const result = roundStart(playerChoice,computerChoice);
        if (result.charAt(0)==='W'){
            playerCount++;
            console.log('You won the round ' + i);
        }
        else if(result.charAt(0)==='L'){
            computerCount++;
            console.log('You lost the round ' + i);
        }
        else{
            console.log('Draw at round ' + i);
        }
    }
    if (playerCount>computerCount){
        return 'You won! Player Score:' + playerCount + ' Computer Score:' + computerCount;
    }
    else if (playerCount<computerCount){
        return 'You lost. Player Score:' + playerCount + ' Computer Score:' + computerCount;
    }
    else{
        return 'Draw! Player Score:' + playerCount + ' Computer Score:' + computerCount;
    }
}

console.log(game());
