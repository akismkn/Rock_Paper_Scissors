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
        return 'Draw!' + plChoice + 'ties' + compChoice;
    }
    if (plChoice==='rock'){
        if (compChoice==='paper'){
            return 'You lose! Rock loses to Paper'
        }
        else{
            return 'You win! Rock beats Scissors'
        }
    }
    else if (plChoice==='paper'){
        if (compChoice==='rock'){
            return 'You win! Paper beats Rock'
        }
        else{
            return 'You lose! Paper loses to Scissors'
        }
    }
    else{
        if(compChoice==='rock'){
            return 'You lose! Scissors loses to Rock'
        }
        else{
            return 'You win! Scissors beats Paper'
        }
    }
}

const playerChoice = prompt('Please enter Rock Paper Or Scissors :')
const computerChoice = getComputerChoice();
console.log(roundStart(playerChoice,computerChoice));


