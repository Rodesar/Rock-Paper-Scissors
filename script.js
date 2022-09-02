function getComputerChoice() {
    const options = ['Rock', 'Paper', 'Scissors'];
    return options[Math.floor(Math.random() * options.length)]; 
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'Rock' &&
        computerSelection == 'Rock') {
            return 'Tie!';
    } else if (playerSelection == 'Rock' &&
        computerSelection == 'Paper') {
            return 'You Lose! Paper beats Rock';
    } else if (playerSelection == 'Rock' &&
        computerSelection == 'Scissors') {
            return 'You Win! Rock beats Scissors';
    } else if (playerSelection == 'Paper' &&
        computerSelection == 'Rock') {
            return 'You Win! Paper beats Rock';
    } else if  (playerSelection == 'Paper' &&
        computerSelection == 'Paper') {
            return 'Tie!';
    } else if  (playerSelection == 'Paper' &&
        computerSelection == 'Scissors') {
            return 'You Lose! Scissors beats Paper';
    } else if  (playerSelection == 'Scissors' &&
        computerSelection == 'Rock') {
            return 'You Lose! Rock beats Scissors';
    } else if (playerSelection == 'Scissors' &&
        computerSelection == 'Paper') {
            return 'You Win! Scissors beats Paper';
    } else if (playerSelection == 'Scissors' &&
        computerSelection == 'Scissors') {
            return 'Tie!';
    } else {
        return 'Oops! Seems that you enetered an invalid name';
    }
}

let playerCount = 0;
let computerCount = 0;

const body = document.querySelector('body');

const title = document.createElement('h1');
title.textContent = 'ROCK, PAPER OR SCISSORS!';
title.classList.add('title');

const description = document.createElement('div');
description.textContent = 'First to score 5 points wins the game';
description.classList.add('description');

const playerSelected = document.createElement('div');
playerSelected.textContent = '?';
playerSelected.classList.add('playerSelected');

const computerSelected = document.createElement('div');
computerSelected.textContent = '?'
computerSelected.classList.add('computerSelected');

const containerPlayer = document.createElement('div');
containerPlayer.classList.add('containerPlayer');

const containerComputer = document.createElement('div');
containerComputer.classList.add('containerComputer');

const scoreContainer = document.createElement('div');
scoreContainer.classList.add('scoreContainer');

const playerScore = document.createElement('div');
playerScore.textContent = 'Player: 0';
playerScore.classList.add('playerScore');

const computerScore = document.createElement('div');
computerScore.textContent = 'Computer: 0';
computerScore.classList.add('computerScore');

const select = document.createElement('div');
select.textContent = 'Select an option:';
select.classList.add('select');

const buttonContainer = document.createElement('div');
buttonContainer.classList.add('buttonContainer');

const rock = document.createElement('button');
rock.textContent = 'Rock';
rock.classList.add('rock');

const paper = document.createElement('button');
paper.textContent = 'Paper';
paper.classList.add('paper');

const scissors = document.createElement('button');
scissors.textContent = 'Scissors';
scissors.classList.add('scissors');

const result = document.createElement('div');
result.classList.add('result');

body.appendChild(title);
body.appendChild(description);
body.appendChild(scoreContainer);
scoreContainer.appendChild(containerPlayer);
scoreContainer.appendChild(containerComputer);
containerPlayer.appendChild(playerSelected);
containerPlayer.appendChild(playerScore);
containerComputer.appendChild(computerSelected);
containerComputer.appendChild(computerScore);
body.appendChild(select);
body.appendChild(buttonContainer);
buttonContainer.appendChild(rock);
buttonContainer.appendChild(paper);
buttonContainer.appendChild(scissors);
body.appendChild(result);

const buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click', () => {
    playerSelection = button.textContent;
    computerSelection = getComputerChoice();
    playerSelected.textContent = button.textContent;
    computerSelected.textContent = computerSelection;
    result.textContent = playRound(playerSelection,
        computerSelection);
    if (playRound(playerSelection, computerSelection).slice(0, 7)
        === 'You Win') playerCount += 1;
    if (playRound(playerSelection, computerSelection).slice(0, 8)
        === 'You Lose') computerCount += 1;
    playerScore.textContent = `Player: ${playerCount}`;
    computerScore.textContent = `Computer: ${computerCount}`;
    if (playerCount === 5) {
        alert('PLAYER WINS!');
    } else if (computerCount === 5) { 
        alert('COMPUTER WINS!');
    }
}));