window.alert('You are going to play "Rock, Paper or Scissors" against the computer! \n\n The first player to reach 5 points is the winner of the match. \n\n Click "OK" to begin');

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

let playerScore = 0;
let computerScore = 0;

const body = document.querySelector('body');

const buttonContainer = document.createElement('div');
buttonContainer.classList.add('buttonContainer');

const score = document.createElement('div');
score.textContent = `Player Score: ${playerScore} - 
    Computer Score: ${computerScore}`;
score.classList.add('score');

const select = document.createElement('div');
select.textContent = 'Select an option:';
select.classList.add('select');

const rock = document.createElement('button');
rock.textContent = 'Rock';
rock.classList.add('rock');

const paper = document.createElement('button');
paper.textContent = 'Paper';
paper.classList.add('paper');

const scissors = document.createElement('button');
scissors.textContent = 'Scissors';
scissors.classList.add('scissors');

const computerSelected = document.createElement('div');
computerSelected.classList.add('computerSelected');

const result = document.createElement('div');
result.classList.add('result');

body.appendChild(score);
body.appendChild(select);
body.appendChild(buttonContainer);
buttonContainer.appendChild(rock);
buttonContainer.appendChild(paper);
buttonContainer.appendChild(scissors);
body.appendChild(computerSelected);
body.appendChild(result);

const buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click', () => {
    playerSelection = button.textContent;
    computerSelection = getComputerChoice();
    computerSelected.textContent = 
        `Computer Selection: ${computerSelection}`;
    result.textContent = playRound(playerSelection,
        computerSelection);
    if (playRound(playerSelection, computerSelection).slice(0, 7)
        === 'You Win') playerScore += 1;
    if (playRound(playerSelection, computerSelection).slice(0, 8)
        === 'You Lose') computerScore += 1;
    score.textContent = `Player Score: ${playerScore} -
        Computer Score: ${computerScore}`;
    if (playerScore === 5) {
        alert('PLAYER WINS!');
    } else if (computerScore === 5) { 
        alert('COMPUTER WINS!');
    }
}));