
// Set number of times to play the game
const roundsToPlay = getRoundsToPlay();
console.log(`roundsToPlay value: ${roundsToPlay}`);

const userWantsToPlay = !(roundsToPlay === 0);
console.log(`userWantsToPlay value: ${userWantsToPlay}`);

// Check if the user wants to play the game
if (userWantsToPlay){
    runGame(roundsToPlay)   
} 
else {
    console.log(`Got it! No Rock, Paper, Scissors for you today!`);
}

function runGame(roundsToPlay) {

    const winningChoicesArr = ["paperrock", "scissorspaper", "rockscissors"];
    
    // Initialize Scores
    let userScore = 0;
    let computerScore = 0;

  
    for (let i = 0; i < roundsToPlay; i++) {
        playRound();
    }    

    // Play a round of Rock Paper Scissors
    function playRound() {
        
        // const playersChoices = getPlayersChoices();
        const userChoice = getUserChoice();
        const computerChoice = getComputerChoice();

        getRoundResult(userChoice, computerChoice);

        function getUserChoice() {
            // Prompt user for their choice. Store answer in userChoice.
            const userChoice = prompt("Choose Rock, Paper, or Scissors").toLowerCase();
            // print the user choice
            console.log(`userChoice is ${userChoice}`);
            return userChoice;
        }

        function getComputerChoice() {
            // Get the computer's choice
            const randomInt = getRandomIntBetween(0, 2);
            const computerChoice = ["rock", "paper", "scissors"][randomInt];
            // print the computer choice
            console.log(`computerChoice is ${computerChoice}`);
            return computerChoice;
        }

        function getRoundResult(userChoice, computerChoice) {

            const roundChoices = `${userChoice}${computerChoice}`.toLowerCase();

            if (computerChoice == userChoice) {
                return `${userChoice} vs ${computerChoice}... it's a tie!`;
            }
            else if (winningChoicesArr.includes(roundChoices)) {
                userScore++;
                return `You win! ${userChoice} beats ${computerChoice}!`;
            }
            else {
                computerScore++;
                return `You lose! ${computerChoice} beats ${userChoice}!`;
            }
        }

       // console.log(getPlayerChoices(userChoice, computerChoice));
        //console.log(`Your score: ${userScore}. CPU score: ${computerScore}`);
    }


    // TO-DO: Turn this section into a function that accepts userScore and computerScore 
    if (userScore == computerScore) {
        return console.log(
            `It's a tie!!!!! Final Score: You: ${userScore}. CPU: ${computerScore}.`
        );
    }
    else if (userScore > computerScore) {
        return console.log(
            `You Win!!!!! Final Score: You: ${userScore}. CPU: ${computerScore}.`
        );
    }
    else {
        return console.log(
            `You Lose!!!!! Final Score: You: ${userScore}. CPU: ${computerScore}.`
        );
    }
};



function getRandomIntBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}



function makeFirstCharUpper(string) {
    return string.slice(0, 1).toUpperCase() + string.slice(1);
}

// function userWantsToPlay() {
//     return (!roundsToPlay === 0)
// }

function getRoundsToPlay() {
    console.log(`getRoundsToPlay() ran`)
    let promptInput = prompt("How many times would you like to play Rock Paper Scissors?", 5);
    console.log(`promptInput = ${promptInput}`)
    // handle cancel
    if (promptInput === null) {
        return promptInput = 0;
    }
    else {
        return parseInt(promptInput)
    }
    // handle empty string (user)
    // handle 0
    // handle if negative or over 10 isReasonableNumber lol
      // Cancel == null
    // Empty OK == ""
    // parseInt("") == 0
}