const getRandomIntBetween = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const getComputerChoice = () => ["rock", "paper", "scissors"][getRandomIntBetween(0,2)];

const userChoice = "scissors";
const computerChoice = getComputerChoice();


// test auto-generated computerChoice, hardcoded userChoice
let playRound = (userChoice, computerChoice) => {
    const winningOutcomes = ["paperrock", "scissorspaper", "rockscissors"];
    const roundChoices = `${userChoice}${computerChoice}`;
    if (computerChoice == userChoice) {
        return `${userChoice} vs ${computerChoice}... it's a tie!`
    }
    else { 
        return winningOutcomes.includes(roundChoices) ? `You win! ${userChoice} beats ${computerChoice}!` : `You lose! ${computerChoice} beats ${userChoice}!`;
    }
}


console.log(playRound(userChoice, computerChoice))

// Prompt user for their choice. Store answer in userChoice
// Check if 

// turn all of the above into a function, playRound that accepts 2 parameters computerChoice & userChoice
// Make the game run 5 times
// Make the game run numRoundsToPlay times