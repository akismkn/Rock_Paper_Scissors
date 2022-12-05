let cPoints=0;
let pPoints=0;

const buttons = document.querySelectorAll('.btn')
buttons.forEach(button => {
    button.addEventListener('click',function(){
        roundStart(button.id)
    })
})


function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3 + 1);
    switch (choice){
        case 1:
            return 'rock'
            break;
        case 2:
            return 'paper'
            break;
        default:
            return 'scissors'
    }
}

function roundStart(playerChoice){
    const compChoice = getComputerChoice();
    if (playerChoice===compChoice){
        document.getElementById("roundResults").innerHTML  = 'Draw! ' + playerChoice + ' ties ' + compChoice;
    }
    else if(playerChoice==='rock'){
        if (compChoice==='paper'){
            cPoints++
            document.getElementById("roundResults").innerHTML = 'Lose! Rock loses to Paper'
            document.getElementById("computerPoints").innerHTML = "Computer Points: " + cPoints  
        }
        else{
            pPoints++
            document.getElementById("roundResults").innerHTML  = 'Win! Rock beats Scissors'
            document.getElementById("playerPoints").innerHTML = "Player Points: " + pPoints
        }
    }
    else if (playerChoice==='paper'){
        if (compChoice==='rock'){
            pPoints++
            document.getElementById("roundResults").innerHTML  = 'Win! Paper beats Rock'
            document.getElementById("playerPoints").innerHTML = "Player Points: " + pPoints
        }
        else{
            cPoints++
            document.getElementById("roundResults").innerHTML  = 'Lose! Paper loses to Scissors'
            document.getElementById("computerPoints").innerHTML = "Computer Points: " + cPoints 
        }
    }
    else{
        if(compChoice==='rock'){
            cPoints++
            document.getElementById("roundResults").innerHTML = 'Lose! Scissors loses to Rock'
            document.getElementById("computerPoints").innerHTML = "Computer Points: " + cPoints 
        }
        else{
            pPoints++
            document.getElementById("roundResults").innerHTML  = 'Win! Scissors beats Paper'
            document.getElementById("playerPoints").innerHTML = "Player Points: " + pPoints 
        }
    }
    if (cPoints==5 || pPoints==5 ){
        disableButtons();
        if (cPoints==5){
            document.getElementById("lastResults").innerHTML = "You Lost the game. Reload to try again!"
        }
        else{
            document.getElementById("lastResults").innerHTML = "You Won the game! Reload if you want to play again."
        }
    }
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}