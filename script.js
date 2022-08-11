function getComputerChoice() {
    let options = ['Rock', 'Paper', 'Scissors']
    let randomChoice = Math.floor(Math.random() * options.length)
    return options[randomChoice] 
}