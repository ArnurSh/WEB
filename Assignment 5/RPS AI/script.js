const resultElement = document.getElementById('result');

const choices = ['rock', 'paper', 'scissors'];

// Function to determine the result of the game
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') &&
        (userChoice === 'paper' && computerChoice === 'rock') &&
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

// Function to play the game
function playGame(userChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const result = determineWinner(userChoice, computerChoice);
    resultElement.innerText = `You chose ${userChoice}. Computer chose ${computerChoice}. ${result}`;
}

// Event listeners for buttons
document.getElementById('rock').addEventListener('click', () => playGame('rock'));
document.getElementById('paper').addEventListener('click', () => playGame('paper'));
document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));