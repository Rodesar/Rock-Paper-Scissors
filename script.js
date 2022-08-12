function getComputerChoice() {
    const options = ['Rock', 'Paper', 'Scissors']
    const randomChoice = Math.floor(Math.random() * options.length)
    return options[randomChoice] 
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'rock') {
        return '"Tie!"'
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return '"You Lose! Paper beats Rock"'
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return '"You Win! Rock beats Scissors"'
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return '"You Win! Paper beats Rock"'
    } else if  (playerSelection == 'paper' && computerSelection == 'paper') {
        return '"Tie!"'
    } else if  (playerSelection == 'paper' && computerSelection == 'scissors') {
        return '"You Lose! Scissors beats Paper"'
    } else if  (playerSelection == 'scissors' && computerSelection == 'rock') {
        return '"You Lose! Rock beats Scissors"'
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return '"You Win! Scissors beats Paper"'
    } else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
        return '"Tie!"'
    } else {
        return '"Oops! Seems that you enetered an invalid name"'
    }
}

window.alert('You are going to play "Rock, Paper or Scissors" against the computer! \r\n\r\n 5 rounds and the winner of the match will be displayed at the end. \r\n\r\n Click "OK" to begin')

let playerScore = 0
let computerScore = 0

function game() {
    for (let i = 1; i <= 5; i++) {

        const playerSelection = prompt('Rock, Paper or Scissors?').toLowerCase();
        const computerSelection = getComputerChoice().toLowerCase();
        console.log('Player Selection:', playerSelection.toUpperCase())
        console.log('Computer Selection:', computerSelection.toUpperCase())
        
        console.log(playRound(playerSelection, computerSelection));
        
        if (playRound(playerSelection, computerSelection).slice(1, 9) === 'You Lose') {
            computerScore+=1
        } else if (playRound(playerSelection, computerSelection).slice(1, 8) === 'You Win') {
            playerScore+=1
        }
        console.log('Player Score:', playerScore, 'Computer Score:', computerScore)
    }
    if (playerScore < computerScore) {
        console.log('COMPUTER WINS!!')
    } else if (playerScore > computerScore) {
        console.log('PLAYER WINS!!')
    } else {
        console.log('TIE MATCH!!')
    }
}

game()