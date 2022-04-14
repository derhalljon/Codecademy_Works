// Halldór Jónsson - Rock, Paper, Scissors - With 'cheat code'
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock') {
        return userInput;
    } else if (userInput === 'paper') {
        return userInput;
    } else if (userInput === 'scissors') {
        return userInput;
    } else if (userInput === 'bomb') {
        return userInput;
    } else {
        console.log('Invalid option');
    }
};
function getComputerChoice() {
    getComputerChoice = Math.floor(Math.random() * 3);
    if (getComputerChoice === 0) {
        return ('rock');
    } else if (getComputerChoice === 1) {
        return ('paper');
    } else {
        return ('scissors');
    }
}
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return ('The game was a tie');
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return ('Paper beats Rock. Computer is the winner');
        } else {
            return ('Rock beats Scissors. User is the winner');
        }
    }
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return ('Scissors beats paper. Computer is the winner');
        } else {
            return ('Paper beats rock. User is the winner');
        }
    }
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return ('Rock beats scissors. Computer is the winner');
        } else {
            return ('Scissors beats paper. User is the winner');
        }
    }
    if (userChoice === 'bomb') {
    }
}
const playGame = () => {
    const userChoice = getUserChoice('paper');
    const computerChoice = getComputerChoice();
    if (userChoice === 'bomb') {
        return console.log('You win, you blew up the computer.')
    } else {
        console.log(`You threw ${userChoice}`);
        console.log(`The computer threw ${computerChoice}`);
        console.log(determineWinner(userChoice, computerChoice));
    }
};
playGame();
