function getComputerChoice() {
    const options = ['Rock', 'Paper', 'Scissors']
    const randomChoice = Math.floor(Math.random() * options.length)
    return options[randomChoice] 
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'rock') {
        return 'Tie!'
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return 'You Lose! Paper beats Rock'
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return 'You Win! Rock beats Scissors'
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return 'You Win! Paper beats Rock'
    } else if  (playerSelection == 'paper' && computerSelection == 'paper') {
        return 'Tie!'
    } else if  (playerSelection == 'paper' && computerSelection == 'scissors') {
        return 'You Lose! Scissors beats Paper'
    } else if  (playerSelection == 'scissors' && computerSelection == 'rock') {
        return 'You Lose! Rock beats Scissors'
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return 'You Win! Scissors beats Paper'
    } else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
        return 'Tie!'
    } else {
        return 'Oops! Seems that you enetered an invalid name'
    }
}

const playerSelection = 'ROCK'.toLowerCase();
const computerSelection = getComputerChoice().toLowerCase();
console.log('Player Selection:', playerSelection)
console.log('Computer Selection:', computerSelection)
console.log(playRound(playerSelection, computerSelection));