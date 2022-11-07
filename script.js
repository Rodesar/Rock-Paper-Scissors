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

const scoring = document.createElement('div');
scoring.textContent = '0 - 0';
scoring.classList.add('scoring');

const scoreContainer = document.createElement('div');
scoreContainer.classList.add('scoreContainer');

const playerScore = document.createElement('div');
playerScore.textContent = 'Player';
playerScore.classList.add('playerScore');

const computerScore = document.createElement('div');
computerScore.textContent = 'Computer';
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

const playAgain = document.createElement('button');
playAgain.textContent = 'Play Again';
playAgain.classList.add('playAgain');

const author = document.createElement('div');
author.classList.add('author');
const authorLink = document.createElement('a');
author.textContent = 'By ';
authorLink.setAttribute('href', `https://github.com/roesparc`);
authorLink.textContent = 'roesparc';

body.appendChild(title);
body.appendChild(description);
body.appendChild(scoreContainer);
scoreContainer.appendChild(containerPlayer);
scoreContainer.appendChild(scoring);
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
body.appendChild(author);
author.appendChild(authorLink);

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
    scoring.textContent = `${playerCount} - ${computerCount}`
    if (playerCount === 5) {
        description.textContent = 'PLAYER WINS!';
        description.classList.add('winnerPlayer');
        rock.disabled = true;
        rock.classList.add('buttonDisable');
        paper.disabled = true;
        paper.classList.add('buttonDisable');
        scissors.disabled = true;
        scissors.classList.add('buttonDisable');
        body.insertBefore(playAgain, author);
    } else if (computerCount === 5) { 
        description.textContent = 'COMPUTER WINS!';
        description.classList.add('winnerComputer');
        rock.disabled = true;
        rock.classList.add('buttonDisable');
        paper.disabled = true;
        paper.classList.add('buttonDisable');
        scissors.disabled = true;
        scissors.classList.add('buttonDisable');
        body.insertBefore(playAgain, author);
    }
}));

playAgain.addEventListener('click', () => {
    playerCount = 0;
    computerCount = 0;
    scoring.textContent = '0 - 0';
    result.textContent = '';
    playerSelected.textContent = '?';
    computerSelected.textContent = '?';
    description.textContent =
        'First to score 5 points wins the game';
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
    rock.classList.remove('buttonDisable');
    paper.classList.remove('buttonDisable');
    scissors.classList.remove('buttonDisable');
    description.classList.remove('winnerPlayer');
    description.classList.remove('winnerComputer');
    body.removeChild(playAgain);
});