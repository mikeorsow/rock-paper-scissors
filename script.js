const getRandomIntBetween = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const getComputerChoice = () => ["rock", "paper", "scissors"][getRandomIntBetween(0,2)];
const makeFirstCharUpper = (string) => string.slice(0,1).toUpperCase() + string.slice(1);

// Prompt user for their choice. Store answer in userChoice.
const userChoice = makeFirstCharUpper(prompt("Choose Rock, Paper, or Scissors").toLowerCase());
console.log(`userChoice is ${userChoice}`);

// Get the computer's choice. Store answer in computerChoice.
const computerChoice = makeFirstCharUpper(getComputerChoice());
console.log(`computerChoice is ${computerChoice}`);

// test auto-generated computerChoice, prompted userChoice
let playRound = (userChoice, computerChoice) => {
    const winningChoicesArr = ["paperrock", "scissorspaper", "rockscissors"];
    console.log(`roundChoices before lower: ${userChoice}${computerChoice}`)
    const roundChoices = `${userChoice}${computerChoice}`.toLowerCase();
    console.log(`roundChoices after lower: ${roundChoices}`)
    if (computerChoice == userChoice) {
        return `${userChoice} vs ${computerChoice}... it's a tie!`
    }
    else { 
        return winningChoicesArr.includes(roundChoices) ? `You win! ${userChoice} beats ${computerChoice}!` : `You lose! ${computerChoice} beats ${userChoice}!`;
    }
}

console.log(playRound(userChoice, computerChoice))

// Check if 

// turn all of the above into a function, playRound that accepts 2 parameters computerChoice & userChoice
// Make the game run 5 times
// Make the game run numRoundsToPlay times