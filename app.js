const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const SCISSORS = 'SCISSORS';
const PAPER = 'PAPER';
const DEFAULT_PLAYER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WIN = 'PLAYER_WINS';
const RESULT_COMPUTER_WIN = 'COMPUTER_WINS';

let gameIsRunning = false;

const getPlayerChoice = function () {
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();
    if (selection != ROCK && selection != SCISSORS && selection != PAPER) {
        alert(`Invalid! We choose ${DEFAULT_PLAYER_CHOICE} for you`);
        return;
    }
    return selection;
};

function getComputerChoice() {
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        return ROCK;
    } else if (randomValue < 0.68) {
        return SCISSORS;
    } else {
        return PAPER;
    }
}

function getWinner(cChoice, pChoice = DEFAULT_PLAYER_CHOICE) {
    if (cChoice == pChoice) {
        return RESULT_DRAW;
    } else if (
        (cChoice == ROCK && pChoice == PAPER) ||
        (cChoice == PAPER && pChoice == SCISSORS) ||
        (cChoice == SCISSORS && pChoice == ROCK)
    ) {
        return RESULT_PLAYER_WIN;
    } else {
        return RESULT_COMPUTER_WIN;
    }
}

startGameBtn.addEventListener('click', function () {
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    console.log('Game is starting...');
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    let result;
    if (playerChoice) {
        result = getWinner(computerChoice, playerChoice);
    } else {
        result = getWinner(computerChoice);
    }
    console.log(result);
    let message = `You picked ${
        playerChoice || DEFAULT_PLAYER_CHOICE
    }, computer picked ${computerChoice}, therefore you`;
    if (result === RESULT_DRAW) {
        message = message + ' had a draw.';
    } else if (result === RESULT_PLAYER_WIN) {
        message = message + ' won.';
    } else {
        message = message + ' lost.';
    }
    alert(message);
    gameIsRunning = false;
});
