function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors']
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


let playerScore = 0
let computerScore = 0


const rock = document.createElement('button')
rock.textContent = 'Rock'
rock.addEventListener('click', () => {
    playerSelection = 'rock'
    computerSelection = getComputerChoice()
    container1.textContent = playRound(playerSelection, computerSelection)
})

const paper = document.createElement('button')
paper.textContent = 'Paper'
paper.addEventListener('click', () => {
    playerSelection = 'paper'
    computerSelection = getComputerChoice()
    container1.textContent = playRound(playerSelection, computerSelection)
})

const scissors = document.createElement('button')
scissors.textContent = 'Scissors'
scissors.addEventListener('click', () => {
    playerSelection = 'scissors'
    computerSelection = getComputerChoice()
    container1.textContent = playRound(playerSelection, computerSelection)
})

const body = document.querySelector('body')

const container1 = document.createElement('div')

body.appendChild(rock)
body.appendChild(paper)
body.appendChild(scissors)
body.appendChild(container1)

